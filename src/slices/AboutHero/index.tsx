import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import AnimatedContent from "./AnimatedContent";

/**
 * Props for `ContactHero`.
 */
export type AboutHeroProps = SliceComponentProps<Content.ContactHeroSlice>;

/**
 * Component for "ContactHero" Slices.
 */
const AboutHero = ({ slice }: AboutHeroProps): JSX.Element => {
  return (
    <section className="">
      <AnimatedContent slice={slice} />
    </section>
  );
};

export default AboutHero;
