import Head from 'next/head'
import styles from '../styles/Home.module.css'
import FirstSection from '../sections/FirstSection'
import QuizSection from '../sections/QuizSection'


export default function Home() {

 

  return (
    <div>
      <Head>
        <title>Bottom Line Bookkeeper</title>
      
        </Head>
          <FirstSection />
          <QuizSection />
      </div>
  )
}
