import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout/Layout'
import { StoreProvider } from '../store/StoreProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <Layout>
      <StoreProvider>
        <Component {...pageProps} />
      </StoreProvider>
    </Layout>
  ) 
}

export default MyApp
