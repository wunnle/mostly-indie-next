import timeSince from '@/utils/time-since'
import Link from 'next/link'
import Markdown from 'react-markdown'
import styles from './PostLink.module.css'

const PostLink = ({ post }) => {
  const { slug, meta } = post

  const { title, date, featuredImg } = meta

  return (
    <Link href={`/${slug}`} key={post.slug} className={styles.link}>
      {featuredImg && (
        <div
          style={{
            backgroundImage: `url(/images/articles/${slug}/${featuredImg.replace(
              './',
              ''
            )})`
          }}
          className={styles.postImg}
        ></div>
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
