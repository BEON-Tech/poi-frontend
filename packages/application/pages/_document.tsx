import { Html, Head, Main, NextScript } from 'next/document'

const fontNames = [
  'Bold',
  'ExtraBold',
  'ExtraLight',
  'Light',
  'Medium',
  'Regular',
  'SemiBold',
]

const MyDocument = () => (
  <Html>
    <Head>
      {fontNames.map((name) => (
        <>
          <link
            key={`${name}-woff2`}
            rel="preload"
            href={`/fonts/Hauora/Hauora-${name}.woff2`}
            as="font"
            crossOrigin=""
          />
          <link
            key={`${name}-woff`}
            rel="preload"
            href={`/fonts/Hauora/Hauora-${name}.woff`}
            as="font"
            crossOrigin=""
          />
        </>
      ))}
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
)

export default MyDocument
