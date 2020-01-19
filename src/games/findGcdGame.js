import gameEngine from '..';
import getRandomNum from '../utils';

const rules = 'Find the greatest common divisor of given numbers.';

const getCore = () => {
  const firstRandomNum = getRandomNum(1, 100);
  const secondRandomNum = getRandomNum(1, 100);
  const question = `${firstRandomNum} ${secondRandomNum}`;
  // find GCD by Euclidean Algorithm
  let a = firstRandomNum;
  let b = secondRandomNum;
  let remainder;
  while ((a % b) > 0) {
    remainder = a % b;
    a = b;
    b = remainder;
  }
  const answerNum = b;
  const answer = String(answerNum);
  const core = [question, answer];
  return core;
};

export default () => gameEngine(rules, getCore);
