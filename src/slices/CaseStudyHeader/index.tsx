import { asText, Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `CaseStudyHeader`.
 */
export type CaseStudyHeaderProps = SliceComponentProps<Content.CaseStudyHeaderSlice>;

/**
 * Component for "CaseStudyHeader" Slices.
 */
const CaseStudyHeader = ({ slice }: CaseStudyHeaderProps): JSX.Element => {
  return (
    <div className="flex justify-center items-center my-20">
      <h1 className="font-display text-lg">{asText(slice.primary.header)}</h1>
    </div>
  );
};

export default CaseStudyHeader;
