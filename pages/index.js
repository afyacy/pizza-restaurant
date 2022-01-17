import Head from 'next/head'
import Featured from '../components/Featured'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant in Kumasi</title>
        <meta name="description" content="Best Pizza shop in Kumasi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
    </div>
  )
}
