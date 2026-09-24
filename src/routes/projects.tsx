import { createFileRoute } from "@tanstack/react-router";
import { MediaImage } from "@/components/media-image";
import { projects } from "@/data/site";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects | Machines on Zimbabwe sites | Omnicore Solutions" },
      {
        name: "description",
        content:
          "Gold circuits, Harare pours, on-farm feed lines and fence yards — Omnicore plant working in Zimbabwe.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
        Projects
      </p>
      <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
        The machine, on the job.
      </h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Buyers want to see plant working — not a stock render. A few of the sites and yards we spec
        for.
      </p>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.id}
            className="overflow-hidden rounded-3xl bg-card shadow-[0_0_0_1px_rgba(0,0,0,0.06)]"
          >
            <MediaImage src={project.image} alt={project.imageAlt} className="aspect-4/3" />
            <div className="p-6">
              <p className="text-xs tracking-wider text-muted-foreground uppercase">
                {project.sector} · {project.location}
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight">{project.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.body}</p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
