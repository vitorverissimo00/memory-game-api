"use strict";

const emojis = [
  "🐶",
  "🐱",
  "🦊",
  "🐼",
  "🐨",
  "🐸",
  "🐙",
  "🐧",
  "🦁",
  "🐰",
  "🐷",
  "🐮",
  "🐔",
  "🐦",
  "🐢",
  "🐟",
  "🐬",
  "🦋",
  "🐞",
  "🦄",
  "🍎",
  "🍉",
  "🍇",
  "🍓",
  "🍒",
  "🍍",
  "🥥",
  "🥑",
  "🍔",
  "🍕",
  "⚽",
  "🏀",
  "🏈",
  "🎾",
  "🎲",
  "🎯",
  "🎮",
  "🎰",
  "🎳",
  "🧩",
];

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

exports.generateRandomCards = (pairs) => {
  if (isNaN(pairs) || pairs < 1) {
    throw new Error("Invalid number of pairs");
  }

  if (pairs > emojis.length) {
    throw new Error(`Maximum number of pairs is ${emojis.length}`);
  }

  const selectedEmojis = shuffleArray(emojis).slice(0, pairs);

  const cards = shuffleArray(
    selectedEmojis
      .map((emoji, index) => [
        {
          pairId: index,
          content: emoji,
        },
        {
          pairId: index,
          content: emoji,
        },
      ])
      .flat()
  );

  return cards;
};
