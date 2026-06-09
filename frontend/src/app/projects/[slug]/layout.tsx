import { Header } from "@/app/header/Header";
import { Footer } from "@/app/footer/Footer";
import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/app/projects/data";

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
};

const ProjectLayout = async ({ children, params }: LayoutProps) => {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Header />
      <main
        role="main"
        aria-label={`Содержимое проекта ${project.title}`}
        tabIndex={0}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};

export default ProjectLayout;
