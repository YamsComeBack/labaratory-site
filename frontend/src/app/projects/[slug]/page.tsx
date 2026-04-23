import { notFound } from "next/navigation";
import { projectsData } from "@/app/projects/data";
import { getProjectBySlug } from "@/app/projects/data";

type PageProps = {
  params: { slug: string };
};

export const generateStaticParams = () =>
  projectsData.map((project) => ({ slug: project.slug }));

export const dynamicParams = false;

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <div>{project.title}</div>;
}
