import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/navbar/index';
import Footer from './components/footer/index';
const inter = Inter({ subsets: ['latin'] })

import { dir } from 'i18next'
import { languages } from '../i18n/settings';

export const metadata = {
  title: 'Flavour Frame',
  description: 'Crafting Flavorful Frames',
}

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export default function RootLayout({ 
  children,
  params: {
    lng
  },
 }) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
