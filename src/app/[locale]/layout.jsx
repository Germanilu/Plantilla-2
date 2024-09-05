import {NextIntlClientProvider, useMessages} from 'next-intl';
import Navbar                                from './components/navbar/index';
import Footer                                from './components/footer/index';
import ResponsiveLayout                      from './components/responsive/responsiveLayout';
import { Cormorant  }                             from "next/font/google";
import { useLocale }                         from "next-intl";
import { notFound }                          from "next/navigation";
import { Providers }                         from "../Redux/provider";
import favicon                               from '../public/favicon.ico'
import "./globals.css";
const cormorant = Cormorant ({ subsets: ["latin"] });

export const metadata = {
  title: "Savana",
  description: "Il miglior pasto della tua vita",
  icons: {
    icon: favicon.src, 
  }
};

export default function RootLayout({ children, params }) {
  const locale = useLocale();
  const messages = useMessages();
  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={cormorant.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>
            <ResponsiveLayout />
            <Navbar />
            {children}
            <Footer />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}