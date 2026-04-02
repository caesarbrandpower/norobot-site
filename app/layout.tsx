import type { Metadata } from 'next'
import { Playfair_Display, Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { Navbar } from './components/Navbar'
import { ScrollReveal } from './components/ScrollReveal'

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

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'NoRobot - AI built for real people',
  description:
    'NoRobot maakt tools die je dagelijkse leven een stukje makkelijker maken. Niet voor developers. Voor iedereen die al weet dat AI kan helpen.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className={`${playfair.variable} ${inter.variable} ${spaceGrotesk.variable}`}>
        <Navbar />
        <ScrollReveal />
        {children}
      </body>
    </html>
  )
}
