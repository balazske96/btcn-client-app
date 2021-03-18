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
        <meta name="description" content="Find the best and most trusted bitcoin casinos, and the best bitcoin casino bonus offers, reviewed and listed." />
        <meta charSet="UTF-8" />
        <meta name="keywords" content="casino, bitcoin, play, bitcoincasino, bitcoin caisno, play bitcoin, list, list of casinos, crypto, crypto casino" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </SnackbarProvider>
  )
}

export default MyApp
