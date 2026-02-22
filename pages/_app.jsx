import '../styles/globals.css';
import Head from 'next/head';

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

// Sprite CSS injected via dangerouslySetInnerHTML avoids SSR/client quote mismatch
const spriteCss = `.icons-sprite,.icons-facebook-16,.icons-facebook-24,.icons-twitter-16,.icons-twitter-24{background-image:url('${BASE_PATH}/images/icons-sprite.png')}`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* eslint-disable-next-line react/no-danger */}
      <style dangerouslySetInnerHTML={{ __html: spriteCss }} />
      <Component {...pageProps} />
    </>
  );
}
