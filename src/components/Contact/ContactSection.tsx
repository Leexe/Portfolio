import Link from "next/link"

export const ContactSection = () => {
  return (
    <section className="py-12">
      <div className="flex items-center justify-between mb-16 px-6 py-4 shadow-clay-out rounded-3xl bg-clay-base">
        <h2 className="text-3xl font-black text-clay-accent">Contact</h2>
      </div>
      
      <div className="shadow-clay-out p-10 rounded-[3rem] bg-clay-base text-center md:text-left flex flex-col md:flex-row gap-12 items-center">
        <div className="md:w-1/2">
          <p className="leading-relaxed text-clay-text-main text-lg font-medium">
            Whether you have a question about my Unity frameworks, want to collaborate on a game jam, or just want to say hi, feel free to drop a message.
          </p>
          <div className="mt-8 shadow-clay-in px-6 py-4 rounded-2xl inline-block">
            <p className="text-sm text-clay-text-muted font-bold uppercase tracking-wider">
              Open for opportunities
            </p>
          </div>
        </div>

        <div className="md:w-1/2 w-full">
          <div className="shadow-clay-in p-8 rounded-[2rem] bg-clay-base">
            <h3 className="text-sm font-black text-clay-accent uppercase tracking-widest mb-8 text-center md:text-left">Connect</h3>
            <ul className="space-y-6">
              <li className="flex flex-col items-center md:items-start">
                <span className="text-clay-text-muted text-xs font-bold uppercase tracking-widest mb-2">Email</span>
                <Link href="mailto:tuanle9333@gmail.com" className="shadow-clay-out hover:shadow-clay-in px-6 py-3 rounded-2xl text-clay-text-main hover:text-clay-accent transition-all text-base font-bold w-full text-center md:text-left">
                  tuanle9333@gmail.com
                </Link>
              </li>
              <li className="flex flex-col items-center md:items-start pt-2">
                <span className="text-clay-text-muted text-xs font-bold uppercase tracking-widest mb-2">GitHub</span>
                <Link href="https://github.com/Leexe" target="_blank" className="shadow-clay-out hover:shadow-clay-in px-6 py-3 rounded-2xl text-clay-text-main hover:text-clay-accent transition-all text-base font-bold w-full text-center md:text-left">
                  github.com/Leexe
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
