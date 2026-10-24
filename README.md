# PS Study Learning Hub — Final Starter

Multi-page website: Home → Class 12 → Subject → har category ka alag page.
Subjects: Physics, Mathematics, Chemistry, English, Punjabi.
Categories: Notes, PYQs, Important Questions, Important MCQs, Important Topics, Telegram, Best YouTube Channels.

## Laptop pe preview
ZIP extract karo, `index.html` pe double-click.

## GitHub pe daalna (free link ke liye)
1. github.com pe account banao -> upar `+` -> **New repository**.
2. Name: `ps-study-learning-hub`, **Public**, **Create repository**.
3. **uploading an existing file** pe click karo.
4. Extract hue folder ke ANDAR ki saari files + `pdfs` folder drag-drop karo
   (`.nojekyll` file hidden hoti hai; na dikhe to koi baat nahi, site phir bhi chalegi).
5. **Commit changes**.
6. **Settings -> Pages -> Deploy from a branch -> main / (root) -> Save**.
7. 1-3 minute baad link: `https://USERNAME.github.io/ps-study-learning-hub/`

## Baad mein material kaise daalna (link wahi rahega)
Sirf `content.js` edit karni hai. GitHub pe `content.js` kholo -> pencil -> subject ke
list mein ek line daalo -> **Commit changes**. Page apne aap bhar jayega.

Example: `notes: [ { title: "Chapter 1 Notes", url: "pdfs/maths-ch1.pdf" } ],`
PDF pehle `pdfs` folder mein upload karni hai. Detail `content.js` ke upar likhi hai.

Jab tak list khali `[]` hai, wo page "Coming soon" dikhata hai.
