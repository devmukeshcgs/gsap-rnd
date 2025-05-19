import {
  blackImg,
  blueImg,
  highlightFirstVideo,
  highlightFourthVideo,
  highlightSecondVideo,
  highlightThirdVideo,
  whiteImg,
  yellowImg,
} from "../utils";

export const navLists = [
  { "link": "/", "name": "Home" },
  { "link": "/about", "name": "About" },
  { "link": "/career", "name": "Career" },
  { "link": "/faq", "name": "Faq" },
  { "link": "/contact", "name": "Contact" },
];

export const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      "Enter A17 Pro.",
      "Game‑changing chip.",
      "Groundbreaking performance.",
    ],
    video: highlightFirstVideo,
    videoDuration: 4,
  },
  {
    id: 2,
    textLists: ["Titanium.", "So strong. So light. So Pro."],
    video: highlightSecondVideo,
    videoDuration: 5,
  },
  {
    id: 3,
    textLists: [
      "iPhone 15 Pro Max has the",
      "longest optical zoom in",
      "iPhone ever. Far out.",
    ],
    video: highlightThirdVideo,
    videoDuration: 2,
  },
  {
    id: 4,
    textLists: ["All-new Action button.", "What will yours do?."],
    video: highlightFourthVideo,
    videoDuration: 3.63,
  },
];
export const hightlightsSlidesNew = [
  {
    id: 1,
    textLists: [
      "1. Pick your match",
      "IPL, CPL, PSL, T20 World Cup, Blast, SA20, ILT20 we have it all!",
     ],
    img: yellowImg,
    video: highlightFirstVideo,
    videoDuration: 1,
  },
  {
    id: 2,
    textLists: [
      "2. Choose the right contest",
      "Game‑changing chip.",
      "Groundbreaking performance.",
    ],
    img: blackImg,
    video: highlightFirstVideo,
    videoDuration: 1,
  },
  {
    id: 3,
    textLists: [
      "3. Create your personalised teams fast",
      "Your skills plus our smarts combine in our Lineup Wizard to build your perfect lineups. Choose your risk, lock in your favourite players, balance your teams, hit Create, and let the magic happen.",
    ],
    img: blackImg,
    video: highlightFirstVideo,
    videoDuration: 1,
  } 
]
export const models = [
  {
    id: 1,
    title: "iPhone 15 Pro in Natural Titanium",
    color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
  },
  {
    id: 2,
    title: "iPhone 15 Pro in Blue Titanium",
    color: ["#53596E", "#6395ff", "#21242e"],
    img: blueImg,
  },
  {
    id: 3,
    title: "iPhone 15 Pro in White Titanium",
    color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
    img: whiteImg,
  },
  {
    id: 4,
    title: "iPhone 15 Pro in Black Titanium",
    color: ["#454749", "#3b3b3b", "#181819"],
    img: blackImg,
  },
];

export const sizes = [
  { label: '6.1"', value: "small" },
  { label: '6.0"', value: "large" },
  // { label: '6.7"', value: "large" },
];

export const footerLinks = [
  { "link": "/privacy-policy", "name": "Privacy Policy" },
  { "link": "/terms", "name": "Terms of Use" },
  // { "link": "/how-to-play", "name": "How to Play" },
  // { "link": "/support", "name": "Support" },
  { "link": "/contact", "name": "Contact Us" },
  { "link": "/faq", "name": "FAQ" },
  { "link": "/about", "name": "About Us" },
];
export const faqData = [
  {
    "question": "How do I create an account?",
    "answer": "To create an account, click on the 'Sign Up' button in the top right corner and fill out the registration form with your details.",
    "tag": ["feature", "account"]
  },
  {
    "question": "What payment methods do you accept?",
    "answer": "We accept all major credit cards, PayPal, and bank transfers for payment.",
    "tag": ["payment", "feature"]
  },
  {
    "question": "How can I reset my password?",
    "answer": "Click on 'Forgot Password' on the login page and follow the instructions sent to your email.",
    "tag": ["account", "security"]
  },
  {
    "question": "Is there a mobile app available?",
    "answer": "Yes, our mobile app is available for both iOS and Android devices in their respective app stores.",
    "tag": ["mobile", "UI"]
  },
  {
    "question": "How do I contact customer support?",
    "answer": "You can reach our support team 24/7 through the live chat feature or by emailing support@example.com.",
    "tag": ["support", "feature"]
  }
];