import { Cinzel_Decorative, Montserrat, Spectral_SC} from 'next/font/google'
import type { AppProps } from 'next/app'

import '@/styles/globals.css'
import BottomTab from '@/components/bottomTab';
import { SessionProvider } from 'next-auth/react';

export const cinzelDecorative = Cinzel_Decorative({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
  style: ['normal'],
});

export const montserrat = Montserrat({
  weight: ['100', '400', '700'],
  subsets: ['latin'],
  style: ['normal'],
});

export const spectralSC = Spectral_SC({
  weight: ['200', '300', '400', '700'],
  subsets: ['latin'],
  style: ['normal'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <section className="container">
        <style jsx global>
          {`
            * {
              font-family: ${montserrat.style.fontFamily}
            }

            h1, h2, h3, h4, h5{
              font-family: ${cinzelDecorative.style.fontFamily}
            }

            button {
              font-family: ${spectralSC.style.fontFamily}
            }
          `}
        </style>
        <Component {...pageProps} />
        <BottomTab />
      </section>
    </SessionProvider>
  )
}
