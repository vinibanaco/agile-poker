import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        {/* <link rel="icon" href="/favicon.ico" /> */}

        <link rel="preload" href="/fonts/roboto-regular.ttf" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/roboto-bold.ttf" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/forced-square.ttf" as="font" crossOrigin="" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
