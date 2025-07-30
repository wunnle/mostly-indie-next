import styles from './Tagline.module.css'
import { Silkscreen } from 'next/font/google'
import Image from 'next/image'
import logo from './logo.png'
import Link from 'next/link'

const silkscreen = Silkscreen({ subsets: ['latin'], weight: ['400', '700'] })

const Tagline = () => (
  <div className={styles.wrapper}>
    <div className={styles.holder}>
      <Image className={styles.logo} src={logo} alt="Mostly Indie" />
      <div className={styles.tagline}>
        Game reviews, mostly{' '}
        <span className={[silkscreen.className, styles.indie].join(' ')}>indies</span>
      </div>
      <Link
        href="/about"
        className={['h-card', silkscreen.className, styles.menuLink].join(' ')}
        rel="me"
      >
        About
      </Link>
    </div>
  </div>
)

export default Tagline
