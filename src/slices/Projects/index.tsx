import { createClient } from "@/prismicio";
import { asText, Content } from "@prismicio/client";
import { PrismicImage, PrismicLink, PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Projects`.
 */
export type ProjectsProps = SliceComponentProps<Content.ProjectsSlice>;

/**
 * Component for "Projects" Slices.
 */
const Projects = async ({ slice }: ProjectsProps): Promise<JSX.Element> => {
  const client = createClient();
  const projects = await client.getAllByType("project");
  return (
    <div className="grid md:grid-cols-2 md:gap-x-6 gap-y-24 mx-4 items-center justify-items-center">
      {projects.map((project, index) => {
        return (
          <div className="max-w-[400px]" key={index}>
            <PrismicLink document={project}>
              <div>
                <div className="overflow-hidden">
                  <PrismicImage
                    className="hover:scale-110 duration-1000"
                    field={project.data.image}
                  />
                </div>
              </div>
              <p className="font-body text-3xl mt-9">{asText(project.data.name)}</p>
            </PrismicLink>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
