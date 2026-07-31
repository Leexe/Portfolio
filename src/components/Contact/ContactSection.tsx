import Link from "next/link"

export const ContactSection = () => {
  return (
    <section className="py-12 font-mono">
      <div className="flex items-end justify-between mb-12 border-b-2 border-dashed border-text-main pb-4">
        <h2 className="text-3xl font-bold tracking-widest text-text-main uppercase">COMM.LINK: CONTACT</h2>
      </div>
      
      <p className="mb-12 leading-relaxed text-text-muted text-sm max-w-2xl bg-obsidian-card border border-line-clr p-4">
        &gt; Whether you have a question about my Unity frameworks, want to collaborate on a game jam, or just want to say hi, feel free to drop a message.
      </p>

      <div className="border border-text-main p-8 inline-block min-w-[300px] relative">
        <div className="absolute -top-3 left-4 bg-obsidian px-2 text-text-main text-xs font-bold tracking-widest uppercase">
          CHANNELS
        </div>
        <ul className="space-y-6">
          <li className="flex flex-col">
            <span className="text-text-muted text-xs uppercase tracking-widest mb-2">&gt; PING: EMAIL</span>
            <Link href="mailto:tuanle9333@gmail.com" className="text-text-main hover:bg-text-main hover:text-obsidian transition-colors text-base font-bold inline-block w-fit px-2 py-1">
              tuanle9333@gmail.com
            </Link>
          </li>
          <li className="flex flex-col">
            <span className="text-text-muted text-xs uppercase tracking-widest mb-2">&gt; PING: GITHUB</span>
            <Link href="https://github.com/Leexe" target="_blank" className="text-text-main hover:bg-text-main hover:text-obsidian transition-colors text-base font-bold inline-block w-fit px-2 py-1">
              github.com/Leexe
            </Link>
          </li>
        </ul>
      </div>
      
      <div className="mt-16 border-t border-line-clr pt-4">
        <p className="text-xs text-text-main font-bold tracking-widest uppercase animate-pulse">
          STATUS: OPEN_FOR_OPPORTUNITIES_
        </p>
      </div>
    </section>
  )
}
