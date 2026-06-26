import LoginForm from "@/components/auth/LoginForm";

function LoginPage() {
  return (
    <main className="mx-auto flex w-full max-w-lg flex-1 items-center px-8 py-14">
      <section className="w-full rounded-3xl border border-(--flora-border) bg-(--flora-glass) p-8 backdrop-blur-md">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-semibold tracking-tight">
            <span className="text-(--flora-text)">Four-Acre</span>{" "}
            <span className="text-(--flora-moss)">Flora</span>
          </h1>

          <p className="mt-3 text-sm text-(--flora-text-muted)">
            Sign in to manage your property.
          </p>
        </div>

        <LoginForm />
      </section>
    </main>
  );
}

export default LoginPage;
