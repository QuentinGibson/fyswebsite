"use client";

import OrangeSquiggleAlt from "@/app/components/OrangeSquiggleAlt";
import { asText, Content } from "@prismicio/client";
import { PrismicImage } from "@prismicio/react";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useRef } from "react";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";
import { useMediaQuery } from "usehooks-ts";

export default function AnimatedContent({
  slice,
}: {
  slice: Content.HomeServicesSlice;
}): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const isDesktop = useMediaQuery("(min-width: 1024px)", {
    defaultValue: false,
  });

  const squiggleRef = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(ScrollTrigger, useGSAP);
  useGSAP(
    () => {
      if (prefersReducedMotion || !isDesktop) {
        return;
      }
      gsap.defaults({
        ease: "power2.inOut",
      });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
        },
      });

      tl.fromTo(
        squiggleRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
        }
      );
      gsap.set(".image-container", { opacity: 0, x: -400 });
      gsap.fromTo(
        ".image-container",
        { opacity: 0, x: -400 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom-=40%",
            toggleActions: "play pause resume pause",
            // markers: true,
          },
        }
      );

      gsap.set(".text-container", { opacity: 0, x: 400 });
      gsap.fromTo(
        ".text-container",
        { opacity: 0, x: 400 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom-=40%",
            toggleActions: "play pause resume reverse",
            // markers: true,
          },
        }
      );
    },
    { scope: containerRef }
  );

  const serviceTemplate = (
    service: Content.HomeServicesSliceDefaultPrimaryServicesItem,
    index: number
  ) => {
    const { service_header: header, service_description: description } = service;
    return (
      <div className="pb-6" key={index}>
        <h2 className="font-bold mb-1">{asText(header)}</h2>
        <p>{asText(description)}</p>
      </div>
    );
  };

  return (
    <div
      className="flex overflow-hidden flex-col lg:flex-row justify-between max-w-screen-lg mx-auto"
      ref={containerRef}>
      <div className="basis-[480px] lg:order-2 text-container">
        <span className="uppercase text-md mb-4 inline-block font-display tracking-[1.8px]">
          {asText(slice.primary.title)}
        </span>
        <h1 className="text-4xl md:text-6xl mb-6 font-body">{asText(slice.primary.header)}</h1>
        {slice.primary.services.map((service, index) => serviceTemplate(service, index))}
      </div>
      <div className="rounded-t-full flex justify-center w-11/12 sm:w-fit relative my-24 lg:order-1 mx-auto opacity-0 will-change-transform image-container">
        <PrismicImage field={slice.primary.image} className="rounded-t-full w-full max-w-sm" />
        <OrangeSquiggleAlt ref={squiggleRef} />
      </div>
    </div>
  );
}
