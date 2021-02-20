import '../styles/globals.scss'
import '../styles/variables.scss'
import 'suneditor/dist/css/suneditor.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SnackbarProvider } from 'notistack';

function MyApp({ Component, pageProps }) {
  return (
    <SnackbarProvider >
      <Component {...pageProps} />
    </SnackbarProvider>
  )
}

export default MyApp
