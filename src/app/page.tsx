const navItems = ["Map", "Zones", "Species", "Observations", "Dashboard"];

const stats = [
  { label: "Zones", value: 6 },
  { label: "Species", value: 0 },
  { label: "Observations", value: 0 },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-100 text-stone-950">
      <header className="border-b border-stone-300 bg-white px-8 py-5">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <h1 className="text-2xl font-bold">Four-Acre Flora Atlas</h1>

          <nav className="flex gap-4 text-sm font-medium text-stone-600">
            {navItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </nav>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl grid-cols-[260px_1fr] gap-6 p-8">
        <aside className="rounded-2xl bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold">Property Zones</h2>

          <div className="mt-4 space-y-2">
            {["Forest", "Pollinator Meadow", "Pollinator Garden", "Vegetable Garden", "Fruit Trees", "General Property"].map(
              (zone) => (
                <button
                  key={zone}
                  className="w-full rounded-xl border border-stone-200 px-3 py-2 text-left hover:bg-stone-100"
                >
                  {zone}
                </button>
              ),
            )}
          </div>
        </aside>

        <div className="space-y-6">
          <section className="rounded-2xl bg-green-950 p-8 text-white shadow-sm">
            <p className="text-sm uppercase tracking-[0.35em] text-green-300">
              Botanical Field Journal
            </p>

            <h2 className="mt-4 text-5xl font-bold">My Property Atlas</h2>

            <p className="mt-4 max-w-2xl text-green-100">
              Map plants, habitats, species, observations, photos, and ecological notes over time.
            </p>
          </section>

          <section className="grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl bg-white p-6 shadow-sm">
                <p className="text-sm text-stone-500">{stat.label}</p>
                <p className="mt-2 text-4xl font-bold">{stat.value}</p>
              </div>
            ))}
          </section>

          <section className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold">Map Placeholder</h3>
              <div className="mt-4 flex h-72 items-center justify-center rounded-xl border border-dashed border-stone-300 bg-stone-50 text-stone-500">
                Mapbox goes here
              </div>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold">Recent Observations</h3>
              <div className="mt-4 rounded-xl border border-stone-200 p-4 text-stone-500">
                No observations yet.
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
