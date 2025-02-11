"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";
import { useMediaQuery } from "usehooks-ts";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";

export default function AnimatedContent(): JSX.Element {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const prefersReducedMotion = usePrefersReducedMotion();
  const formFunctionRef = useRef<HTMLDivElement>(null);
  const convertRef = useRef<HTMLDivElement>(null);
  const orangeSquiggleRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(useGSAP, ScrollTrigger);
  useGSAP(() => {
    if (prefersReducedMotion || !isDesktop) {
      return;
    }
    gsap.set(".form-ball", { opacity: 0, x: 170 });
    const formFunctionTl = gsap.timeline({
      scrollTrigger: {
        trigger: formFunctionRef.current,
        start: "top bottom-=40%",
        end: "bottom center",
        toggleActions: "play resume resume resume",
      },
    });
    formFunctionTl.fromTo("#form", { opacity: 0, y: 20 }, { opacity: 1, duration: 0.5, y: 0 }, 0);
    formFunctionTl.fromTo(
      "#function",
      { opacity: 0, y: 20 },
      { opacity: 1, duration: 0.5, y: 0 },
      0
    );

    formFunctionTl.fromTo(
      ".form-ball",
      { opacity: 0, x: 170 },
      { opacity: 1, x: 0, duration: 1 },
      1
    );
    formFunctionTl.fromTo(
      ".function-ball",
      { opacity: 0, x: -170 },
      { opacity: 1, x: 0, duration: 1 },
      1
    );
    formFunctionTl.fromTo(".function-line", { opacity: 0 }, { opacity: 1, duration: 0.6 }, 1);
    formFunctionTl.fromTo(".form-line", { opacity: 0 }, { opacity: 1, duration: 0.6 }, 1);
    gsap.set("#convert", { opacity: 0, y: 40 });
    gsap.fromTo(
      "#convert",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.4,
        scrollTrigger: {
          trigger: convertRef.current,
          start: "top bottom-=40%",
          end: "bottom center",
          toggleActions: "play resume resume pause",
        },
      }
    );
    gsap.set("#top-orange-squiggle", { y: -300 });
    gsap.fromTo(
      "#top-orange-squiggle",
      { y: -300 },
      {
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: orangeSquiggleRef.current,
          start: "top center+=80%",
          end: "top center-=80%",
          toggleActions: "play resume resume reverse",
          scrub: 1,
        },
      }
    );
    gsap.set(".process-container", { opacity: 0, y: 20 });
    gsap.fromTo(
      ".process-container",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: processRef.current,
          start: "top center+=50%",
          end: "top center-=50%",
          toggleActions: "play resume resume resume",
        },
      }
    );

    gsap.set(".line-discovery", { opacity: 0 });
    gsap.fromTo(
      ".line-discovery",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".discovery-container",
          start: "top bottom-=20%",
          end: "top+=10% center",
          toggleActions: "play resume resume resume",
        },
      }
    );

    gsap.set(".ball-discovery", { opacity: 0 });
    gsap.fromTo(
      ".ball-discovery",
      { opacity: 0, y: -120 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        scrollTrigger: {
          trigger: ".discovery-container",
          start: "top bottom-=20%",
          end: "top-=20% center",
          toggleActions: "play resume resume reverse",
          scrub: true,
        },
      }
    );

    gsap.set("#discovery-title", { opacity: 0, y: 10 });
    gsap.fromTo(
      "#discovery-title",
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: "#discovery-content-container",
          start: "top bottom-=20%",
          end: "top+=20% center",
          toggleActions: "play resume resume reverse",
        },
      }
    );

    gsap.set("#discovery-paragraph", { opacity: 0, y: 20 });
    gsap.fromTo(
      "#discovery-paragraph",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: "#discovery-content-container",
          start: "top bottom-=30%",
          end: "top+=20% center",
          toggleActions: "play resume resume resume",
        },
      }
    );

    gsap.set("#formulation-line", { opacity: 0 });
    gsap.fromTo(
      "#formulation-line",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: "#formulation-container",
          start: "top bottom-=20%",
          end: "top+=10% center",
          toggleActions: "play resume resume resume",
        },
      }
    );

    gsap.set("#formulation-circle", { opacity: 0 });
    gsap.fromTo(
      "#formulation-circle",
      { opacity: 0, y: -90 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        scrollTrigger: {
          trigger: "#formulation-container",
          start: "top bottom-=20%",
          end: "top-=20% center",
          toggleActions: "play resume resume reverse",
          scrub: true,
        },
      }
    );

    gsap.set("#development-line", { opacity: 0 });
    gsap.fromTo(
      "#development-line",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: "#formulation-container",
          start: "top bottom-=20%",
          end: "top+=10% center",
          toggleActions: "play resume resume resume",
        },
      }
    );

    gsap.set("#development-circle", { opacity: 0 });
    gsap.fromTo(
      "#development-circle",
      { opacity: 0, y: -90 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        scrollTrigger: {
          trigger: "#development-container",
          start: "top bottom-=20%",
          end: "top-=20% center",
          toggleActions: "play resume resume reverse",
          scrub: true,
        },
      }
    );

    gsap.set("#formulation-title", { opacity: 0, y: 10 });
    gsap.fromTo(
      "#formulation-title",
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: "#formulation-content",
          start: "top bottom-=20%",
          end: "top+=20% center",
          toggleActions: "play resume resume reverse",
        },
      }
    );

    gsap.set("#formulation-paragraph", { opacity: 0, y: 20 });
    gsap.fromTo(
      "#formulation-paragraph",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: "#formulation-content",
          start: "top bottom-=30%",
          end: "top+=20% center",
          toggleActions: "play resume resume resume",
        },
      }
    );

    gsap.set("#development-title", { opacity: 0, y: 10 });
    gsap.fromTo(
      "#development-title",
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: "#development-content",
          start: "top bottom-=20%",
          end: "top+=20% center",
          toggleActions: "play resume resume reverse",
        },
      }
    );

    gsap.set("#development-paragraph", { opacity: 0, y: 20 });
    gsap.fromTo(
      "#development-paragraph",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: "#development-content",
          start: "top bottom-=30%",
          end: "top+=20% center",
          toggleActions: "play resume resume resume",
        },
      }
    );
  });
  return (
    <>
      <section className="pt-20 lg:flex lg:gap-8 lg:justify-center mx-auto" ref={formFunctionRef}>
        <div className="flex items-center flex-col gap-4 lg:justify-center">
          <p className="uppercase font-display lg:order-last" id="form">
            Form
          </p>
          <div className="flex items-center flex-col lg:flex-row">
            <div className="rounded-full h-[9px] w-[9px] bg-slate-100 form-ball"></div>

            <div className="w-[1px] h-20 lg:w-40 lg:h-[1px] bg-slate-100 form-line"></div>
          </div>
        </div>
        <div className="relative flex justify-center items-center my-6">
          <div className="w-52 h-52 rounded-full relative overflow-hidden ">
            <div className="bg-[length:36px] w-[150%] h-[150%] absolute -top-1/4 -left-1/4 center-squiggle flex justify-center items-center">
              <p className="">F.Y.S</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 lg:justify-center">
          <div className="flex items-center flex-col lg:flex-row">
            <div className="w-[1px] h-20 lg:w-40 lg:h-[1px] bg-slate-100 function-line"></div>
            <div className="rounded-full h-[9px] w-[9px] bg-slate-100 function-ball"></div>
          </div>
          <p className="uppercase font-display" id="function">
            Function
          </p>
        </div>
      </section>
      <section ref={convertRef}>
        <div className="my-16 max-w-2xl mx-auto" id="convert">
          <p className="text-4xl leading-10 font-body lg:text-6xl lg:py-16 text-center">
            We create beautiful websites that are optimized to convert.
          </p>
        </div>
      </section>
      <section className="border-t border-tertiary">
        <div className="flex justify-center overflow-hidden">
          <div
            ref={orangeSquiggleRef}
            id="top-orange-squiggle"
            className="rounded-full w-52 h-52 orange-squiggle relative -top-28"></div>
        </div>
        <div
          className="flex-col flex items-center gap-4 my-5 opacity-0 process-container"
          ref={processRef}>
          <p className="font-display uppercase">Our Process</p>
          <p className="font-body text-5xl">How we work</p>
        </div>
        <div className="flex flex-col items-center gap-4 lg:max-w-2xl mx-auto">
          <div className="flex items-center flex-col mt-10 discovery-container">
            <div className="w-[1px] h-28 bg-slate-100 line-discovery"></div>
            <div className="rounded-full h-[9px] w-[9px] bg-slate-100 ball-discovery"></div>
          </div>
          <div className="flex flex-col">
            <div id="discovery-content-container" className="flex flex-col gap-4 items-center">
              <p id="discovery-title" className="uppercase font-display">
                Discovery
              </p>
              <p id="discovery-paragraph" className="font-body text-4xl text-center">
                We take the time to listen and immerse ourselves in your business and understand
                your goals. We strive to balance aesthetic and conversion optimization to ensure
                your investment produces ROI.
              </p>
            </div>
          </div>
          <div id="formulation-container" className="flex flex-col items-center gap-4">
            <div className="flex items-center flex-col mt-20">
              <div id="formulation-line" className="w-[1px] h-20 bg-slate-100" />
              <div
                id="formulation-circle"
                className="rounded-full h-[9px] w-[9px] bg-slate-100"></div>
            </div>
            <div id="formulation-content" className="flex flex-col">
              <div className="flex flex-col gap-4 items-center">
                <p id="formulation-title" className="uppercase font-display">
                  Formulation
                </p>
                <p id="formulation-paragraph" className="font-body text-4xl text-center">
                  Our talented and dynamic designers will work within your brand guidelines to
                  create a detailed prototype of your new website.
                </p>
              </div>
            </div>
          </div>
          <div id="development-container" className="flex flex-col items-center gap-4">
            <div className="flex items-center flex-col mt-20">
              <div id="development-line" className="w-[1px] h-20 bg-slate-100"></div>
              <div
                id="development-circle"
                className="rounded-full h-[9px] w-[9px] bg-slate-100"></div>
            </div>
            <div id="development-content" className="flex flex-col">
              <div className="flex flex-col gap-4 items-center">
                <p id="development-title" className="uppercase font-display">
                  Development
                </p>
                <p id="development-paragraph" className="font-body text-4xl text-center">
                  After approval of the prototype, our development team will get to work building
                  your new website. Our quality assurance team will complete in-depth testing to
                  ensure a smooth launch.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center flex-col mt-20">
              <div className="w-[1px] h-20 bg-tertiary"></div>

              <div className="rounded-full h-[9px] w-[9px] bg-tertiary"></div>
            </div>
            <div className="flex flex-col mb-16">
              <div className="flex flex-col gap-4 items-center">
                <p className="uppercase font-display">Then together we launch it</p>
                <div className="w-60 h-60 rounded-full relative overflow-hidden ">
                  <div
                    id="squiggle"
                    className="bg-[length:36px] w-[150%] h-[150%] absolute -left-1/4 center-squiggle flex justify-center items-center"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
