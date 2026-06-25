import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-emerald-950/10 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
        <div className="flex flex-col gap-2">
          <Link href="/" className="leading-none">
            <h1 className="text-5xl font-semibold tracking-tight">
              <span className="text-stone-100">Four-Acre</span>{" "}
              <span className="text-emerald-400">Flora</span>
            </h1>
          </Link>

          <Breadcrumbs />
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/species"
            className="rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-stone-200 backdrop-blur-md transition hover:bg-white/10"
          >
            Species
          </Link>

          <Link
            href="/observations"
            className="rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-500"
          >
            + Add Species
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
