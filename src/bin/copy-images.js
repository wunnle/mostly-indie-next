const fs = require('fs')
const path = require('path')
const targetDir = './public/images/articles'
const fsExtra = require('fs-extra')

const sourceDir = path.join(process.cwd(), 'articles')

function getAllPostSlugs() {
  const fileNames = fs
    .readdirSync(sourceDir, { withFileTypes: true })
    .filter(fileName => fileName.isDirectory())
    .map(fileName => fileName.name)

  return fileNames
}

fsExtra.emptyDirSync(targetDir)

const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif']

const postSlugs = getAllPostSlugs()

postSlugs.forEach(slug => {
  const files = fs.readdirSync(`${sourceDir}/${slug}`)
  files.forEach(file => {
    const extension = path.extname(file)
    if (allowedExtensions.includes(extension)) {
      fs.mkdirSync(`${targetDir}/${slug}`, { recursive: true })
      fs.copyFileSync(`${sourceDir}/${slug}/${file}`, `${targetDir}/${slug}/${file}`)
    }
  })
})
