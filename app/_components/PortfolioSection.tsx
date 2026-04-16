"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects, categoryLabels, type ProjectCategory } from "../_data/projects";

type Filter = ProjectCategory | "all";
const filters: Filter[] = ["all", "sites", "site-bot", "bots"];

function getCount(f: Filter) {
  if (f === "all") return projects.length;
  return projects.filter((p) => p.category === f).length;
}

const featuredCases = projects.slice(0, 6);

export default function PortfolioSection() {
  const [filter, setFilter] = useState<Filter>("all");
  const filtered =
    filter === "all" ? featuredCases : featuredCases.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-black text-white sm:text-4xl">Портфолио кейсов</h2>
          <p className="mt-3 text-zinc-400">Реальные результаты для реальных клиентов</p>
        </div>

        {/* Filters */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                filter === f
                  ? "bg-yellow-400 text-black"
                  : "border border-white/15 text-zinc-400 hover:border-white/30 hover:text-white"
              }`}
            >
              {categoryLabels[f]}
              <span
                className={`rounded-full px-1.5 py-0.5 text-xs font-semibold leading-none ${
                  filter === f ? "bg-black/15 text-black" : "bg-white/10 text-zinc-500"
                }`}
              >
                {getCount(f)}
              </span>
            </button>
          ))}
        </div>

        {/* Case grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="case-card-accent group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              style={
                {
                  "--cc-color": project.color,
                  "--tw-shadow-color": project.color + "25",
                } as React.CSSProperties
              }
            >
              {/* Top row */}
              <div className="flex items-center justify-between gap-3">
                <span className="text-3xl leading-none">{project.emoji}</span>
                <span
                  className="rounded-full px-3 py-1 text-xs font-semibold"
                  style={{
                    color: project.color,
                    background: project.color + "18",
                    border: `1px solid ${project.color}30`,
                  }}
                >
                  {categoryLabels[project.category]}
                </span>
              </div>

              {/* Title + desc */}
              <div>
                {project.link && project.link !== "#" ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-white transition-colors hover:text-yellow-400"
                  >
                    {project.title}
                  </a>
                ) : (
                  <h3 className="text-base font-bold text-white">{project.title}</h3>
                )}
                <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">
                  {project.description}
                </p>
              </div>

              {/* Results */}
              {project.results && (
                <div className="flex flex-col gap-1.5">
                  {project.results.map((r) => (
                    <span
                      key={r}
                      className="flex items-center gap-1.5 text-sm font-semibold"
                      style={{ color: project.color }}
                    >
                      <span className="text-xs">▸</span>
                      {r}
                    </span>
                  ))}
                </div>
              )}

              {/* Tech + link */}
              <div className="mt-auto flex items-center gap-3 border-t border-white/8 pt-4">
                <div className="flex min-w-0 flex-1 flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-zinc-500"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {project.link && project.link !== "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center gap-1 rounded-full px-3 py-1.5 text-xs font-bold transition-all duration-200 hover:brightness-110 active:scale-95"
                    style={{ color: "#000", background: project.color }}
                  >
                    Открыть
                    <svg width="11" height="11" fill="none" viewBox="0 0 24 24">
                      <path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
