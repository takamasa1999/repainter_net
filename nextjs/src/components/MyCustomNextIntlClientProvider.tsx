'use client';

import React, { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { defaultTranslationValues } from './defaultTranslationValues';

interface MyCustomNextIntlClientProviderProps {
    locale: string;
    timeZone: string;
    now: Date;
    children?: ReactNode;
    [key: string]: any; // This allows for any additional props to be passed through
}
export function MyCustomNextIntlClientProvider({
    locale,
    timeZone,
    now,
    children,
    ...rest
}: MyCustomNextIntlClientProviderProps) {
    return (
        <NextIntlClientProvider
            defaultTranslationValues={defaultTranslationValues}
            locale={locale}
            timeZone={timeZone}
            now={now}
            {...rest}
        >
            {children}
        </NextIntlClientProvider>
    );
};

export default MyCustomNextIntlClientProvider;
