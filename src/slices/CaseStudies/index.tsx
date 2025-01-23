import { createClient } from "@/prismicio";
import { asText, Content } from "@prismicio/client";
import { PrismicImage, PrismicLink, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `CaseStudies`.
 */
export type CaseStudiesProps = SliceComponentProps<Content.CaseStudiesSlice>;

/**
 * Component for "CaseStudies" Slices.
 */
const CaseStudies = async ({ slice }: CaseStudiesProps): Promise<JSX.Element> => {
  const client = createClient();
  const cases = await client.getAllByType("casestudy");
  return (
    <section className="mx-auto max-w-[976px] grid gap-y-36 gap-x-4">
      {cases.map((caseData, index) => {
        return (
          <div key={index} className="grid md:grid-cols-[1fr_1.5fr] box-border gap-y-9">
            <div className="inline-block overflow-hidden">
              <PrismicLink className="overflow-hidden max-w-[400px] w-full" document={caseData}>
                <PrismicImage
                  width={10000}
                  className="hover:scale-110 hover:opacity-75 duration-1000 h-full"
                  field={caseData.data.image}
                />
              </PrismicLink>
            </div>

            <div className="flex justify-between p-12 flex-col items-stretch gap-y-9">
              <PrismicImage className="inline-block" field={caseData.data.logo} />
              <p className="font-body text-5xl ">{asText(caseData.data.name)}</p>
              <PrismicLink document={caseData} className="font-sauce text-lg">
                View Case Study
              </PrismicLink>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default CaseStudies;
