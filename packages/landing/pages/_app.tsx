import { NativeBaseProvider, extendTheme } from 'native-base'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import './global.css'
import {
  ThemeContext,
  ThemeProvider,
  BreakpointProvider,
} from '@components/context'
import { SSRDisabler } from '@components/atoms'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Proof of Integrity</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <ThemeProvider>
      <ThemeContext.Consumer>
        {({ theme }) => (
          <SSRDisabler>
            <NativeBaseProvider
              theme={extendTheme(theme)}
              config={{ suppressColorAccessibilityWarning: true }}
            >
              <BreakpointProvider>
                <Component {...pageProps} />
              </BreakpointProvider>
            </NativeBaseProvider>
          </SSRDisabler>
        )}
      </ThemeContext.Consumer>
    </ThemeProvider>
  </>
)

export default MyApp
