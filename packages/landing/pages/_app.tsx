import { NativeBaseProvider } from 'native-base'
import type { AppProps } from 'next/app'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <NativeBaseProvider>
    <Component {...pageProps} />
  </NativeBaseProvider>
)

export default MyApp
