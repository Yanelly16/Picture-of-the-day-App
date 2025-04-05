//Filename: routes/pictureRoutes.js

import express from "express";

const router = express.Router();

// Hardcoded Data
const greetings = [
    "Purr-fect day!",
    "Meow-velous choice!",
    "Pawsitive vibes!",
    "Whisker-ful day!",
    "Whisker me away!",
    "Paws-itively adorable!",
    "You're the cat's meow!",
    "Cat-tastic choice!",
    "Furry and fabulous!",
    "Nine lives worth of cuteness!",
    "You've cat to be kitten me!"
];

const catFacts = [
   "Cats can rotate their ears 180 degrees",
   "A cat's nose print is unique like a fingerprint",
   "Cats sleep 12-16 hours daily",
   "Cats have 230 bones in their body (humans have 206).",
    "The oldest known pet cat existed 9,500 years ago.",
    "Cats spend 70% of their lives sleeping.",
    "A cat's purr may have healing properties.",
    "Cats can jump up to six times their length.",
    "Cats have a special reflective layer called the tapetum lucidum that makes their eyes glow in the dark.",
    "The world's richest cat had £7 million (his owner left him the fortune).",
    "Cats walk like camels and giraffes - they move both right feet first, then both left feet."
];

router.get('/', (req, res) => {
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch cat picture");
            }
            return response.json();
        })
        .then(data => {
            res.render('picture', {
                greeting: greetings[Math.floor(Math.random() * greetings.length)],
                catUrl: data[0].url,
                fact: catFacts[Math.floor(Math.random() * catFacts.length)],
                error: null
            });
        })
        .catch(error => {
            res.render('picture', { error: "😿 Failed to load cat picture" });
        });
});

export default router;