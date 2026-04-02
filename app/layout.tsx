import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'NoRobot — Tools that make life better',
  description: 'NoRobot maakt tools die je dagelijkse leven een stukje makkelijker maken. Niet voor developers. Voor iedereen die al weet dat AI kan helpen.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className={`${playfair.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  )
}
