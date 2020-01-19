import gameEngine from '..';
import getRandomNum from '../utils';

const rules = 'What number is missing in the progression?';

const getCore = () => {
  const startingNum = getRandomNum(1, 5);
  const commonDifference = getRandomNum(2, 5);
  const missingNum = getRandomNum(1, 10);
  const quantityOfProgression = 10;
  let correctAnswer;
  const arithmeticProgStr = () => {
    let currentResult = '';
    let result = '';
    let currentNum = startingNum;
    let startIndex = 1;
    while (startIndex <= quantityOfProgression) {
      currentNum += commonDifference;
      if (startIndex === missingNum) {
        currentResult = '.. ';
        correctAnswer = currentNum;
      } else {
        currentResult = `${String(currentNum)} `;
      }
      result += currentResult;
      startIndex += 1;
    }
    const strWithoutLastSymbol = result.substr(0, result.length - 1);
    return strWithoutLastSymbol;
  };
  arithmeticProgStr();
  const question = `${arithmeticProgStr()}`;
  const answer = String(correctAnswer);
  const core = [question, answer];
  return core;
};

export default () => gameEngine(rules, getCore);
