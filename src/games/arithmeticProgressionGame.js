import runGameEngine from '..';
import getRandomNum from '../utils';

const description = 'What number is missing in the progression?';

const progressionLength = 10;

const getQuestion = (firstElement, commonDifference, hiddenElementIndex) => {
  let current = '';
  let question = '';
  for (let index = 0; index < progressionLength; index += 1) {
    if (index === hiddenElementIndex) {
      current = '..';
    } else {
      current = `${firstElement + commonDifference * index}`;
    }
    question = `${question} ${current}`;
  }
  return question.trim();
};

const getGameData = () => {
  const startingNum = getRandomNum(1, 5);
  const commonDifference = getRandomNum(2, 5);
  const hiddenElementIndex = getRandomNum(0, progressionLength - 1);
  const question = getQuestion(startingNum, commonDifference, hiddenElementIndex);
  const answer = startingNum + hiddenElementIndex * commonDifference;
  return [question, String(answer)];
};

export default () => runGameEngine(description, getGameData);
