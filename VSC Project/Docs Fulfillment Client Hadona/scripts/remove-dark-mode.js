const fs = require('fs')
const path = require('path')

// Recursively find all .tsx and .ts files
function findFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir)
  
  files.forEach(file => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    
    if (stat.isDirectory() && !filePath.includes('node_modules') && !filePath.includes('.next')) {
      findFiles(filePath, fileList)
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fileList.push(filePath)
    }
  })
  
  return fileList
}

// Remove dark mode classes
function removeDarkMode(content) {
  // Remove dark: variants from class strings
  let newContent = content
  
  // Pattern: dark:something -> remove
  newContent = newContent.replace(/\s+dark:[^\s"']+/g, '')
  
  // Pattern: "dark:something" -> remove
  newContent = newContent.replace(/\s+"dark:[^"]*"/g, '')
  newContent = newContent.replace(/\s+'dark:[^']*'/g, '')
  
  // Pattern: dark:something in template literals
  newContent = newContent.replace(/dark:[^\s`}]+/g, '')
  
  return newContent
}

// Process files
const appDir = path.join(__dirname, '..', 'app')
const componentsDir = path.join(__dirname, '..', 'components')

const files = [
  ...findFiles(appDir),
  ...findFiles(componentsDir)
]

let changedFiles = 0

files.forEach(file => {
  try {
    const content = fs.readFileSync(file, 'utf8')
    
    if (content.includes('dark:')) {
      const newContent = removeDarkMode(content)
      
      if (content !== newContent) {
        fs.writeFileSync(file, newContent, 'utf8')
        console.log(`Updated: ${file}`)
        changedFiles++
      }
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message)
  }
})

console.log(`\nProcessed ${changedFiles} files`)




