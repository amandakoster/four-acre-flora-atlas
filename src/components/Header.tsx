import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function Header() {
  return (
    <header className="border-b border-zinc-800 px-10 py-5">
      <div className="mx-auto flex max-w-7xl flex-col gap-3">
        <Link href="/" className="text-xl font-bold">
          Four-Acre Flora Atlas
        </Link>

        <Breadcrumbs />
      </div>
    </header>
  );
}
