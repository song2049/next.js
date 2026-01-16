import { Yuji_Hentaigana_Akebono, Inter, Lusitana } from 'next/font/google';

export const yuji = Yuji_Hentaigana_Akebono({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const inter = Inter({
  subsets: ['latin'],
});

export const lusitana = Lusitana({
  subsets: ['latin'],
  weight: ['400', '700'],
});