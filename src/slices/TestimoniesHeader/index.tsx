import { asText, Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Link from "next/link";

/**
 * Props for `TestimoniesHeader`.
 */
export type TestimoniesHeaderProps = SliceComponentProps<Content.TestimoniesHeaderSlice>;

/**
 * Component for "TestimoniesHeader" Slices.
 */
const TestimoniesHeader = ({ slice }: TestimoniesHeaderProps): JSX.Element => {
  return (
    <section className="flex my-20 justify-center items-center">
      <h1 className="font-body text-5xl">{asText(slice.primary.header)}</h1>
    </section>
  );
};

export default TestimoniesHeader;
