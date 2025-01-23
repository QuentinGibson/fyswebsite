import Squiggle from "@/app/components/Squiggle";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import ContactForm from "../ContactForm";

/**
 * Props for `HomeContactForm`.
 */
export type HomeContactFormProps = SliceComponentProps<Content.HomeContactFormSlice>;

/**
 * Component for "HomeContactForm" Slices.
 */
const HomeContactForm = ({ slice }: HomeContactFormProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-primary py-24 relative"
    >
      <Squiggle />
    </section>
  );
};

export default HomeContactForm;
