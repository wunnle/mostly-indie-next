import styles from './Header.module.css'
import logo from './logo.png'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => (
  <header className={styles.header}>
    <Link href="/" className="h-card" rel="me">
      <Image className={styles.logo} src={logo} alt="Mostly Indie" />
    </Link>
    {/* <nav className={styles.nav}>
        <Link key={'asfa'} href={'asf'}>
          links
        </Link>
    </nav> */}
  </header>
)

export default Header
