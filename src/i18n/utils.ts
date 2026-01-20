import { en } from './en';
import { it } from './it';

export const languages = {
  en: 'English',
  it: 'Italiano'
};

export const defaultLang = 'en';

export const ui = {
  en,
  it
} as const;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return ui[lang];
}
