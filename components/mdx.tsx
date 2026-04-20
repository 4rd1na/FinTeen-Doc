import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { ImageZoom } from "fumadocs-ui/components/image-zoom";
import { Tips, Kendala } from "@/components/custom-callouts";
import { Step, Steps } from "fumadocs-ui/components/steps";
import { Callout } from "fumadocs-ui/components/callout";
import { Accordion, Accordions } from "fumadocs-ui/components/accordion";
import { cn } from "@/lib/utils";

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    Tips, 
    Kendala, 
    Step,
    Steps,
    Callout,
    Accordion,
    Accordions,
    iframe: (props: any) => {
      const { width, height, style, className, ...cleanProps } = props;
      return (
        <div
          className="w-full my-8 overflow-hidden rounded-2xl border bg-muted shadow-lg z-0 relative"
          style={{ paddingBottom: "56.25%", height: 0 }}
        >
          <iframe
            {...cleanProps}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: 0,
            }}
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            loading="lazy"
          />
        </div>
      );
    },
    img: (props) => {
      const isInline =
        props.className?.includes("inline") ||
        (props as any).style?.display === "inline" ||
        (props.width && Number(props.width) <= 64);

      if (isInline) {
        return (
          <img
            {...(props as any)}
            className={cn(
              "inline-block align-middle m-0 p-0 !mt-0 !mb-0 border-none shadow-none",
              props.className
            )}
          />
        );
      }

      return (
        <ImageZoom
          {...(props as any)}
          className={cn(
            "rounded-2xl border bg-muted/50 shadow-sm mb-4 my-8 mx-auto",
            props.className
          )}
        />
      );
    },
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
