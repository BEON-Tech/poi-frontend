import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import '@i18n'

import { EnvTag } from '@components/atoms'
import {
  Web3Provider,
  NativeBaseProvider,
  TermsAndAgreementProvider,
} from '@providers'

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
              <Component {...pageProps} />
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
