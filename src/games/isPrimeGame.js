import gameEngine from '..';
import getRandomNum from '../utils';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getCore = () => {
  const lessThanPrimeNum = 1;
  const twoIsPrimeNum = 2;
  const question = getRandomNum(1, 3600);
  let answer = 'yes';
  let counter;
  const counterLimit = question;
  if (question <= lessThanPrimeNum) {
    answer = 'no';
  }
  if (question === twoIsPrimeNum) {
    answer = 'yes';
  }
  counter = twoIsPrimeNum;
  while (counter !== counterLimit) {
    if (question % counter === 0) {
      answer = 'no';
    }
    counter += 1;
  }
  const core = [question, answer];
  return core;
};

export default () => gameEngine(rules, getCore);
