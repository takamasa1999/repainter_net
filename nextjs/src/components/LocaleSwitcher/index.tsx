'use client';

import { useLocale, useTranslations } from 'next-intl';
import LocaleSwitcherSelect from './LocaleSwitcherSelect';
import { locales } from '@/i18n';
import { MenuItem } from '@mui/material';

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect defaultValue={locale} label={t('label')}>
      {locales.map((cur) => (
        <MenuItem key={cur} value={cur}>
          {t('locale', { locale: cur })}
        </MenuItem>
      ))}
    </LocaleSwitcherSelect>
  );
}
