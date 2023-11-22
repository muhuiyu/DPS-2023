import { useEffect, useState } from "react";
import { useWordList } from "./hooks/useWordList";

interface Props {}

export default function PasswordPage(props: Props) {
  const [count, setCount] = useState(0);
  const { wordList } = useWordList();

  const [password, setPassword] = useState<string>("");
  const [passwordStatus, setPasswordStatus] = useState<string>("");

  useEffect(() => {
    if (wordList) {
      setPasswordStatus(validatePassword(password, wordList));
    }
  }, [password, wordList]);

  return (
    <>
      <h1>Password Validation</h1>
      <div className="card">
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <p>{passwordStatus}</p>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

const validatePassword = (password: string, wordList: string[]) => {
  if (wordList && wordList.includes(password.toLowerCase())) {
    return "Password must not contain full English words";
  }

  const alphanumeric_regex = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
  const length_regex = /^.{8,16}$/;

  if (!alphanumeric_regex.test(password)) {
    return "Password must contain at least one letter and one digit";
  }

  if (!length_regex.test(password)) {
    return "Password must be between 8 and 16 characters";
  }

  if (wordList.includes(password.toLowerCase())) {
    return "Password must not contain full English words";
  }

  return "Valid password";
};
