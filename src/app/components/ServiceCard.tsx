import { BsCheckLg, BsChevronRight } from "react-icons/bs";
import Link from "next/link";
import { asText, Content } from "@prismicio/client";
import { PrismicImage } from "@prismicio/react";

export default function ServiceCard({
  service,
  flipped = true,
}: {
  service: Content.ServiceDocument;
  flipped: Boolean;
}) {
  return (
    <article className="mb-20 lg:mx-auto lg:w-3/4 lg:max-w-screen-xl">
      <div className="mx-auto grid max-w-lg gap-x-4 gap-y-20 lg:m-0 lg:max-w-none xl:grid-cols-2">
        <div className="col-span-1">
          <div className="h-full border-[0.8px] border-white/25">
            <div className="border-b-[0.8px] border-white/25 p-7">
              <p className="font-body text-3xl">{asText(service.data.name)}</p>
            </div>
            <div className="p-7">
              <p>{asText(service.data.description)}</p>
              <div className="py-7">
                <ul className="">
                  {service.tags.map((service: any, index: number) => {
                    return (
                      <li key={index} className="inline-block">
                        <div className="mb-3 mr-1 flex items-center gap-4 rounded-full bg-white px-4 py-3 text-primary">
                          <BsCheckLg className="text-lg" />
                          <p className="font-semibold">{service.name}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
                <div className="mt-6 flex items-baseline font-bold">
                  <Link href={"/contact"} className="text-xl">
                    Enquire Now{" "}
                  </Link>
                  <BsChevronRight className="text-sm font-bold" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`col-span-1 mx-auto flex max-w-md ${flipped ? "-order-1" : ""}`}>
          <PrismicImage className="max-w-full rounded-t-full" field={service.data.image} />
        </div>
      </div>
    </article>
  );
}
