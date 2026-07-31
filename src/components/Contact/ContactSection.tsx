"use client"
import Link from "next/link"
import { useForm, ValidationError } from '@formspree/react'

export const ContactSection = () => {
  const [state, handleSubmit] = useForm('xnjeykro')

  return (
    <section className="py-12">
      <div className="flex items-end justify-between mb-12 border-b border-line-clr pb-4">
        <h2 className="text-4xl font-black tracking-tighter text-text-main">CONTACT<span className="text-accent-mint">.</span></h2>
      </div>
      
      <p className="mb-12 leading-relaxed text-text-muted text-lg max-w-2xl">
        Whether you have a question about my Unity frameworks, want to collaborate on a game jam, or just want to say hi, feel free to drop a message.
      </p>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Contact Form */}
        <div className="w-full md:w-2/3">
          {state.succeeded ? (
            <div className="bg-obsidian-card border border-accent-mint p-8 h-full flex flex-col items-center justify-center text-center">
              <h3 className="text-2xl font-bold text-text-main mb-2">Message Sent</h3>
              <p className="text-text-muted">Thanks for reaching out! I&apos;ll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex flex-col flex-grow">
                  <label htmlFor="name" className="text-xs font-mono font-bold text-text-muted uppercase tracking-widest mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    required
                    className="bg-obsidian-card border border-line-clr text-text-main px-4 py-3 focus:outline-none focus:border-accent-mint transition-colors"
                    placeholder="John Doe"
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-xs mt-1" />
                </div>
                <div className="flex flex-col flex-grow">
                  <label htmlFor="email" className="text-xs font-mono font-bold text-text-muted uppercase tracking-widest mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    required
                    className="bg-obsidian-card border border-line-clr text-text-main px-4 py-3 focus:outline-none focus:border-accent-mint transition-colors"
                    placeholder="john@example.com"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
                </div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="message" className="text-xs font-mono font-bold text-text-muted uppercase tracking-widest mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows={5}
                  required
                  className="bg-obsidian-card border border-line-clr text-text-main px-4 py-3 focus:outline-none focus:border-accent-mint transition-colors resize-none"
                  placeholder="Hey Tuan, let's build something awesome..."
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs mt-1" />
              </div>
              <button 
                type="submit"
                disabled={state.submitting}
                className="bg-text-main text-obsidian font-bold uppercase tracking-widest py-4 hover:bg-accent-mint transition-colors disabled:opacity-50"
              >
                {state.submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>

        {/* Direct Channels */}
        <div className="w-full md:w-1/3">
          <div className="bg-obsidian-card border border-line-clr p-8 h-full">
            <h3 className="text-xs font-mono font-bold text-accent-mint uppercase tracking-widest mb-6">Direct Channels</h3>
            <ul className="space-y-6">
              <li className="flex flex-col">
                <span className="text-text-muted text-xs uppercase tracking-widest mb-1">Email</span>
                <Link href="mailto:tuanle9333@gmail.com" className="text-text-main hover:text-accent-mint transition-colors text-base font-bold break-words">
                  tuanle9333@gmail.com
                </Link>
              </li>
              <li className="flex flex-col pt-6 border-t border-line-clr">
                <span className="text-text-muted text-xs uppercase tracking-widest mb-1">GitHub</span>
                <Link href="https://github.com/Leexe" target="_blank" className="text-text-main hover:text-accent-mint transition-colors text-base font-bold break-words">
                  github.com/Leexe
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <p className="text-sm text-text-muted font-mono tracking-widest uppercase mt-16">
        Open for opportunities.
      </p>
    </section>
  )
}
