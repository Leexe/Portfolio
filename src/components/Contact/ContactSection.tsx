"use client"
import { useState } from "react"
import { Github, Mail, Send, Check } from "lucide-react"
import Link from "next/link"

export const ContactSection = () => {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("contact@example.com") // Replace with real email if available
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="py-20 relative min-h-screen flex items-center">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-clr/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container max-w-2xl mx-auto relative z-10">
        <div className="glass-card p-10 md:p-14 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-accent-clr to-cyan-glow rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(6,182,212,0.4)]">
            <Send className="text-white" size={32} />
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl mb-6">Let&apos;s Connect</h2>
          <p className="text-secondary-text-clr text-lg mb-10">
            Whether you have a question about my Unity frameworks, want to collaborate on a game jam, or just want to say hi, feel free to drop a message!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
            <button 
              onClick={handleCopyEmail}
              className="glass-button w-full sm:w-auto relative group"
            >
              {copied ? <Check size={20} className="text-emerald-glow" /> : <Mail size={20} className="text-white" />}
              <span className={copied ? "text-emerald-glow" : "text-white"}>
                {copied ? "Email Copied!" : "Copy Email"}
              </span>
            </button>
            
            <Link 
              href="https://github.com/Leexe" 
              target="_blank"
              className="primary-button w-full sm:w-auto"
            >
              <Github size={20} />
              <span>Visit GitHub</span>
            </Link>
          </div>

          <div className="pt-8 border-t border-white/10">
            <p className="text-sm text-secondary-text-clr">
              Currently open for exciting software engineering and game development opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
