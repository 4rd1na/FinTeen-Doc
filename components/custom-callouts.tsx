import { Lightbulb, AlertTriangle } from 'lucide-react';

export function Tips({ children }: { children: React.ReactNode }) {
    return (
        <div className="my-8 not-prose">
            <div className="relative overflow-hidden rounded-3xl border border-teal-100/80 bg-gradient-to-br from-teal-50/80 to-white p-6 pt-7 shadow-sm dark:border-teal-900/30 dark:from-teal-950/20 dark:to-background">
                {/* Side Accent */}
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-teal-500/30" />

                <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-teal-100 text-teal-600 shadow-sm dark:bg-teal-900/50 dark:text-teal-400">
                        <Lightbulb size={24} strokeWidth={2} />
                    </div>
                    <div className="flex flex-col flex-1 gap-1">
                        <div className="text-[15px] leading-relaxed text-teal-900/70 dark:text-teal-200/80
                            [&_h2]:text-lg [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-teal-950 [&_h2]:dark:text-teal-100 [&_h2]:mt-0 [&_h2]:mb-2
                            [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mt-2 [&_p]:mt-1">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function Kendala({ children }: { children: React.ReactNode }) {
    return (
        <div className="my-8 not-prose">
            <div className="relative overflow-hidden rounded-3xl border border-rose-100/80 bg-gradient-to-br from-rose-50/80 to-white p-6 pt-7 shadow-sm dark:border-rose-900/30 dark:from-rose-950/20 dark:to-background">
                {/* Side Accent */}
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-rose-500/30" />

                <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-rose-100 text-rose-600 shadow-sm dark:bg-rose-900/50 dark:text-rose-400">
                        <AlertTriangle size={24} strokeWidth={2} />
                    </div>
                    <div className="flex flex-col flex-1 gap-1">
                        <div className="text-[15px] leading-relaxed text-rose-900/70 dark:text-rose-200/80 
                            [&_h2]:text-lg [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-rose-950 [&_h2]:dark:text-rose-100 [&_h2]:mt-0 [&_h2]:mb-2
                            [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mt-2 [&_p]:mt-1">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
