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
  // Remove base path if present (e.g., /website/)
  const base = import.meta.env.BASE_URL || '/';
  let pathname = url.pathname;
  if (base !== '/' && pathname.startsWith(base)) {
    pathname = pathname.slice(base.length - 1); // Keep leading slash
  }

  const [, lang] = pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return ui[lang];
}
