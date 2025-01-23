import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import AnimatedContent from "./AnimatedContent";

/**
 * Props for `HomeHero`.
 */
export type HomeHeroProps = SliceComponentProps<Content.HomeHeroSlice>;

/**
 * Component for "HomeHero" Slices.
 */
const HomeHero = async ({ slice }: HomeHeroProps): Promise<JSX.Element> => {
  return (
    <section className="relative py-32 dark">
      <AnimatedContent slice={slice} />
    </section>
  );
};

export default HomeHero;
