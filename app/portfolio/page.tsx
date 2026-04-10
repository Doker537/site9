"use client";

import { useState } from "react";
import SectionTitle from "../_components/SectionTitle";
import ProjectCard from "../_components/ProjectCard";
import {
  projects,
  categoryLabels,
  type ProjectCategory,
} from "../_data/projects";

type Filter = ProjectCategory | "all";

const filters: Filter[] = ["all", "sites", "site-bot", "bots"];

function getCount(f: Filter) {
  if (f === "all") return projects.length;
  return projects.filter((p) => p.category === f).length;
}

export default function PortfolioPage() {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section className="py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionTitle title="Портфолио" />

          {/* Filters — example9 style */}
          <div className="mb-12 flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  filter === f
                    ? "bg-white text-black"
                    : "border border-white/15 text-zinc-400 hover:border-white/30 hover:text-white"
                }`}
              >
                {categoryLabels[f]}
                <span
                  className={`rounded-full px-1.5 py-0.5 text-xs font-semibold leading-none ${
                    filter === f ? "bg-black/15 text-black" : "bg-white/10 text-zinc-400"
                  }`}
                >
                  {getCount(f)}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-12 text-center text-zinc-500">
            Проектов в этой категории пока нет.
          </p>
        )}
      </div>
    </section>
  );
}
