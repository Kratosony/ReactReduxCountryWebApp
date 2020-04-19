import React from "react";
import Lemon from "../Assets/Images/lemon.svg";
import Apple from "../Assets/Images/apple.svg";
import Banana from "../Assets/Images/banana.svg";
import Cherry from "../Assets/Images/cherries.svg";

export const slotReels = {
  reel1: [1, 4, 3, 4, 2, 2, 4, 4],
  reel2: [4, 3, 4, 4, 1, 3, 2, 4],
  reel3: [4, 3, 4, 3, 1, 4, 2, 4],
};

export function slotImage(number) {
  switch (number) {
    case 1:
      return <img alt="cherry" src={Cherry} />;
    case 2:
      return <img alt="banana" src={Banana} />;
    case 3:
      return <img alt="apple" src={Apple} />;
    case 4:
      return <img alt="lemon" src={Lemon} />;
  }
}

export const notifications = {
  winningNotification: (number) => `You have won ${number} coins!`,
  losingNotification: "You have lost!",
  noCoins: "You are out of Credits!",
};

export function randomiseReel(reel) {
  var result = reel[Math.floor(Math.random() * reel.length)];
  return result;
}

export function checkWinType(array) {
  var winType = array.slice(-1)[0];
  var arrayLength = array.length;
  let winnings = -1;
  switch (`${arrayLength}|${winType}`) {
    // When array contains 3 elements - WIN
    case "3|1":
      winnings = 50;
      break;
    case "3|3":
      winnings = 20;
      break;
    case "3|2":
      winnings = 15;
      break;
    case "3|4":
      winnings = 3;
      break;
    // When array contains 2 elements and theyre not a lemon - WIN
    case "2|1":
      winnings = 40;
      break;
    case "2|3":
      winnings = 10;
      break;
    case "2|2":
      winnings = 5;
      break;
    // When array contains 2 elements and they're a lemon - LOSS
    case "2|4":
      winnings = false;
      break;
  }
  return winnings;
}
