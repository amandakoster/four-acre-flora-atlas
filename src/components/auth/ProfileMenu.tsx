"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import {
  authMenu,
  type AuthMenuItem,
  type AuthMenuSection,
} from "@/data/authMenu";

type ProfileMenuProps = {
  email: string;
};

function ProfileMenu({ email }: ProfileMenuProps) {
  const supabase = useMemo(() => createSupabaseBrowserClient(), []);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const username = email.split("@")[0];

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

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    window.location.href = "/";
  };

  const renderMenuItem = (item: AuthMenuItem) => {
    if ("href" in item) {
      return (
        <Link
          key={item.label}
          href={item.href}
          onClick={() => setOpen(false)}
          className="block whitespace-nowrap px-3 py-2 text-left text-sm text-(--flora-text) transition hover:bg-white/5"
        >
          {item.label}
        </Link>
      );
    }

    return (
      <button
        key={item.label}
        type="button"
        onClick={handleSignOut}
        className="block w-full whitespace-nowrap px-3 py-2 text-left text-sm font-medium text-(--flora-accent) transition hover:bg-white/5"
      >
        {item.label}
      </button>
    );
  };

  return (
    <div ref={menuRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="flex items-center gap-2 rounded-xl border border-(--flora-border) bg-(--flora-glass) px-3.5 py-2 text-sm font-medium text-(--flora-text) transition hover:border-(--flora-border-hover) hover:bg-(--flora-glass-hover)"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <circle cx="12" cy="8" r="3.5" />
          <path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6" />
        </svg>

        <span>{username}</span>

        <svg
          viewBox="0 0 24 24"
          className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full z-50 mt-1 overflow-hidden rounded-xl border border-(--flora-border) bg-[#0b0f0d] shadow-2xl">
          {authMenu.map((section: AuthMenuSection, sectionIndex: number) => (
            <div key={sectionIndex}>
              <nav className="py-1">
                {section.items.map((item: AuthMenuItem) =>
                  renderMenuItem(item),
                )}
              </nav>

              {sectionIndex < authMenu.length - 1 && (
                <div className="border-t border-(--flora-border)" />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProfileMenu;
