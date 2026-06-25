import type { ReactNode } from "react";
import Link from "next/link";

type CardProps = {
  name: string;
  description?: string;
  href?: string;
  children?: ReactNode;
};

function Card({ name, description, href, children }: CardProps) {
  const content = (
    <section className="group rounded-2xl border border-[color:var(--flora-border)] bg-[color:var(--flora-glass)] px-6 py-5 backdrop-blur-md transition duration-300 hover:border-[color:var(--flora-border-hover)] hover:bg-[color:var(--flora-glass-hover)]">
      <div className="flex items-center justify-between gap-6">
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-[color:var(--flora-text)] transition group-hover:text-[color:var(--flora-sage)]">
            {name}
          </h2>

          {description && (
            <p className="mt-2 text-sm leading-6 text-[color:var(--flora-text-muted)]">
              {description}
            </p>
          )}

          {children}
        </div>

        {href && (
          <span className="shrink-0 text-2xl text-[color:var(--flora-text-muted)] transition group-hover:translate-x-1 group-hover:text-[color:var(--flora-sage)]">
            →
          </span>
        )}
      </div>
    </section>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {content}
      </Link>
    );
  }

  return content;
}

export default Card;
