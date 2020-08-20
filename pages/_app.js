import '../styles/globals.css'
import App from 'next/app'
import { PageTransition } from 'next-page-transitions'
import Header from '../components/Header'
import 'bootstrap-css-only/css/bootstrap.min.css';
import Head from 'next/head';




function MyApp({ Component, pageProps, router }) {

  return (

   <>
  <Head>
  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAKr02xZJaZ75_QIuOrocucOvIKret3Ais&libraries=places"></script> 
  </Head>
   
  <Header />
  
  <PageTransition timeout={300} 
  classNames="page-transition"
>
  <Component {...pageProps} key={router.route} />
   </PageTransition>
        <style jsx global>{`
          .page-transition-enter {
            opacity: 0;
          }
          .page-transition-enter-active {
            opacity: 1;
            transition: opacity 500ms;
          }
          .page-transition-exit {
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity 500ms;
          }
        `}</style>
     
</>

  )
}

export default MyApp
