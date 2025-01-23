import { asText, Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ServicesHeader`.
 */
export type ServicesHeaderProps = SliceComponentProps<Content.ServicesHeaderSlice>;

/**
 * Component for "ServicesHeader" Slices.
 */
const ServicesHeader = ({ slice }: ServicesHeaderProps): JSX.Element => {
  return (
    <section className="mb-16 mt-20 lg:mb-36">
      <div className="mx-auto flex max-w-lg flex-col justify-center">
        <PrismicRichText
          field={slice.primary.header}
          components={{
            heading1: ({ children }) => (
              <h1 className="text-center font-display text-lg">{children}</h1>
            ),
          }}
        />
        <PrismicRichText
          field={slice.primary.pitch}
          components={{
            heading2: ({ children }) => (
              <h2 className="text-center font-body text-4xl">{children}</h2>
            ),
          }}
        />
      </div>
    </section>
  );
};

export default ServicesHeader;
