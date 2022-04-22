import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'

import {
  Web3Provider,
  NativeBaseProvider,
  TermsAndAgreementProvider,
  BreakpointProvider
} from '../providers'

import EnvTag from '../components/atoms/EnvTag'

const styleObject = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  width: '100vw',
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <Web3Provider>
      <NativeBaseProvider>
        <TermsAndAgreementProvider>
          {loaded ? (
            <>
              <BreakpointProvider>
                <Component {...pageProps} />
              </BreakpointProvider>
              <EnvTag env="alpha" />
            </>
          ) : (
            <div style={styleObject}>
              <p>Loading</p>
            </div>
          )}
        </TermsAndAgreementProvider>
      </NativeBaseProvider>
    </Web3Provider>
  )
}

export default MyApp
