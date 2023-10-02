import styles from './page.module.css';
import Link from 'next/link';
import { BsTerminal, BsLinkedin, BsGithub} from 'react-icons/bs';

export default function Navbar() {
  return (
    <div className={styles.nav_container}>
      <div className={styles.nav}> 
        <ul>
          <li>
            <h1>
              <a> 
                <span> <BsTerminal/> </span>Alexandre Poirier Portfolio
                <div className={styles.aurora}>
                  <div className={styles.aurora__item}></div>
                  <div className={styles.aurora__item}></div>
                  <div className={styles.aurora__item}></div>
                  <div className={styles.aurora__item}></div>
                </div>    
              </a>
            </h1>
          </li>
          <li>
            <Link href="/">Resume</Link>  
          </li>
          <li>
            <Link href="/projects">Projects</Link>  
          </li>
          <li>
            <a href="https://www.linkedin.com/in/-alexandre-poirier-/">
              <span className={styles.nav_icons}><BsLinkedin/></span>
            </a>
          </li>
          <li>
            <a href="https://github.com/Demerak">
              <span className={styles.nav_icons}><BsGithub/></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
