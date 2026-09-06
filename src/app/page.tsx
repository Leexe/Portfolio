import { Button } from "@/components/Button";

export default function Home() {
  return (
    <main className="flex flex-col bg-neutral-950 p-4">
      <div className="mx-auto w-full max-w-4xl rounded-3xl border border-neutral-800 bg-neutral-900/40 p-6 sm:p-8">
        <header className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <div className="space-y-2 text-center sm:text-left">
            <h1 className="inline-block text-5xl font-bold">Tuan Le</h1>
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-400 sm:text-3xl">
              Computer Scientist / Game Developer
            </h2>
          </div>
          <div className="flex items-start gap-4">
            <Button href="https://github.com/Leexe">Github</Button>
            <Button href="https://doger1225.itch.io/">Itch.io</Button>
            <Button href="mailto:tuanle9333@gmail.com">Email</Button>
          </div>
        </header>
        <div className="grid grid-cols-1 gap-8 pt-4 md:grid-cols-2">
          <div className="space-y-3">
            <div>
              <h3 className="text-2xl font-bold">Contract: Deathloop</h3>
              <h2 className="font-semibold text-neutral-400">
                Game Designer & Programmer
              </h2>
              <h2 className="font-semibold text-neutral-400">
                June 16, 2026 - June 26, 2026
              </h2>
            </div>
            <div className="space-y-2 text-sm">
              <p>
                Contract: Deathloop is a first-person shooter where you are an
                assassin that has to eliminate your targets by doing trickshots.
              </p>
              <div>
                <p className="font-semibold">Contributions:</p>
                <ul className="list-disc">
                  <li>
                    Designed 360 Trickshot mechanic w/ visual effects, slow
                    down, etc.
                  </li>
                  <li>
                    Designed game progression and narrative with a focus on
                    scaling difficulty and exploring the trickshotting theme
                  </li>
                  <li>Designed UI for the letter</li>
                </ul>
              </div>
              <p>Engine & Tools: Unity and FMOD</p>
              <div className="space-x-2">
                <Button>Play Game</Button>
                <Button>Source Code</Button>
              </div>
            </div>
          </div>
          <div className="space-y-4"></div>
        </div>
      </div>
    </main>
  );
}
