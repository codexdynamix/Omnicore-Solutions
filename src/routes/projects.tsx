import { createFileRoute } from "@tanstack/react-router";
import { MediaImage } from "@/components/media-image";
import { projects, whatsappUrl } from "@/data/site";
import { WhatsAppBadge } from "@/components/ui/official-badges";
import { MapPin, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Site Deployments & Case Studies | Omnicore Solutions Zimbabwe" },
      {
        name: "description",
        content:
          "Gold circuits, concrete pours, on-farm feed lines and fence manufacturing — Omnicore machinery operational across Zimbabwe.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">
            Site Deployments
          </span>
          <span className="text-slate-300">·</span>
          <span className="text-xs text-amber-600 font-semibold">Zimbabwe Field Records</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          Machinery on the job.
        </h1>
        <p className="mt-1 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
          Heavy equipment buyers want to verify plant performance on real ground. Here are active sites, mining claims, and commercial yards equipped and supported by Omnicore Solutions.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.id}
            className="group flex flex-col overflow-hidden rounded-xl border border-slate-200/90 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md"
          >
            <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
              <MediaImage
                src={project.image}
                alt={project.imageAlt}
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute top-3 left-3">
                <span className="inline-flex items-center gap-1 rounded-md bg-slate-900/90 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-xs shadow-2xs">
                  <MapPin className="size-3 text-amber-400" />
                  {project.location}
                </span>
              </div>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                {project.sector}
              </span>
              <h2 className="mt-1 text-xl font-bold tracking-tight text-slate-900 group-hover:text-sky-600 transition-colors">
                {project.title}
              </h2>
              <p className="mt-2.5 flex-1 text-xs leading-relaxed text-slate-600">
                {project.body}
              </p>

              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">Zimbabwe Commissioned</span>
                <a
                  href={whatsappUrl(`Hello Omnicore, I saw the project "${project.title}" and would like a similar machinery setup.`)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#25D366] hover:underline"
                >
                  <WhatsAppBadge compact label="Inquire Similar Plant" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
