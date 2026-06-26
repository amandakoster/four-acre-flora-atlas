"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

function AuthStatus() {
  const supabase = createSupabaseBrowserClient();

  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    const loadUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setEmail(user?.email ?? null);
    };

    loadUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setEmail(session?.user.email ?? null);
    });

    return () => subscription.unsubscribe();
  }, [supabase]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    window.location.href = "/";
  };

  if (!email) {
    return (
      <Link
        href="/login"
        className="rounded-xl bg-(--flora-accent) px-5 py-2.5 text-sm font-medium text-(--flora-text) transition hover:bg-(--flora-accent-hover)"
      >
        Sign In
      </Link>
    );
  }

  return (
    <div className="flex items-center gap-4">
      <span className="text-sm text-(--flora-text-muted)">
        Welcome, {email.split("@")[0]}
      </span>

      <button
        onClick={handleSignOut}
        className="rounded-xl border border-(--flora-border) bg-(--flora-glass) px-5 py-2.5 text-sm font-medium text-(--flora-text) transition hover:border-(--flora-border-hover) hover:bg-(--flora-glass-hover)"
      >
        Sign Out
      </button>
    </div>
  );
}

export default AuthStatus;
