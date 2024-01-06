const fs = require('fs')
const path = require('path')
const targetDir = './pages'

const sourceDir = path.join(process.cwd(), 'articles')

function getAllPostSlugs() {
  const fileNames = fs
    .readdirSync(sourceDir, { withFileTypes: true })
    .filter(fileName => fileName.isDirectory())
    .map(fileName => fileName.name)

  return fileNames
}

// copy all markdown articles to pages while replacing img paths with [slug]/[img]

const postSlugs = getAllPostSlugs()

postSlugs.forEach(slug => {
  const files = fs.readdirSync(`${sourceDir}/${slug}`)
  files.forEach(file => {
    const extension = path.extname(file)
    if (extension === '.md') {
      const fileContents = fs.readFileSync(`${sourceDir}/${slug}/${file}`, 'utf8')
      const newFileContents = fileContents.replace(
        /\!\[.+\]\(\.\/(.+)\)/gm,
        `![alt text](/images/articles/${slug}/$1)`
      )
      fs.writeFileSync(`${targetDir}/${slug}.md`, newFileContents)
    }
  })
})
