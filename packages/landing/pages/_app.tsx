import { NativeBaseProvider, extendTheme } from 'native-base'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import './global.css'
import theme from '@theme'
import { BreakpointProvider } from '@components/providers'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <NativeBaseProvider
      theme={extendTheme(theme)}
      config={{ suppressColorAccessibilityWarning: true }}
    >
      <BreakpointProvider>
        <Component {...pageProps} />
      </BreakpointProvider>
    </NativeBaseProvider>
  </>
)

export default MyApp
