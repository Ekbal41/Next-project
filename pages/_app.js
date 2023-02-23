import '@/styles/globals.css'
import LayoutOne from '@/layouts/LayoutOne'

export default function App({ Component, pageProps }) {
  return (
    <LayoutOne>
      <Component {...pageProps} />
    </LayoutOne>
  )
}
