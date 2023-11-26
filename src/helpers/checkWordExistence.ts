import wordListData from '../data/google-10000-english-usa.json'

const wordList = (wordListData as { data: string[] }).data
const lowerCaseWordList = wordList
  .map((word) => word.toLowerCase())
  .filter((word) => word.length <= 16 && word.length > 2) // filter word length in between 3-16 characters

const wordSet = new Set(lowerCaseWordList)

export const checkWordExistence = (str: string): boolean => {
  console.log('check word', str)
  if (str.length === 0) {
    return true
  }
  const lowerCaseStr = str.toLowerCase()
  const length = lowerCaseStr.length
  for (let end = 1; end <= length; ++end) {
    for (let start = 0; start < end; ++start) {
      if (wordSet.has(lowerCaseStr.slice(start, end))) {
        console.log('has word', lowerCaseStr.slice(start, end))
        return true
      }
    }
  }
  return false
}
