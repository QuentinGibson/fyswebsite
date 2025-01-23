import ServiceCard from "@/app/components/ServiceCard";
import { createClient } from "@/prismicio";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Services`.
 */
export type ServicesProps = SliceComponentProps<Content.ServicesSlice>;

/**
 * Component for "Services" Slices.
 */
const Services = async ({ slice }: ServicesProps): Promise<JSX.Element> => {
  const client = createClient();
  const services = await client.getAllByType("service");
  return (
    <section>
      {services.map((service, index) => {
        const flipped = index % 2 === 1;
        return <ServiceCard key={index} service={service} flipped={flipped}></ServiceCard>;
      })}
    </section>
  );
};

export default Services;
