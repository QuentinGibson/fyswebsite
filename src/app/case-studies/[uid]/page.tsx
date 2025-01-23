import { createClient } from "@/prismicio";
import { asText } from "@prismicio/client";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import * as prismic from "@prismicio/client";

type Params = { uid: string };

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { uid } = await params;
  const client = createClient();
  const caseStudy = await client.getByUID("casestudy", uid).catch(() => notFound());

  return {
    title: prismic.asText(caseStudy.data.name),
    description: prismic.asText(caseStudy.data.content),
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
  const caseStudy = await client.getByUID("project", uid).catch(() => notFound());
  return (
    <div className="grid md:grid-cols-2 px-4 pt-10 md:px-0">
      <div className="flex flex-col max-w-lg mx-auto justify-center gap-9">
        {/* <img src={caseStudy.data.logo} alt="" width={300} /> */}
        <p className="font-body text-4xl">{asText(caseStudy.data.name)}</p>
        <div className="flex">
          {/* <p>{caseStudy.tags.map((currentTag, index) => {
              return (
                <div key={index} className="bg-gray-600 text-white px-6 py-3 rounded-full">
                  {currentTag.data.name}
                </div>
              )
            })}</p> */}
        </div>
      </div>
      <div className="mx-auto w-full max-w-lg">
        <div className="relative">
          {/* <img src={study.image} width={400} alt="" className="mx-auto" /> */}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
