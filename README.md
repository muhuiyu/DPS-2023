# Password Validation Project (DPS Technical Challenge)

This password validation tool is built with React (TypeScript), Vite, and Bun for the Digital Product School (DPS) technical challenge.

The challenge spec is as follows:

```
Password validator.

Create a web page for validation of passwords entered by users. The rules for a valid password are the following:
- it should have the length of 8-16 symbols
- it should contain letters of latin alphabet and at least one digit
- it should not contain full english words (you can use any free dictionary API to check this)

```

## Screenshot

<img width="1391" alt="Screenshot 2023-11-22 at 10 17 09 PM" src="https://github.com/muhuiyu/DPS-2023/assets/42035587/cfe8aa98-975c-47e4-afc1-ab745854cee7">

## Getting Started

- To run the project in development mode, clone and enter the repository, and use the Bun tool with the following command:

```
bun install
bun dev
```

## Solution

To solve this challenge, I aimed for simplicity and efficiency. Since the submit function was not mentioned in the challenge spec, the scope of this project was kept to solely building the front-end. No backend implementation was developed for this challenge.

The main page is `PasswordPage.tsx`. As soon as the user begins typing in the password field, the input is validated immediately. I did try adding a debounce for checking, but immediate feedback provides a better user experience - especially since I reduced the dictionary size to only the most common 10,000 words. I also pre-downloaded the dictionary into the app and converted it to JSON to avoid calling async functions, which increases speed.

The first two password rules are quite straightforward while the third rule is more challenging to me. I initially tried using a word list file from [List Of English Words](https://github.com/dwyl/english-words/) as the dictionary for validation. However, this list included every single character (like a, b, c, d...) and various couple character strings (like aa, ac) as words, which was not practical for our purpose.

Instead, I switched the dictionary to [google-10000-english](https://github.com/first20hours/google-10000-english). This text file contains the most frequently used 10,000 English words in USA spelling, offering a more practical dictionary to validate user passwords. I also provided the script (`script.js`) I used for converting txt to json file. I also removed words with only single or couple character strings (like a, rl) in validation rules for a better user experience.

## Reflections and Recommendations

Through the process of creating this password validation system, I was thinking of the balance between ensuring user security and providing a user-friendly experience.

Using a word dictionary for password validation has its trade-offs. It discourages using common words, but depending on the dictionary source we choose, it can be overly restrictive (e.g. "ca" and "mu" are still included in [google-10000-english](https://github.com/first20hours/google-10000-english)), and sometimes these combinations may not really make passwords "weak".

In my experience, using a dictionary can lead to frequent flagging of simple character combinations as 'words'. For a more practical and user-friendly experience, I suggest using either a shorter list, such as the most common 1,500 words, or adding more specific rules, such special characters, must be at least one uppercase and one lowercase character, etc. Since I believe the goal, eventually, is to help users create secure passwords as intuitive as possible.

## Note

If you have any questions, feel free to contact me via muhuiyu.grace@gmail.com.

Thank you in advance for reviewing this project!
