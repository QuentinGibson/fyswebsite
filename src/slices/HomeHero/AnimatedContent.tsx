"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { asText, Content } from "@prismicio/client";
import { useGSAP } from "@gsap/react";
import Squiggle from "@/app/components/Squiggle";
import { PrismicImage, PrismicLink } from "@prismicio/react";
import OrangeSquiggle from "@/app/components/OrangeSquiggle";
import { useMediaQuery } from "usehooks-ts";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";

export default function AnimatedContent({ slice }: { slice: Content.HomeHeroSlice }): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const isDesktop = useMediaQuery("(min-width: 1024px)", {
    defaultValue: false,
  });

  gsap.registerPlugin(useGSAP);
  useGSAP(
    () => {
      if (prefersReducedMotion || !isDesktop) {
        gsap.set(".hero-text-container", { y: 0, opacity: 1 });
        gsap.set(".orange-squiggle-container", { x: 0, opacity: 1 });
        gsap.set(".hero-image-container", { x: 0, opacity: 1 });
        return;
      }

      gsap.set(".hero-text-container", { y: 100, opacity: 0 });
      gsap.set(".orange-squiggle-container", { x: 20, opacity: 0 });
      gsap.set(".hero-image-container", { x: 20, opacity: 0 });
      gsap.fromTo(
        ".hero-text-container",
        { y: 100 },
        { y: 0, opacity: 1, ease: "power2.inOut", duration: 1 }
      );
      gsap.fromTo(
        ".hero-image-container",
        { x: 140, opacity: 0.5 },
        { x: 0, opacity: 1, ease: "power2.inOut", duration: 1.1 }
      );
      gsap.fromTo(
        ".orange-squiggle-container",
        { x: 10, opacity: 0 },
        { x: 0, opacity: 1, ease: "power2.inOut", duration: 1.8 }
      );
    },
    { scope: containerRef }
  );

  return (
    <div className="overflow-hidden" ref={containerRef}>
      <Squiggle />
      <div className="z-10 relative mx-auto flex flex-col lg:flex-row sm:px-8 max-w-screen-lg">
        <div className="basis-[480px] hero-text-container opacity-0">
          <span className="font-display uppercase text-lg tracking-[1.8px] mb-4 inline-block">
            {asText(slice.primary.starter)}
          </span>
          <h1 className="text-4xl mb-6 font-body md:text-6xl">{asText(slice.primary.header)}</h1>
          <div className="flex flex-col gap-6 font-sauce">
            <p className="font-sauce">{asText(slice.primary.top_content)}</p>
            <p className="font-sauce">{asText(slice.primary.bottom_content)}</p>
            <div>
              <PrismicLink
                field={slice.primary.cta_link}
                className="my-8 uppercase py-3 px-9 bg-secondary text-primary font-display tracking-[1.8px]"
              />
            </div>
          </div>
        </div>
        <div className="relative mt-10 flex mx-auto justify-center w-11/12 sm:w-fit">
          <OrangeSquiggle className="opacity-0" />
          <div className="max-w-sm hero-image-container opacity-0">
            <PrismicImage field={slice.primary.image} className="rounded-t-full w-full max-w-sm" />
          </div>
        </div>
      </div>
    </div>
  );
}
