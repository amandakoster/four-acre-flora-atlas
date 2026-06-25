import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--flora-border)] bg-[color:var(--flora-glass)] backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
        <div className="flex flex-col gap-2">
          <Link href="/" className="leading-none">
            <h1 className="text-5xl font-semibold tracking-tight">
              <span className="text-[color:var(--flora-text)]">Four-Acre</span>{" "}
              <span className="text-[color:var(--flora-moss)]">Flora</span>
            </h1>
          </Link>

          <Breadcrumbs />
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/species"
            className="rounded-xl border border-[color:var(--flora-border)] bg-[color:var(--flora-glass)] px-5 py-2.5 text-sm font-medium text-[color:var(--flora-text)] backdrop-blur-md transition hover:border-[color:var(--flora-border-hover)] hover:bg-[color:var(--flora-glass-hover)]"
          >
            Species
          </Link>

          <Link
            href="/observations"
            className="rounded-xl bg-[color:var(--flora-forest)] px-5 py-2.5 text-sm font-medium text-[color:var(--flora-text)] transition hover:bg-[color:var(--flora-olive)]"
          >
            + Add Species
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
