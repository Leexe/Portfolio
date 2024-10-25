import "./global.css";
import Sidebar from "@/components/sidebar"
import { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const calistoga = Calistoga({ subsets: ["latin"], variable: "--font-calistoga", weight: ["400"] });

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
        ${inter.className}
        ${calistoga.className}
        "min-h-screen min-h-[100dvh] bg-[color:var(--base-clr)] grid grid-cols-[auto_1fr]"
      `}>
        <Sidebar />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
