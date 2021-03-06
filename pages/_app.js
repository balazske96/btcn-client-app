import '../styles/globals.scss'
import '../styles/variables.scss'
import 'suneditor/dist/css/suneditor.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from 'next/head';
import { SnackbarProvider } from 'notistack';

function MyApp({ Component, pageProps }) {
  return (
    <SnackbarProvider >
      <Head>
        <title>Bitcoin Casinos</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </SnackbarProvider>
  )
}

export default MyApp
