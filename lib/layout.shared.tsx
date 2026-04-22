import { LanguageSwitch } from '@/components/languange-switch';
import Image from 'next/image';
import { gitConfig } from '@/lib/shared';

export function baseOptions(): any {
  return {
    nav: {
      transparentMode: "always",
      title: (
        <div className="flex items-center gap-2">
          <Image
            src="/images/finteen.png"
            alt="Logo FinTeen"
            width={30}
            height={30}
            className="rounded-sm"
          />
          <span className="font-bold text-lg tracking-tight">FinTeen</span>
        </div>
      ),
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
    sidebar: {
      footer: (
        <div className="md:hidden p-2" data-sidebar-switcher>
          <LanguageSwitch />
        </div>
      ),
    },
    links: [
      {
        type: "custom",
        children: (
          <div className="hidden md:block">
            <LanguageSwitch />
          </div>
        ),
      },
    ],
    i18n: false, 
  };
}
