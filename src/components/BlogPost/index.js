import timeSince from '@/utils/time-since'
import styles from './BlogPost.module.css'
import Markdown from 'react-markdown'
import Webmentions from '@/components/Webmentions'
import Head from 'next/head'

const BlogPost = ({ post }) => {
  const { meta, content } = post

  const { title, date, featuredImg } = meta

  return (
    <div>
      <Head>
        <title>{title} | Mostly Indie</title>
        <meta name="description" content={title} />
        <meta property="og:title" content={title} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mostlyindie" />
        <meta name="twitter:creator" content="@mostlyindie" />
        <meta property="og:url" content={`https://mostlyindie.com/${post.slug}`} />
        <meta property="og:description" content={title} />
        <meta
          property="og:image"
          content={`/images/articles/${post.slug}/${featuredImg.replace('./', '')}`}
        />
        <meta
          property="twitter:image"
          content={`/images/articles/${post.slug}/${featuredImg.replace('./', '')}`}
        />
        <link rel="canonical" href={`https://mostlyindie.com/${post.slug}`} />
      </Head>
      <div className={styles.post}>
        <h1 className={[styles.title, 'p-name'].join(' ')}>{title}</h1>
        <div style={{ display: 'none' }}>
          <p className={['p-author', 'h-card'].join(' ')} rel="author">
            Ranxi
          </p>
        </div>
        <p className={styles.date}>{timeSince(date)}</p>
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
