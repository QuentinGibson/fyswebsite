import { createClient } from "@/prismicio";
import { asText, Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Link from "next/link";

/**
 * Props for `Testimonies`.
 */
export type TestimoniesProps = SliceComponentProps<Content.TestimoniesSlice>;

/**
 * Component for "Testimonies" Slices.
 */
const Testimonies = async ({ slice }: TestimoniesProps): Promise<JSX.Element> => {
  const client = createClient();
  const testimonials = await client.getAllByType("testimonial");
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <div className="flex">
        <div className="flex flex-col justify-center w-full text-center">
          <h1 className="text-5xl font-body text-[45px]">{asText(slice.primary.header)}</h1>
          <p className="py-6">Kind words from some of our favorite clients.</p>
        </div>
      </div>
      {testimonials.map((testimony, index) => {
        return (
          <div key={index} className="p-20 border-b">
            <div className="grid md:grid-cols-[1fr_1.5fr_1.5fr] gap-x-9 gap-y-20">
              <div className="flex justify-center items-center">
                <p className="font-bold text-5xl font-body">{asText(testimony.data.name)}</p>
              </div>
              <div>
                <p className="font-sauce">
                  {asText(testimony.data.content).split(" ").slice(0, 100).join(" ")}
                </p>
              </div>
              <div>
                <p className="font-sauce">
                  {asText(testimony.data.content).split(" ").slice(-100).join(" ")}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Testimonies;
