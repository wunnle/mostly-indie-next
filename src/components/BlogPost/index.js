import timeSince from '@/utils/time-since'
import styles from './BlogPost.module.css'
import Markdown from 'react-markdown'
import Webmentions from '@/components/Webmentions'
import PostSeo from '@/components/PostSeo'

const BlogPost = ({ post }) => {
  const { meta, content } = post

  const { title, date } = meta

  return (
    <div>
      <PostSeo post={post} />
      <div className={[styles.post, 'h-entry'].join(' ')}>
        <h1 className={[styles.title, 'p-name'].join(' ')}>{title}</h1>
        <div style={{ display: 'none' }}>
          <p className={['p-author', 'h-card'].join(' ')} rel="author">
            Ranxi
          </p>
          <a className="u-url" href={`https://mostlyindie.com/${post.slug}`}>
            Link to the post
          </a>
          {date && (
            <time className="dt-published" dateTime={date}>
              {date}
            </time>
          )}
        </div>
        {date && <p className={styles.date}>{timeSince(date)}</p>}
        <div className={[styles.content, 'e-content', 'p-name'].join(' ')}>
          {' '}
          <Markdown
            components={{
              img: props => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  {...props}
                  src={`/images/articles/${post.slug}/${props.src}`}
                  alt={props.alt}
                />
              )
            }}
          >
            {content}
          </Markdown>
        </div>
        <Webmentions slug={post.slug} />
      </div>
    </div>
  )
}

export default BlogPost
