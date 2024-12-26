import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hunardeep Singh | Software Developer',
  description: 'Portfolio of Hunardeep, a passionate software developer',
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-100 text-gray-900`}>{children}</body>
    </html>
  )
}

