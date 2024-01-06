import Layout from '@/components/Layout'
import PostLink from '@/components/PostLink'
import PostsHolder from '@/components/PostsHolder'
import Tagline from '@/components/Tagline'
import { getAllPosts } from '@/lib/api'
import Head from 'next/head'

const Home = ({ posts }) => (
  <Layout>
    <Head>
      <title>Mostly Indie</title>
      <meta
        name="description"
        content="Game reviews and news. but mostly about indies."
      />
      <meta property="og:title" content="Mostly Indie" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@mostlyindie" />
      <meta name="twitter:creator" content="@mostlyindie" />
      <meta property="og:url" content={`https://mostlyindie.com/`} />
      <meta
        property="og:description"
        content="Game reviews and news. but mostly about indies."
      />
      <meta
        property="og:image"
        content={`https://next.mostlyindie.com/images/logo.png`}
      />
      <meta
        property="twitter:image"
        content={`https://next.mostlyindie.com/images/logo.png`}
      />
      <link rel="canonical" href={`https://mostlyindie.com/`} />
      <meta property="og:site_name" content="Mostly Indie" />
    </Head>
    <Tagline />
    <PostsHolder>
      {posts.map(post => (
        <PostLink post={post} key={post.slug} />
      ))}
    </PostsHolder>
  </Layout>
)

export async function getStaticProps() {
  const slugs = getAllPosts()
  return {
    props: {
      posts: slugs
    }
  }
}

export default Home
