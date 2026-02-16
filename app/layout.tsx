import React from "react"
import type { Metadata } from 'next'
import { Carlito, Inter } from 'next/font/google'

import './globals.css'

const _inter = Inter({ subsets: ['latin', 'latin-ext'], variable: '--font-inter' })
const _carlito = Carlito({ weight: ['400', '700'], subsets: ['latin', 'latin-ext'], variable: '--font-carlito' })

export const metadata: Metadata = {
  title: 'PlaySpace | Prostor pro terapii a dramaterapii DvT v Praze',
  description: 'PlaySpace je terapeutický prostor v Praze na Želivského. Nabízíme dramaterapii metodou DvT a pronájem prostor pro terapeuty a lektory.',
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
