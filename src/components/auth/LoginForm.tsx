"use client";

import { useMemo, useState } from "react";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

function LoginForm() {
  const supabase = useMemo(() => createSupabaseBrowserClient(), []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoading(true);
    setMessage(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setMessage(error.message);
      return;
    }

    window.location.href = "/";
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    setMessage(null);

    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      setLoading(false);
      setMessage(error.message);
    }
  };

  const handlePasswordReset = async () => {
    if (!email) {
      setMessage("Enter your email first.");
      return;
    }

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/login`,
    });

    setMessage(error ? error.message : "Password reset email sent.");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {message && (
        <p className="rounded-xl border border-(--flora-border) bg-black/20 px-4 py-3 text-sm text-(--flora-text-muted)">
          {message}
        </p>
      )}

      <div>
        <label className="mb-2 block text-sm font-medium text-(--flora-text)">
          Email
        </label>

        <input
          type="email"
          required
          value={email}
          placeholder="you@example.com"
          onChange={(event) => setEmail(event.target.value)}
          className="w-full rounded-xl border border-(--flora-border) bg-black/20 px-4 py-3 text-(--flora-text) outline-none transition placeholder:text-(--flora-text-muted) focus:border-(--flora-border-hover)"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-(--flora-text)">
          Password
        </label>

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            required
            value={password}
            placeholder="Enter your password"
            onChange={(event) => setPassword(event.target.value)}
            className="w-full rounded-xl border border-(--flora-border) bg-black/20 px-4 py-3 pr-12 text-(--flora-text) outline-none transition placeholder:text-(--flora-text-muted) focus:border-(--flora-border-hover)"
          />

          <button
            type="button"
            onClick={() => setShowPassword((current) => !current)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-(--flora-text-muted) transition hover:text-(--flora-moss)"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M2.25 12s3.5-6.75 9.75-6.75S21.75 12 21.75 12s-3.5 6.75-9.75 6.75S2.25 12 2.25 12Z" />
              <circle cx="12" cy="12" r="2.75" />
            </svg>
          </button>
        </div>

        <div className="mt-3 flex justify-end">
          <button
            type="button"
            onClick={handlePasswordReset}
            className="text-sm text-(--flora-moss) underline-offset-4 transition hover:underline"
          >
            Forgot password?
          </button>
        </div>
      </div>

      <button
        disabled={loading}
        className="w-full rounded-xl bg-(--flora-accent) px-4 py-3 font-semibold text-(--flora-accent-text) transition hover:bg-(--flora-accent-hover) disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? "Signing In..." : "Sign In"}
      </button>

      <div className="flex items-center gap-4 text-sm uppercase tracking-widest text-(--flora-text-muted)">
        <div className="h-px flex-1 bg-(--flora-border)" />
        or
        <div className="h-px flex-1 bg-(--flora-border)" />
      </div>

      <button
        type="button"
        onClick={handleGoogleSignIn}
        disabled={loading}
        className="w-full rounded-xl border border-(--flora-border) bg-(--flora-glass) px-4 py-3 font-medium text-(--flora-text) transition hover:border-(--flora-border-hover) hover:bg-(--flora-glass-hover)"
      >
        Continue with Google
      </button>
    </form>
  );
}

export default LoginForm;
