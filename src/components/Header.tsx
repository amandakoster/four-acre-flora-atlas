import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import AuthStatus from "@/components/auth/AuthStatus";

type HeaderProps = {
  initialEmail: string | null;
};

function Header({ initialEmail }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-(--flora-border) bg-(--flora-glass) backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
        <div className="flex flex-col gap-2">
          <Link href="/" className="leading-none">
            <h1 className="text-5xl font-semibold tracking-tight">
              <span className="text-(--flora-text)">Four-Acre</span>{" "}
              <span className="text-(--flora-moss)">Flora</span>
            </h1>
          </Link>

          <Breadcrumbs />
        </div>

        <nav className="flex items-center gap-3">
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
    </header>
  );
}

export default Header;
