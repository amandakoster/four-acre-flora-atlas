"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

type MobileMenuProps = {
  initialEmail: string | null;
};

function MobileMenu({ initialEmail }: MobileMenuProps) {
  const supabase = useMemo(() => createSupabaseBrowserClient(), []);

  const [open, setOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeMenu = () => {
    setOpen(false);
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    window.location.href = "/";
  };

  return (
    <div ref={menuRef} className="relative min-[1200px]:hidden">
      <button
        type="button"
        aria-label="Open navigation"
        onClick={() => setOpen((current) => !current)}
        className="rounded-xl border border-(--flora-border) bg-(--flora-glass) p-2 text-(--flora-text) transition hover:border-(--flora-border-hover) hover:bg-(--flora-glass-hover)"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M4 7h16" />
          <path d="M4 12h16" />
          <path d="M4 17h16" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full z-50 mt-1 overflow-hidden rounded-xl border border-(--flora-border) bg-[#0b0f0d] shadow-2xl">
          <nav className="py-1">
            <Link
              href="/species"
              onClick={closeMenu}
              className="block whitespace-nowrap px-3 py-2 text-left text-sm transition hover:bg-white/5"
            >
              Species
            </Link>

            <Link
              href="/mission"
              onClick={closeMenu}
              className="block whitespace-nowrap px-3 py-2 text-left text-sm transition hover:bg-white/5"
            >
              Mission
            </Link>

            <div className="my-1 border-t border-(--flora-border)" />

            {initialEmail ? (
              <>
                <Link
                  href="/dashboard"
                  onClick={closeMenu}
                  className="block whitespace-nowrap px-3 py-2 text-left text-sm transition hover:bg-white/5"
                >
                  Dashboard
                </Link>

                <Link
                  href="/observations"
                  onClick={closeMenu}
                  className="block whitespace-nowrap px-3 py-2 text-left text-sm transition hover:bg-white/5"
                >
                  My Observations
                </Link>

                <Link
                  href="/species"
                  onClick={closeMenu}
                  className="block whitespace-nowrap px-3 py-2 text-left text-sm transition hover:bg-white/5"
                >
                  My Species
                </Link>

                <Link
                  href="/settings"
                  onClick={closeMenu}
                  className="block whitespace-nowrap px-3 py-2 text-left text-sm transition hover:bg-white/5"
                >
                  Settings
                </Link>

                <div className="my-1 border-t border-(--flora-border)" />

                <button
                  type="button"
                  onClick={handleSignOut}
                  className="block w-full whitespace-nowrap px-3 py-2 text-left text-sm text-(--flora-accent) transition hover:bg-white/5"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <Link
                href="/login"
                onClick={closeMenu}
                className="block whitespace-nowrap px-3 py-2 text-left text-sm transition hover:bg-white/5"
              >
                Sign In
              </Link>
            )}
          </nav>
        </div>
      )}
    </div>
  );
}

export default MobileMenu;
