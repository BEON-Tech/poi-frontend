import { NativeBaseProvider, extendTheme } from 'native-base'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import './global.css'
import {
  ThemeContext,
  ThemeProvider,
  BreakpointProvider,
} from '@components/context'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <ThemeProvider>
      <ThemeContext.Consumer>
        {({ theme }) => (
          <NativeBaseProvider
            theme={extendTheme(theme)}
            config={{ suppressColorAccessibilityWarning: true }}
          >
            <BreakpointProvider>
              <Component {...pageProps} />
            </BreakpointProvider>
          </NativeBaseProvider>
        )}
      </ThemeContext.Consumer>
    </ThemeProvider>
  </>
)

export default MyApp
