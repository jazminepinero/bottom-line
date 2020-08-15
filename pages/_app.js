import '../styles/globals.css'
import App from 'next/app'
import { PageTransition } from 'next-page-transitions'
import Header from '../components/Header'
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Loader from '../components/Loader'






function MyApp({ Component, pageProps, router }) {
  return (
   <>
  <Header />
  
  <PageTransition timeout={300} 
  classNames="page-transition"
  loadingComponent={<Loader />}
  loadingDelay={500}
  loadingTimeout={{
    enter: 400,
    exit: 0,
  }}
  loadingClassNames="loading-indicator"
>
  <Component {...pageProps} key={router.route} />
   </PageTransition>
        <style jsx global>{`
          .page-transition-enter {
            opacity: 0;
          }
          .page-transition-enter-active {
            opacity: 1;
            transition: opacity 300ms;
          }
          .page-transition-exit {
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity 300ms;
          }
        `}</style>
     
</>

  )
}

export default MyApp
