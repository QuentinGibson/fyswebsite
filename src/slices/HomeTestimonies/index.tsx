import { createClient } from "@/prismicio";
import { asText, Content } from "@prismicio/client";
import { PrismicLink, SliceComponentProps } from "@prismicio/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

/**
 * Props for `HomeTestimonies`.
 */
export type HomeTestimoniesProps = SliceComponentProps<Content.HomeTestimoniesSlice>;

/**
 * Component for "HomeTestimonies" Slices.
 */
const HomeTestimonies = async ({ slice }: HomeTestimoniesProps): Promise<JSX.Element> => {
  const client = createClient();
  const testimonials = await client.getAllByType("testimonial");
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="dark mb-16">
      <div className="flex flex-col gap-16">
        <div className="flex flex-col justify-center w-full text-center">
          <h1 className="text-5xl font-body text-[45px]">{asText(slice.primary.header)}</h1>
          <p className="py-6">{asText(slice.primary.content)}</p>
          <PrismicLink field={slice.primary.button_link} />
        </div>
        <div className="hidden lg:inline-block">
          <Carousel>
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem
                  className="bg-slate-900 max-w-prose mx-1 px-8 py-16"
                  key={testimonial.uid}>
                  <div className="flex flex-col max-w-prose gap-4">
                    <p className="text-xl font-bold">{asText(testimonial.data.name)}</p>
                    <p className="font-thin">{asText(testimonial.data.content)}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonies;
