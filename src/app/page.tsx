export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl text-center space-y-6">
        <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 rounded-full">
          Game Developer Portfolio
        </span>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight bg-gradient-to-r from-neutral-100 via-neutral-300 to-neutral-400 bg-clip-text text-transparent">
          Crafting Interactive Worlds & Gameplay
        </h1>
        <p className="text-neutral-400 text-lg sm:text-xl">
          Showcasing games, mechanics, and technical projects. Ready to build something extraordinary.
        </p>
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl bg-neutral-100 text-neutral-950 font-semibold hover:bg-neutral-200 transition-colors shadow-sm"
          >
            Explore Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl border border-neutral-800 bg-neutral-900/60 font-medium text-neutral-300 hover:bg-neutral-800 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </main>
  );
}
