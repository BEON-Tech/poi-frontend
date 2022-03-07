import { NativeBaseProvider, extendTheme } from 'native-base'
import type { AppProps } from 'next/app'

import './global.css'
import theme from '@theme'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <NativeBaseProvider
    theme={extendTheme(theme)}
    config={{ suppressColorAccessibilityWarning: true }}
  >
    <Component {...pageProps} />
  </NativeBaseProvider>
)

export default MyApp
