import "./global.css";
import { Navbar } from "@/components/Navbar/Navbar"
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Tuan Le\'s Portfolio',
  description: 'Game | Graphics Programmer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Navbar />
        <main className="container">
          {children}
          <SpeedInsights />
          <Analytics />
        </main>
      </body>
    </html>
  )
}
