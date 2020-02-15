import runGame from '..';
import getRandomNum from '../utils';

const description = 'What number is missing in the progression?';

const progressionLength = 10;

const makeProgression = (firstElement, commonDifference, hiddenElement) => {
  let currentResult = '';
  let result = '';
  for (let index = 0; index <= progressionLength; index += 1) {
    const currentIndex = firstElement + commonDifference * index;
    if (index === hiddenElement) {
      currentResult = '..';
    } else {
      currentResult = `${currentIndex}`;
    }
    result = `${result} ${currentResult}`;
  }
  return result.trim();
};

const getGameData = () => {
  const startingNum = getRandomNum(1, 5);
  const commonDifference = getRandomNum(2, 5);
  const hiddenElement = getRandomNum(0, progressionLength);
  const question = makeProgression(startingNum, commonDifference, hiddenElement);
  const answer = startingNum + hiddenElement * commonDifference;
  return [question, String(answer)];
};

export default () => runGame(description, getGameData);
