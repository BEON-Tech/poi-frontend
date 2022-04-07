import Document, { Html, Head, Main, NextScript } from 'next/document'
// import document from '@native-base/next-adapter/document';

const fontNames = [
  'Bold',
  'ExtraBold',
  'ExtraLight',
  'Light',
  'Medium',
  'Regular',
  'SemiBold',
]

class MyDocument extends Document {
  render() {
    return (
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
  }
}

export default MyDocument
