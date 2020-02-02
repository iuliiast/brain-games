import gameEngine from '..';
import getRandomNum from '../utils';

const description = 'Find the greatest common divisor of given numbers.';

const findGcd = (num1, num2) => {
  let a = num1;
  let b = num2;
  let remainder;
  while ((a % b) > 0) {
    remainder = a % b;
    a = b;
    b = remainder;
  }
  return b;
};

const getGameData = () => {
  const firstRandomNum = getRandomNum(1, 100);
  const secondRandomNum = getRandomNum(1, 100);
  const question = `${firstRandomNum} ${secondRandomNum}`;
  const answer = findGcd(firstRandomNum, secondRandomNum);
  return [String(question), String(answer)];
};

export default () => gameEngine(description, getGameData);
