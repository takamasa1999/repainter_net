import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fortawesome/fontawesome-svg-core/styles.css'
import ResponsiveDrawer from "@/components/ResponsiveDrawer/index";
import MyCustomNextIntlClientProvider from "@/components/MyCustomNextIntlClientProvider";
import { getMessages, getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { locales } from "@/i18n";
import { UserProvider } from '@auth0/nextjs-auth0/client';
import AnimatedCursor from "react-animated-cursor"
import { Suspense } from "react";


const inter = Inter({ subsets: ["latin"] });

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale }
}: Omit<Props, 'children'>) {
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('title'),
    description: t("description"),
    author: t("author"),
    keywords: t("keywords")
  };
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);
  const now = new Date()
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className={inter.className}>
        {/* <Suspense fallback={"LoadingView..."}> */}
          <AnimatedCursor innerStyle={{ zIndex: 9999 }} outerStyle={{ zIndex: 9999 }} showSystemCursor={true} />
          <AppRouterCacheProvider>
            <UserProvider>
              <MyCustomNextIntlClientProvider messages={messages} locale={locale} now={now} timeZone={timeZone}>
                <ResponsiveDrawer>{children}</ResponsiveDrawer>
              </MyCustomNextIntlClientProvider>
            </UserProvider>
          </AppRouterCacheProvider>
        {/* </Suspense> */}
      </body>
    </html>
  );
}
