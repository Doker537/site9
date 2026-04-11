interface SectionTitleProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
}

export default function SectionTitle({ title, subtitle, eyebrow }: SectionTitleProps) {
  return (
    <div className="mb-12 text-center">
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[3px] text-yellow-400">
          {eyebrow}
        </p>
      )}
      <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-xl leading-relaxed text-zinc-300">
          {subtitle}
        </p>
      )}
    </div>
  );
}
