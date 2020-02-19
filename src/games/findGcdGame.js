import runGameEngine from '..';
import getRandomNum from '../utils';

const description = 'Find the greatest common divisor of given numbers.';

const findGcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return findGcd(num2, num1 % num2);
};

const getGameData = () => {
  const firstRandomNum = getRandomNum(1, 100);
  const secondRandomNum = getRandomNum(1, 100);
  const question = `${firstRandomNum} ${secondRandomNum}`;
  const answer = findGcd(firstRandomNum, secondRandomNum);
  return [question, String(answer)];
};

export default () => runGameEngine(description, getGameData);
