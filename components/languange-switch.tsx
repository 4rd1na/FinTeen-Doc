"use client";

import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function LanguageSwitch() {
  const pathname = usePathname();
  const router = useRouter();

  const currentLocale = pathname.split("/")[1] === "en" ? "en" : "id";

  function switchLocale(locale: string) {
    if (locale === currentLocale) return;

    const segments = pathname.split("/");
    segments[1] = locale;
    const newPath = segments.join("/");
    router.push(newPath);
  }

  if (pathname === "/") {
    return null;
  }

  return (
    <div className="flex items-center gap-1.5 bg-muted/30 backdrop-blur-md p-1 rounded-full border border-border/50 shadow-sm relative overflow-hidden h-9 w-[70px] shrink-0">
      {/* Background Active Indicator */}
      <div
        className={cn(
          "absolute h-7 w-7 bg-primary/20 backdrop-blur-md rounded-full border border-primary/30 transition-all duration-500 ease-in-out",
          currentLocale === "id" ? "left-1" : "left-[38px]"
        )}
      />

      <button
        onClick={() => switchLocale("id")}
        className={cn(
          "relative h-7 w-7 overflow-hidden rounded-full transition-all duration-300 z-10 flex items-center justify-center",
          currentLocale === "id" ? "scale-110" : "opacity-40 grayscale hover:opacity-100 hover:grayscale-0 shadow-none"
        )}
      >
        <Image
          src="/flags/id.jpg"
          alt="ID"
          fill
          className="object-cover"
          sizes="40px"
        />
      </button>

      <button
        onClick={() => switchLocale("en")}
        className={cn(
          "relative h-7 w-7 overflow-hidden rounded-full transition-all duration-300 z-10 flex items-center justify-center",
          currentLocale === "en" ? "scale-110" : "opacity-40 grayscale hover:opacity-100 hover:grayscale-0 shadow-none"
        )}
      >
        <Image
          src="/flags/en.webp"
          alt="EN"
          fill
          className="object-cover"
          sizes="40px"
        />
      </button>
    </div>
  );
}
