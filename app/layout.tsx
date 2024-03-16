import "./globals.css"
import { Inter } from "next/font/google"
import Navigation from "@/components/auth/Navigation"
const inter = Inter({ subsets: ["latin"] })

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "クイズアプリ",
  description: "クイズアプリ",
}

// レイアウト
const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Navigation />

          <main className="container mx-auto max-w-screen-md flex-1 px-2">
            {children}
          </main>

          {/* フッター */}
          <footer className="py-5">
            <div className="text-center text-sm">
              Copyright © All rights reserved | FullStackChannel
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}

export default RootLayout
