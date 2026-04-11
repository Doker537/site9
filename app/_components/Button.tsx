import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  external?: boolean;
  className?: string;
  arrow?: boolean;
  onClick?: () => void;
}

export default function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
  arrow = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold whitespace-nowrap transition-all duration-200";
  const variants = {
    primary:
      "bg-yellow-400 text-black hover:bg-yellow-300 hover:shadow-lg hover:shadow-yellow-400/25 active:scale-95",
    outline:
      "border border-white/20 text-zinc-300 hover:border-yellow-400/60 hover:text-yellow-400 active:scale-95",
  };

  const arrowSvg = arrow ? (
    <svg
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 24 24"
      className="transition-transform duration-200 group-hover:translate-x-1"
    >
      <path
        d="M5 12h14M12 5l7 7-7 7"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ) : null;

  const cls = `group ${base} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
        {arrowSvg}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {children}
      {arrowSvg}
    </Link>
  );
}
