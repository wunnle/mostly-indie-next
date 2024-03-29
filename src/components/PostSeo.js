import Head from 'next/head'
import removeMd from 'remove-markdown'

const PostSeo = ({ post }) => {
  const { meta, content } = post

  const { title, featuredImg, date } = meta

  const summary = removeMd(content).slice(0, 157) + '...'

  return (
    <Head>
      <title>{title} | Mostly Indie</title>
      <meta name="description" content={summary} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="article" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@mostlyindie" />
      <meta name="twitter:creator" content="@mostlyindie" />
      <meta property="og:url" content={`https://mostlyindie.com/${post.slug}`} />
      <meta property="og:description" content={summary} />
      <meta
        property="og:image"
        content={`https://mostlyindie.com/images/articles/${
          post.slug
        }/${featuredImg.replace('./', '')}`}
      />
      <meta
        property="twitter:image"
        content={`https://mostlyindie.com/images/articles/${
          post.slug
        }/${featuredImg.replace('./', '')}`}
      />
      <link rel="canonical" href={`https://mostlyindie.com/${post.slug}`} />
      <meta property="og:site_name" content="Mostly Indie" />
      <meta property="article:published_time" content={date} />
    </Head>
  )
}

export default PostSeo
