import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import Footer from "./Footer/page";
import Header from "./Header/page";
import "./globals.css";
import { ProjectContextProvider } from './Context/ProjectContext';


export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'az'}, {locale: 'ru'}];
}

export default async function RootLayout({ children,  params: {locale} }) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <ProjectContextProvider>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
        </ProjectContextProvider>
      </body>
    </html>
  );
}
