import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

export function getPostBySlug(slug) {
  const postsDirectory = path.join(process.cwd(), 'articles')
  const fullPath = path.join(postsDirectory, slug, 'post.md')
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    slug,
    meta: data,
    content
  }
}

export function getAllPostSlugs() {
  const postsDirectory = path.join(process.cwd(), 'articles')
  const fileNames = fs
    .readdirSync(postsDirectory, { withFileTypes: true })
    .filter(fileName => fileName.isDirectory())
    .map(fileName => fileName.name)

  return fileNames
}

export function getAllPageNames() {
  const postsDirectory = path.join(process.cwd(), 'articles')
  const fileNames = fs
    .readdirSync(postsDirectory, { withFileTypes: true })
    .filter(fileName => fileName.isDirectory())
    .map(fileName => fileName.name)

  return fileNames
}

export function getAllPosts() {
  const slugs = getAllPostSlugs()
  const posts = slugs
    .map(slug => getPostBySlug(slug))
    .sort((a, b) => {
      return new Date(b.meta.date) - new Date(a.meta.date)
    })
  return posts
}
