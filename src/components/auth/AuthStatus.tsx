"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import ProfileMenu from "@/components/auth/ProfileMenu";

type AuthStatusProps = {
  initialEmail: string | null;
};

function AuthStatus({ initialEmail }: AuthStatusProps) {
  const supabase = useMemo(() => createSupabaseBrowserClient(), []);

  const [email, setEmail] = useState<string | null>(initialEmail);

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

  if (!email) {
    return (
      <Link
        href="/login"
        className="rounded-xl bg-(--flora-accent) px-5 py-2.5 text-sm font-medium text-(--flora-accent-text) transition hover:bg-(--flora-accent-hover)"
      >
        Sign In
      </Link>
    );
  }

  return <ProfileMenu email={email} />;
}

export default AuthStatus;
