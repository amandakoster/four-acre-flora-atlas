import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function Header() {
  return (
    <header className="border-b border-zinc-800 px-10 py-5">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex flex-col gap-3">
          <Link href="/" className="text-xl font-bold">
            Four-Acre Flora Atlas
          </Link>

          <Breadcrumbs />
        </div>

        <Link
          href="/observations"
          className="rounded border border-zinc-700 px-4 py-2 text-sm hover:bg-zinc-900"
        >
          + Add Observation
        </Link>
      </div>
    </header>
  );
}
