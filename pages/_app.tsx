import '../styles/globals.css'
import type { AppProps } from 'next/app'

// Automatically called by Next.js where <Component> renders out the pageprop
// without it nothing would render/be visible
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
