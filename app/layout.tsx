import React from "react"
import type { Metadata } from 'next'
import { Carlito, Inter } from 'next/font/google'

import './globals.css'

const _inter = Inter({ subsets: ['latin', 'latin-ext'], variable: '--font-inter' })
const _carlito = Carlito({ weight: ['400', '700'], subsets: ['latin', 'latin-ext'], variable: '--font-carlito' })

export const metadata: Metadata = {
  title: 'PlaySpace5 | Pronájem terapeutického prostoru v Praze 3',
  description: 'PlaySpace5 je sdílený terapeutický prostor pro dramaterapii, pohyb a setkávání u metra Želivského v Praze 3. Nabízíme pronájem prostoru po hodinách, na celý den i pravidelně.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="cs">
      <body className={`${_inter.variable} ${_carlito.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
