import { useEffect, useState } from "react";
import { checkWordExistence } from "../helpers/checkWordExistence";

export default function PasswordPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState<string>("");
  const [rules, setRules] = useState(passwordRules);

  useEffect(() => {
    setRules(validatePassword(password));
  }, [password]);

  return (
    <div className="items-center justify-center flex flex-col flex-1 gap-y-10">
      <h1 className="text-5xl font-semibold">Let's validate your password</h1>
      <div className="my-4 flex flex-col gap-y-4">
        <div className="flex flex-col items-center gap-y-3">
          <input
            className="rounded-md text-lg"
            type={showPassword ? "text" : "password"}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div className="flex flex-row gap-x-1">
            <input
              className=""
              type="checkbox"
              checked={showPassword}
              onChange={(e) => setShowPassword(e.target.checked)}
            />
            <label>Show password</label>
          </div>
        </div>

        <div>
          <p>Password hint:</p>
          {Object.values(rules).map((rule, index) => (
            <div
              key={index}
              style={rule.isValid ? { color: "green" } : { color: "red" }}
            >
              {rule.isValid ? "✅" : "❌"} {rule.description}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const passwordRules = {
  length: {
    validate: (password: string) =>
      password.length >= 8 && password.length <= 16,
    description: "Password must be between 8 and 16 characters",
    isValid: false,
  },
  alphanumeric: {
    validate: (password: string) =>
      /[0-9]/.test(password) && /[a-zA-Z]/.test(password),
    description: "Password must contain at least one letter and one digit",
    isValid: false,
  },
  noEnglishWords: {
    validate: (password: string) => !checkWordExistence(password),
    description: "Password must NOT contain full English words",
    isValid: false,
  },
};

const validatePassword = (password: string) => {
  const updatedRules = { ...passwordRules };
  updatedRules.noEnglishWords.isValid =
    updatedRules.noEnglishWords.validate(password);
  updatedRules.alphanumeric.isValid =
    updatedRules.alphanumeric.validate(password);
  updatedRules.length.isValid = updatedRules.length.validate(password);
  return updatedRules;
};
