import { readFile, writeFile } from 'fs/promises'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// const FILENAME = "word-list";
const FILENAME = 'google-10000-english-usa'

let txtFilePath = join(__dirname, `${FILENAME}.txt`)
let jsonFilePath = join(__dirname, `${FILENAME}.json`)

readFile(txtFilePath, 'utf8')
  .then((data) => {
    let wordsArray = data.split('\n')
    let wordsJson = JSON.stringify({ data: wordsArray }, null, 2)
    return writeFile(jsonFilePath, wordsJson)
  })
  .then(() => {
    console.log(`Successfully converted to JSON and saved to ${FILENAME}.json`)
  })
  .catch(console.error)
