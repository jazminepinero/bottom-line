import '../styles/globals.css'
import { theme, ThemeProvider, CSSReset } from "@chakra-ui/core";
import Header from '../components/Header'
import 'bootstrap/dist/css/bootstrap.min.css'







function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <CSSReset />
      <Header />
  <Component {...pageProps} />
  </ThemeProvider>

  )
}

export default MyApp
