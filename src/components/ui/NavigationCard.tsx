import Link from "next/link";

type Props = {
  name: string;
  description?: string;
  href: string;
};

function NavigationCard({ name, description, href }: Props) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-(--flora-border) bg-(--flora-glass) px-6 py-4 backdrop-blur-md transition duration-300 hover:border-(--flora-border-hover) hover:bg-(--flora-glass-hover)"
    >
      <div className="flex items-center justify-between gap-6">
        <div>
          <h3 className="text-lg font-semibold text-(--flora-text) transition group-hover:text-(--flora-moss)">
            {name}
          </h3>

          {description && (
            <p className="mt-1 text-sm leading-6 text-(--flora-text-muted)">
              {description}
            </p>
          )}
        </div>

        <span className="shrink-0 text-2xl text-(--flora-text-muted) transition group-hover:translate-x-1 group-hover:text-(--flora-moss)">
          →
        </span>
      </div>
    </Link>
  );
}

export default NavigationCard;
