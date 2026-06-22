import type { ReactNode } from "react";
import Link from "next/link";

type CardProps = {
  name: string;
  description?: string;
  href?: string;
  children?: ReactNode;
};

export default function Card({ name, description, href, children }: CardProps) {
  const content = (
    <section className="mb-5 rounded-lg border p-5 hover:bg-zinc-900">
      <h2 className="mb-2 break-words text-xl font-bold md:text-3xl">{name}</h2>

      {description && (
        <p className="mb-3 text-sm text-gray-400">{description}</p>
      )}

      {children}
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
