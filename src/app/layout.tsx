'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import { Provider } from 'react-redux'
import { store } from '../store/index'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + " h-screen bg-wam"}>
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  )
}
