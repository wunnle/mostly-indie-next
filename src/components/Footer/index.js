import Image from 'next/image'
import Link from 'next/link'
import styles from './Footer.module.css'
import { Silkscreen } from 'next/font/google'
import Head from 'next/head'

const silkscreen = Silkscreen({ subsets: ['latin'], weight: ['400'] })

const Footer = () => (
  <div className={styles.wrapper}>
    <footer className={styles.footer}>
      <Head>
        <link rel="webmention" href="https://webmention.io/mostlyindie.com/webmention" />
        <link rel="pingback" href="https://webmention.io/mostlyindie.com/xmlrpc" />
      </Head>
      <Link
        href="/"
        className={['h-card', silkscreen.className, styles.footerTitle].join(' ')}
        rel="me"
      >
        Most<span style={{ letterSpacing: '-0.22em' }}>ly</span> Indie
      </Link>
      <div className={styles.contact}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/wunnle/mostly-indie"
          title="Github"
        >
          <Image src="/images/github.svg" width={24} height={24} alt="github" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer me"
          href="https://bsky.app/profile/mostlyindie.com"
          title="Bluesky"
        >
          <Image src="/images/bluesky.svg" width={24} height={24} alt="bluesky" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer me"
          href="https://store.steampowered.com/curator/8260569-Mostly-Indie/"
          title="Steam"
        >
          <Image src="/images/steam.svg" width={24} height={24} alt="steam" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer me"
          href="https://www.twitch.tv/mostlyindie/"
          title="Twitch"
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
  </div>
)

export default Footer
