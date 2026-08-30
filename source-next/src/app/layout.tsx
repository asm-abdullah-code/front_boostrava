import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = { metadataBase: new URL('https://www.boostrava.com') };
export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="en"><head>
    <link rel="stylesheet" href="/legacy-assets/_next/static/chunks/146aa84c98e7dacd.css" />
    <link rel="stylesheet" href="/legacy-assets/_next/static/chunks/8115744b071055ee.css" />
    <link rel="stylesheet" href="/legacy-assets/_next/static/chunks/e1c551ca151c626b.css" />
    <link rel="stylesheet" href="/legacy-assets/_next/static/chunks/19cdf6876c2cbba5.css" />
  </head><body>{children}</body></html>;
}
