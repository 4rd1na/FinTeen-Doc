import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/notebook';
import { baseOptions } from '@/lib/layout.shared';

// export default function Layout({ children, params }: LayoutProps<'/docs'>) {
//   return (
//     <DocsLayout 
//       tree={source.getPageTree()} 
//       {...baseOptions()}
//       >
//         {children}
//     </DocsLayout>
//   );
// }
export default async function Layout({ 
  children, 
  params, 
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <DocsLayout
      tree={source.getPageTree(locale)}
      {...baseOptions()}
    >
      {children}
    </DocsLayout>
  );
}