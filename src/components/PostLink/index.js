import Link from 'next/link'
import Image from 'next/image'
import styles from './PostLink.module.css'
import timeSince from '@/utils/time-since'
import Markdown from 'react-markdown'

const PostLink = ({ post }) => {
  const { slug, meta } = post

  const { title, date, featuredImg } = meta

  return (
    <Link href={`/${slug}`} key={post.slug} className={styles.link}>
      {featuredImg && (
        <Image
          className={styles.postImg}
          src={`/images/articles/${slug}/${featuredImg}`}
          alt="Alba"
          width={300}
          height={300}
        />
      )}
      <div className={styles.postInfo}>
        <div className={styles.postTitle}>
          <Markdown>{title}</Markdown>
        </div>
        <p className={styles.postDate}>{timeSince(date)} </p>
      </div>
    </Link>
  )
}

export default PostLink
