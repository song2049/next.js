import '@/app/ui/global.css'

import { yuji, inter } from '@/app/ui/fonts'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className={yuji.className}>{children}</body>
    </html>
  );
}
