import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import AnimatedContent from "./AnimatedContent";

/**
 * Props for `HomeServices`.
 */
export type HomeServicesProps = SliceComponentProps<Content.HomeServicesSlice>;

/**
 * Component for "HomeServices" Slices.
 */
const HomeServices = ({ slice }: HomeServicesProps): JSX.Element => {
  return (
    <section className="relative py-32 font-sauce sm:px-8 dark">
      <AnimatedContent slice={slice} />
    </section>
  );
};

export default HomeServices;
