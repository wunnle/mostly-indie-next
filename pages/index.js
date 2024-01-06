import Layout from '@/components/Layout'
import PostLink from '@/components/PostLink'
import PostsHolder from '@/components/PostsHolder'
import Tagline from '@/components/Tagline'
import { getAllPosts } from '@/lib/api'

const Home = ({ posts }) => (
  <Layout>
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
