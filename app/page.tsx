import Image from 'next/image'
import styles from './page.module.css'
import resumeData from '../public/data/resumeData.json'

export default function Home() {
  return (
    <div> 
      <div className={styles.main}>
        <div className={styles.title}> 
          <h1>
            Hello, I&rsquo;m <span>Alex</span> 👋
          </h1>
        </div>
        <div className={styles.description}>
          <p>
            Welcome to my online portfolio! I&rsquo;m an engineer with a passion for turning ideas into reality. 
            While I hold a BASc in Mechanical Engineering and a BSc in Computing Technology, my heart lies in 
            the realm of <span>Software Engineering</span>. 
          </p>
        </div>
        <div className={styles.gradient_div}> 
          <div className={styles.gradient_line}></div>
        </div>
        <div className={styles.gradient_div_2}> 
          <div className={styles.gradient_line_2}></div>
        </div>

        {/* Resume Section */}

        <div className={styles.resume_section}>
          <div className={styles.resume_title}>
            <h2>Resume</h2>
          </div>
          <div className={styles.resume_section_centered}> 
            <ul className={styles.timeline}>
              {resumeData.map((item, index) => (
                <li key={index} className={styles.timeline_item}>
                  <div className={styles.timeline_info}>
                          <span>{item.year}</span>
                      </div>
                      <div className={styles.timeline_marker}></div>
                      <div className={styles.timeline_content}>
                        <h3 className={styles.timeline_title}>{item.title}</h3>
                        <ul>
                          {item.description.map((desc: string, i: number) => (
                            <li key={i}>
                              {desc}
                            </li>
                          ))}
                        </ul>
                      </div>
                </li>
              ))} 
            </ul>
         </div>
        </div>
      </div>
      
      {/* <div className={styles.gradient_line}></div> */}

    </div>
    

  )
}
