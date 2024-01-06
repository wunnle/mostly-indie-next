import Image from 'next/image'
import Link from 'next/link'
import styles from './Footer.module.css'

const Footer = () => (
  <footer className={styles.footer}>
    <Link href="/" class="h-card" rel="me">
      Mostly Indie
    </Link>
    <div className={styles.contact}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/wunnle/mostly-indie"
      >
        <Image src="/images/github.svg" width={24} height={24} alt="github" />
      </a>
      <a target="_blank" rel="noopener noreferrer me" href="https://twitter.com/ranxi">
        <Image src="/images/twitter.svg" width={24} height={24} alt="twitter" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer me"
        href="https://store.steampowered.com/curator/8260569-Mostly-Indie/"
      >
        <Image src="/images/steam.svg" width={24} height={24} alt="steam" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer me"
        href="https://www.twitch.tv/mostlyindie/"
      >
        <Image src="/images/twitch.svg" width={24} height={24} alt="twitch" />
      </a>
      <div style={{ display: 'none' }}>
        <a href="https://github.com/mostlyindie" rel="me">
          https://github.com/mostlyindie
        </a>
        <a href="mailto:stopsinging@gmail.com" rel="me">
          stopsinging@gmail.com
        </a>
      </div>
    </div>
  </footer>
)

export default Footer
