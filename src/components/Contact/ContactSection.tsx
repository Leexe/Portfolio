import Link from "next/link"

export const ContactSection = () => {
  return (
    <section className="py-12">
      <div className="flex items-end justify-between mb-12 border-b border-line-clr pb-4">
        <h2 className="text-4xl font-black tracking-tighter text-text-main">CONTACT<span className="text-accent-mint">.</span></h2>
      </div>
      
      <p className="mb-12 leading-relaxed text-text-muted text-lg max-w-2xl">
        Whether you have a question about my Unity frameworks, want to collaborate on a game jam, or just want to say hi, feel free to drop a message.
      </p>

      <div className="bg-obsidian-card border border-line-clr p-8 inline-block min-w-[300px]">
        <h3 className="text-xs font-mono font-bold text-accent-mint uppercase tracking-widest mb-6">Direct Channels</h3>
        <ul className="space-y-4">
          <li className="flex flex-col">
            <span className="text-text-muted text-xs uppercase tracking-widest mb-1">Email</span>
            <Link href="mailto:tuanle9333@gmail.com" className="text-text-main hover:text-accent-mint transition-colors text-lg font-bold">tuanle9333@gmail.com</Link>
          </li>
          <li className="flex flex-col pt-4 border-t border-line-clr">
            <span className="text-text-muted text-xs uppercase tracking-widest mb-1">GitHub</span>
            <Link href="https://github.com/Leexe" target="_blank" className="text-text-main hover:text-accent-mint transition-colors text-lg font-bold">github.com/Leexe</Link>
          </li>
        </ul>
      </div>
      
      <p className="text-sm text-text-muted font-mono tracking-widest uppercase mt-16">
        Open for opportunities.
      </p>
    </section>
  )
}
