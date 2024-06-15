import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
import { defaultTranslationValues } from './components/defaultTranslationValues';
 
// Can be imported from a shared config
export const locales = ['en', 'jp'];


export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();
 
  return {
    messages: (await import(`../messages/${locale}.json`)).default,
    defaultTranslationValues: defaultTranslationValues,
  };
});