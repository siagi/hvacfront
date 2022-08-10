import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout/Layout'
import { StoreProvider } from '../store/StoreProvider'

function MyApp({ Component, pageProps, ...appProps }: AppProps) {
  if([`/form-details`].includes(appProps.router.pathname)){
    return(
      <StoreProvider>
        <Component {...pageProps} />
      </StoreProvider>
    )
  }
  return(
    <Layout>
      <StoreProvider>
        <Component {...pageProps} />
      </StoreProvider>
    </Layout>
  ) 
}

export default MyApp
