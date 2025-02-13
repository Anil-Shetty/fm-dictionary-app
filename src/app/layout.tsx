import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { FontProvider } from "@/components/font-provider"
import { Header } from "@/components/header"
import { Geist, Geist_Mono, Noto_Serif } from "next/font/google"

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
})

const notoSerif = Noto_Serif({
  variable: "--font-serif",
  subsets: ["latin"]
})

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Dictionary",
  description: "Find the meaning of words",
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${notoSerif.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          enableColorScheme
        >
          <FontProvider className="max-w-3xl min-h-screen mx-auto px-6 md:px-8 lg:px-0 pt-8 pb-28">
            <Header />
            <main>
              {children}
            </main>
          </FontProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
