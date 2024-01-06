import BlogPost from '@/components/BlogPost'
import Layout from '@/components/Layout'
import { getAllPostSlugs, getPostBySlug } from '@/lib/api'

const Slug = ({ post }) => {
  return (
    <Layout>
      <BlogPost post={post} />
    </Layout>
  )
}

export default Slug

export function getStaticPaths() {
  const slugs = getAllPostSlugs()

  return {
    paths: slugs.map(slug => ({
      params: {
        slug
      }
    })),
    fallback: false
  }
}

export function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug)
  return {
    props: {
      post
    }
  }
}
