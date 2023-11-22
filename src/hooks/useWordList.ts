import { useQuery } from "react-query";

export const useWordList = () => {
  const {
    data: wordList,
    isLoading,
    isError,
  } = useQuery("wordList", getWordList);
  return {
    wordList,
    isLoading,
    isError,
  };
};

const getWordList = async (): Promise<string[]> => {
  const response = await fetch(
    "https://raw.githubusercontent.com/dwyl/english-words/master/words.txt"
  );
  const wordList = await response.text();
  return wordList.split("\n");
};
