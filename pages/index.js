import Head from 'next/head'
import Image from 'next/image'
import styles from '../pages/index.module.css'
import Link from 'next/link'

//image imports
import checkMark from '../public/homePage/checkMark.svg'

// images imports
import AVIf from '../public/homePage/AVIF_image_format.jpg'

export default function Home() {
  return (
    <div className={styles.homepage__full}>
      <section className={styles.whatsNew_single}>
        <h1 className={styles.displayNone}>AVIF image format</h1>
        <div className={styles.whatsNew__single_image}>
          <Image src={AVIf} alt="AVIf" />
        </div>
        <div className={styles.whatsNew_single_explenationFull}>
          <h1 className={styles.WhatsNew_title}>AVIF image format</h1>
          <p className={styles.WhatsNew_explenation}>Avif image format is a relative new image format that is really light. Now the nextJS built-in Image Optimization API now supports AVIF images, enabling 20% smaller images compared to WebP. Which accounts for better UX for the end user!</p>
          <ul className={styles.benefits}>
            <Image src={checkMark} alt="checkMark" /><li className={styles.benefit}>Up to 85% lighter then jpg`s</li>
            <Image src={checkMark} alt="checkMark" /><li className={styles.benefit}>Are not supported on all major browsers (bad point)</li>
            <Image src={checkMark} alt="checkMark" /><li className={styles.benefit}>Can take longer to optimize as webP (bad point)</li>
          </ul>
          <div className={styles.links}>
            <Link href="/demos/AVIF_support/demo"><a className={styles.links_demo}>View demo</a></Link>
          </div>
        </div>
      </section>
    </div>
  )
}
