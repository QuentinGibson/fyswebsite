import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `PorfolioHeader`.
 */
export type PorfolioHeaderProps = SliceComponentProps<Content.PorfolioHeaderSlice>;

/**
 * Component for "PorfolioHeader" Slices.
 */
const PorfolioHeader = ({ slice }: PorfolioHeaderProps): JSX.Element => {
  return (
    <div className="flex justify-center items-center my-28">
      <PrismicRichText
        components={{
          heading1: ({ children }) => <h1 className="font-body text-5xl">{children}</h1>,
        }}
        field={slice.primary.header}
      />
    </div>
  );
};

export default PorfolioHeader;
