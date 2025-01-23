"use client";

import { useGSAP } from "@gsap/react";
import { Content } from "@prismicio/client";
import { PrismicImage, PrismicLink, PrismicRichText } from "@prismicio/react";
import gsap from "gsap";
import { useRef } from "react";
import { useMediaQuery } from "usehooks-ts";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";
import OrangeSquiggle from "@/app/components/OrangeSquiggle";

export default function AnimatedContent({
  slice,
}: {
  slice: Content.ContactHeroSlice;
}): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const isDesktop = useMediaQuery("(min-width: 1024px)", {
    defaultValue: false,
  });
  gsap.registerPlugin(useGSAP);
  useGSAP(
    () => {
      if (prefersReducedMotion || !isDesktop) {
        return;
      }
      gsap.defaults({
        ease: "power2.inOut",
      });
      const tl = gsap.timeline({
        defaults: {
          ease: "power2.inOut",
        },
      });
      gsap.set(".content-container", { x: 40, opacity: 0 });

      tl.fromTo(".content-container", { opacity: 0, x: 40 }, { opacity: 1, x: 0, duration: 1 }, 0);
      tl.fromTo(".image-container", { opacity: 0, x: -40 }, { opacity: 1, x: 0, duration: 1 }, 0);
    },
    { scope: containerRef }
  );
  return (
    <div
      className="grid mx-4 lg:grid-cols-2 lg:mx-8 lg:py-20 lg:items-center lg:gap-x-12 lg:grid"
      ref={containerRef}>
      <div className="flex flex-col gap-8 pt-20 pb-5 mx-auto content-container opacity-0">
        <PrismicRichText
          components={{
            heading1: ({ children }) => (
              <h1 className="font-display uppercase text-lg tracking-[1.8px] inline-block">
                {children}
              </h1>
            ),
          }}
          field={slice.primary.header}
        />
        <PrismicRichText
          components={{
            heading2: ({ children }) => (
              <h2 className="font-body text-4xl md:text-6xl lg:max-w-md">{children}</h2>
            ),
          }}
          field={slice.primary.content}
        />
        <div className="flex">
          <PrismicLink
            field={slice.primary.link}
            className="uppercase px-9 py-3 bg-white text-slate-800 font-display tracking-widest"
          />
        </div>
      </div>
      <div className="relative mt-10 flex  justify-center w-11/12 sm:w-fit lg:order-first mx-auto image-container opacity-0">
        <OrangeSquiggle />
        <div className="max-w-sm">
          <PrismicImage className="rounded-t-full w-full max-w-sm" field={slice.primary.image} />
        </div>
      </div>
    </div>
  );
}
