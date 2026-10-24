/* =====================================================================
   CONTENT.JS  —  website ka saara material yahin se aata hai.
   Naya PDF / link / YouTube channel add karna ho to SIRF yeh file edit karo.
   Website ka link wahi rahega, naya link kabhi nahi banana.

   Jab tak kisi list mein kuch nahi hai ( [] khali ), us page pe
   "Coming soon" dikhega. Jis din item daaloge, page apne aap bhar jayega.

   ITEM KA FORMAT (ek line = ek resource):
     { title: "Chapter 1 Notes", note: "Relations & Functions", url: "pdfs/maths-ch1.pdf", added: "2026-10-24" },

   - title : naam (zaroori)
   - note  : chhoti line (optional)
   - url   : PDF ho to  "pdfs/file-name.pdf"  (PDF ko GitHub ke `pdfs` folder mein upload karo)
             Google Drive / YouTube / koi website ho to poora https:// link
   - added : date YYYY-MM-DD (optional) — 14 din tak NEW badge dikhega
   - Har line ke END mein comma , lagana.

   Categories:
     notes, pyqs, "important-questions", "important-mcqs", "important-topics", youtube
   (telegram ka link har subject ke `telegram:` mein hai.)
   ===================================================================== */
const CONTENT = {
  physics: {
    telegram: "https://t.me/+8HVtUO6kdS85YjRl",
    notes: [], pyqs: [], "important-questions": [], "important-mcqs": [], "important-topics": [],
    youtube: [
      // { title: "Channel ka naam", note: "Kyun best hai", url: "https://www.youtube.com/@channel" },
    ]
  },
  mathematics: {
    telegram: "https://t.me/+hMuB9NTU_ttjYzNl",
    notes: [], pyqs: [], "important-questions": [], "important-mcqs": [], "important-topics": [],
    youtube: []
  },
  chemistry: {
    telegram: "https://t.me/+Sdc3miwC4CdlMWZl",
    notes: [], pyqs: [], "important-questions": [], "important-mcqs": [], "important-topics": [],
    youtube: []
  },
  english: {
    telegram: "https://t.me/+6UPcbtQkmVwxZTg1",
    notes: [], pyqs: [], "important-questions": [], "important-mcqs": [], "important-topics": [],
    youtube: []
  },
  punjabi: {
    telegram: "https://t.me/+6UPcbtQkmVwxZTg1",   // abhi English wala hi link hai; Punjabi ka alag channel ho to yahan badal do
    notes: [], pyqs: [], "important-questions": [], "important-mcqs": [], "important-topics": [],
    youtube: []
  }
};
