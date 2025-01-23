import { createClient } from "@/prismicio";
import { asText } from "@prismicio/client";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import * as prismic from "@prismicio/client";
import { PrismicLink, PrismicRichText } from "@prismicio/react";

type Params = { uid: string };

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { uid } = await params;
  const client = createClient();
  const project = await client.getByUID("project", uid).catch(() => notFound());

  return {
    title: prismic.asText(project.data.name),
    description: prismic.asText(project.data.summary),
    // openGraph: {
    //   title: project.data.meta_title || undefined,
    //   images: [
    //     {
    //       url: page.data.meta_image.url || "",
    //     },
    //   ],
    // },
  };
}

const ProjectPage = async ({ params }: { params: Promise<Params> }): Promise<JSX.Element> => {
  const { uid } = await params;
  const client = createClient();
  const project = await client.getByUID("project", uid).catch(() => notFound());
  return (
    <div className="grid md:grid-cols-[1fr_1.5fr] border-y min-h-[552px]">
      <div className="md:border-r border-b md:border-b-0 flex justify-center items-center p-9">
        <h1 className="text-5xl font-body">{asText(project.data.name)}</h1>
      </div>
      <div className="w-full max-w-[544px] gap-y-20 px-6 my-6 mx-auto justify-center content-center grid gap-x-4 grid-cols-[1fr_1fr]">
        <div>
          {/* <p className="font-display font-bold">{project.industries.length === 1 ? "Industry" : "Industries"}</p> */}
          {/* <p>
              {project.industries.map((industry, index, arr) => {
                return (
                  <span className="font-sauce text-base" key={index}>{industry.name}{index !== arr.length - 1 ? ", " : ""}</span>
                )
              })}
            </p> */}
        </div>
        <div>
          {/* <p className="font-display font-bold">{project.industries.length === 1 ? "Service" : "Services"}</p> */}
          {/* <p>
            {project.services.map((service, index, arr) => {
              return (
                <span className="font-sauce text-base" key={index}>
                  {service.name}
                  {index !== arr.length - 1 ? ", " : ""}
                </span>
              );
            })}
          </p> */}
        </div>
        <div>
          <p className="font-display font-bold">Link</p>
          <PrismicLink field={project.data.link} />
        </div>
        <div>
          <p className="font-display font-bold">Summary</p>
          <PrismicRichText field={project.data.summary} />
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
