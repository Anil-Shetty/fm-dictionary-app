import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { FontProvider } from "@/components/font-provider"
import { Header } from "@/components/header"
import { Geist, Geist_Mono, Noto_Serif } from "next/font/google"
import { SearchForm } from "@/components/search-form"

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
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
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
          <FontProvider className="max-w-3xl min-h-screen mx-auto px-4 md:px-6 lg:px-0 py-8">
            <Header />
            <SearchForm />
            <main>
              {children}
            </main>
          </FontProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
