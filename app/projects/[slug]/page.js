import { notFound } from 'next/navigation';
import { projectsData } from '@/data/projects';
import ProjectCaseStudy from '@/components/ProjectCaseStudy';

export async function generateStaticParams() {
  return projectsData.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: `${project.title} — Al Rubayet Turjo`,
    description: project.description,
  };
}

export default function ProjectPage({ params }) {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) notFound();
  return <ProjectCaseStudy project={project} />;
}
