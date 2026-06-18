"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const formatSegment = (segment: string) => {
  return segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export default function Breadcrumbs() {
  const pathname = usePathname();

  const segments = pathname.split("/").filter(Boolean);

  const visibleSegments =
    segments[0] === "zones" ? segments.slice(1) : segments;

  return (
    <nav aria-label="Breadcrumb" className="text-sm text-gray-400">
      <ol className="flex items-center gap-2">
        <li>
          <Link href="/" className="hover:text-white">
            Home
          </Link>
        </li>

        {visibleSegments.map((segment, index) => {
          const href =
            segments[0] === "zones"
              ? `/zones/${visibleSegments.slice(0, index + 1).join("/")}`
              : `/${visibleSegments.slice(0, index + 1).join("/")}`;

          const isLast = index === visibleSegments.length - 1;

          return (
            <li key={href} className="flex items-center gap-2">
              <span>{">"}</span>

              {isLast ? (
                <span className="text-white">{formatSegment(segment)}</span>
              ) : (
                <Link href={href} className="hover:text-white">
                  {formatSegment(segment)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
