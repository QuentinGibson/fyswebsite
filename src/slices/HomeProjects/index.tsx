import { createClient } from "@/prismicio";
import { asText, Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `HomeProjects`.
 */
export type HomeProjectsProps = SliceComponentProps<Content.HomeProjectsSlice>;

/**
 * Component for "HomeProjects" Slices.
 */
const HomeProjects = async ({ slice }: HomeProjectsProps): Promise<JSX.Element> => {
  const client = createClient();
  const projects = await client.getAllByType("project");
  return (
    <section className="py-24 font-body dark">
      <div className="flex flex-col items-center">
        <h1 className="text-md uppercase font-display tracking-[1.8px]">
          {asText(slice.primary.header)}
        </h1>
      </div>
      <ul className="flex flex-col items-center gap-6 my-24">
        {projects.map((project) => (
          <li key={project.id}>
            <div className="text-center">
              <PrismicNextLink
                className="opacity-75 hover:opacity-100 transition duration-500 text-4xl md:text-6xl"
                document={project}
              >
                {asText(project.data.name)}
              </PrismicNextLink>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HomeProjects;
