import "./global.css";
import { Sidebar } from "@/components/Sidebar/sidebar"
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react"
import { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-sans" 
});
const calistoga = Calistoga({ 
  subsets: ["latin"], 
  variable: "--font-serif", 
  weight: ["400"] 
});

export const metadata: Metadata = {
  title: 'Tuan Le\'s Portfolio',
  description: 'Home Page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`
        ${inter.variable}
        ${calistoga.variable}
        "min-h-screen text-text-clr bg-base-clr grid grid-cols-[auto_1fr] font-sans antialiased"
      `}>
        <Sidebar />
        <main>
          {children}
          <SpeedInsights />
          <Analytics />
        </main>
      </body>
    </html>
  )
}
