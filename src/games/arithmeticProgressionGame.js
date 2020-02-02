import gameEngine from '..';
import getRandomNum from '../utils';

const description = 'What number is missing in the progression?';

const getGameData = () => {
  const startingNum = getRandomNum(1, 5);
  const commonDifference = getRandomNum(2, 5);
  const quantityOfProgression = 10;
  const missingNum = getRandomNum(0, quantityOfProgression);
  const answer = startingNum + missingNum * commonDifference;
  const arithmeticProgStr = () => {
    let currentResult = '';
    let result = '';
    let currentNum = startingNum;
    let startIndex = 1;
    while (startIndex <= quantityOfProgression) {
      currentNum += commonDifference;
      if (startIndex === missingNum) {
        currentResult = '.. ';
        // correctAnswer = currentNum;
      } else {
        currentResult = `${String(currentNum)} `;
      }
      result += currentResult;
      startIndex += 1;
    }
    const strWithoutLastSymbol = result.substr(0, result.length - 1);
    return strWithoutLastSymbol;
  };
  const question = `${arithmeticProgStr()}`;
  return [String(question), String(answer)];
};

export default () => gameEngine(description, getGameData);
