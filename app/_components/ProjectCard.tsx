"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Project } from "../_data/projects";
import { categoryLabels } from "../_data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-all hover:border-yellow-400/20"
    >
      {/* Image area */}
      <div className="relative overflow-hidden">
        <div className="relative h-52">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent" />
        </div>

        {/* Tags overlay on image */}
        <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
          <span className="rounded-full border border-white/20 bg-black/60 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
            {categoryLabels[project.category]}
          </span>
          {project.tags.slice(0, 1).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-yellow-400/30 bg-black/60 px-2.5 py-1 text-xs font-medium text-yellow-300 backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-base font-semibold text-white">{project.title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">
          {project.description}
        </p>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-sm font-medium text-yellow-400 transition-colors hover:text-yellow-300"
          >
            Открыть проект &rarr;
          </a>
        )}
      </div>
    </motion.div>
  );
}
