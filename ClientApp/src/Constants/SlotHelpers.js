const slotReels = {
  reel1: [1, 4, 3, 4, 2, 2, 4, 4],
  reel2: [4, 3, 4, 4, 1, 3, 2, 4],
  reel3: [4, 3, 4, 3, 1, 4, 2, 4],
};

const symbolSelector = {
  Cherry: 1,
  Banana: 2,
  Apple: 3,
  Lemon: 4,
};

const arrayLengthSelector = {
  A: 2,
  B: 3,
};

function randomiseReel(reel) {
  var result = reel[Math.floor(Math.random() * reel.length)];
  return result;
}

function checkWinType(array) {
  var winType = array.slice(-1)[0];
  var arrayLength = array.length;
  let winnings = -1;
  console.log(`${arrayLength}|${winType}`);
  switch (`${arrayLength}|${winType}`) {
    // When array contains 3 elements - WIN
    case "3|4":
      winnings = 50;
      break;
    case "3|3":
      winnings = 20;
      break;
    case "3|2":
      winnings = 15;
      break;
    case "3|1":
      winnings = 3;
      break;
    // When array contains 2 elements and theyre not a lemon - WIN
    case "2|4":
      winnings = 40;
      break;
    case "2|3":
      winnings = 10;
      break;
    case "2|2":
      winnings = 5;
      break;
    // When array contains 2 elements and they're a lemon - LOSS
    case "2|1":
      winnings = false;
      break;
  }
  return winnings;
}

export function slotResult() {
  var reel1Output = randomiseReel(slotReels.reel1);
  var reel2Output = randomiseReel(slotReels.reel2);
  var reel3Output = randomiseReel(slotReels.reel3);
  var result = [reel1Output, reel2Output, reel3Output];

  if (!result.every((val, i, arr) => val == arr[0])) {
    var firstPair = [reel1Output, reel2Output];
    if (!firstPair.every((val, i, arr) => val == arr[0])) {
      var secondPair = [reel2Output, reel3Output];
      if (!firstPair.every((val, i, arr) => val == arr[0])) {
        return false;
      } else {
        return checkWinType(secondPair);
      }
    } else {
      return checkWinType(firstPair);
    }
  } else {
    return checkWinType(result);
  }
}
