import { getPageImage, getPageMarkdownUrl, source } from '@/lib/source';
import { DocsBody, DocsDescription, DocsPage, DocsTitle, MarkdownCopyButton, ViewOptionsPopover } from 'fumadocs-ui/layouts/notebook/page';
import { notFound } from 'next/navigation';
import { getMDXComponents } from '@/components/mdx';
import type { Metadata } from 'next';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { gitConfig } from '@/lib/shared';
import { icons } from 'lucide-react';

type PageProps = {
  params: { locale: string; slug?: string[] };
};

export default async function Page({params}: PageProps) {
  const { locale, slug } = await params;
  const page = source.getPage(slug, locale);

  if (!page) notFound();

  const MDX = page.data.body;
  const markdownUrl = getPageMarkdownUrl(page).url;
  const iconName = page.data.icon as keyof typeof icons;
  const LucideIcon = iconName ? icons[iconName] : null;

  return (
    <DocsPage 
      toc={page.data.toc} 
      full={page.data.full}
      tableOfContent={{
        enabled: true,
        component:
          page.data.toc.length > 0 ? undefined : (
            <div className="hidden lg:block w-[293px] shrink-0" />
          ),
      }}
      >
      {/* <DocsTitle>{page.data.title}</DocsTitle> */}
      {/* <DocsDescription className="mb-0">{page.data.description}</DocsDescription> */}
      <div className="flex flex-row gap-2 items-center border-b pb-6">
        <MarkdownCopyButton markdownUrl={markdownUrl} />
        <ViewOptionsPopover
          markdownUrl={markdownUrl}
          githubUrl={`https://github.com/${gitConfig.user}/${gitConfig.repo}/blob/${gitConfig.branch}/content/docs/${page.path}`}
        />
      </div>
      <DocsBody>
        <div className="mb-8 flex flex-col sm:flex-row items-start sm:items-center gap-3">
          {/* Ikon */}
          {LucideIcon && (
            <div className="flex shrink-0 items-center justify-center text-fd-primary">
              <LucideIcon />
            </div>
          )}

          {/* Judul */}
          <DocsTitle className="!m-0 !p-0 text-2xl md:text-3xl font-bold leading-tight">
            {page.data.title}
          </DocsTitle>
        </div>
        
        <MDX
          components={getMDXComponents({
            // this allows you to link to other pages with relative file paths
            a: createRelativeLink(source, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata({params} : PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const page = source.getPage(slug, locale);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      images: getPageImage(page).url,
    },
  };
}

