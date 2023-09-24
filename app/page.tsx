import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <Navbar /> */}

      <div className={styles.container}>
        <div className={styles.title}>
          <h1>
            Alexandre Poirier Portfolio
            <div className={styles.aurora}>
              <div className={styles.aurora__item}></div>
              <div className={styles.aurora__item}></div>
              <div className={styles.aurora__item}></div>
              <div className={styles.aurora__item}></div>
            </div>
          </h1>
        </div>

      </div>
      {/* <div className={styles.description}>
        <h2>Hi, I&rsquo;m Alex 👋🏻 </h2>
      </div> */}

  - for x in (1..4)
    <div className={styles.subcontainer}>
        - for i in (1..20)
            <div className={styles.orb}></div>
    </div>
      
    </main>
  )
}
