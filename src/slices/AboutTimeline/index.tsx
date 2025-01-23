import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import AnimatedContent from "./AnimatedContent";

/**
 * Props for `ContactTimeline`.
 */
export type ContactTimelineProps = SliceComponentProps<Content.ContactTimelineSlice>;

/**
 * Component for "ContactTimeline" Slices.
 */
const ContactTimeline = ({ slice }: ContactTimelineProps): JSX.Element => {
  return (
    <>
      <AnimatedContent />
    </>
  );
};

export default ContactTimeline;
