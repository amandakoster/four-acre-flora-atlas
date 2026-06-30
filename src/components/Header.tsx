import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import AuthStatus from "@/components/auth/AuthStatus";
import MobileMenu from "@/components/MobileMenu";

type HeaderProps = {
  initialEmail: string | null;
};

function Header({ initialEmail }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-(--flora-border) bg-(--flora-glass) backdrop-blur-md">
      <div className="layout-page py-5">
        <div className="flex items-start justify-between gap-6">
          <div className="min-w-0 flex-1">
            <Link href="/" className="leading-none">
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl min-[1200px]:text-5xl">
                <span className="text-(--flora-text)">Four-Acre</span>{" "}
                <span className="text-(--flora-moss)">Flora</span>
              </h1>
            </Link>

            <p className="mt-1 text-xs font-medium uppercase tracking-[0.28em] text-(--flora-text-muted) sm:text-sm">
              Explore • Document • Preserve
            </p>

            <div className="mt-3">
              <Breadcrumbs />
            </div>
          </div>

          <div className="min-[1200px]:hidden">
            <MobileMenu initialEmail={initialEmail} />
          </div>

          <nav className="hidden items-center gap-3 min-[1200px]:flex">
            <Link
              href="/species"
              className="rounded-xl border border-(--flora-border) bg-(--flora-glass) px-5 py-2.5 text-sm font-medium text-(--flora-text) backdrop-blur-md transition hover:border-(--flora-border-hover) hover:bg-(--flora-glass-hover)"
            >
              Species
            </Link>

            <Link
              href="/mission"
              className="rounded-xl border border-(--flora-border) bg-(--flora-glass) px-5 py-2.5 text-sm font-medium text-(--flora-text) backdrop-blur-md transition hover:border-(--flora-border-hover) hover:bg-(--flora-glass-hover)"
            >
              Mission
            </Link>

            <AuthStatus initialEmail={initialEmail} />
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
