import gameEngine from '..';
import getRandomNum from '../utils';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getCore = () => {
  const question = getRandomNum(1, 100);
  let answer;
  if (isEven(question) === true) {
    answer = 'yes';
  } else {
    answer = 'no';
  }
  const core = [question, answer];
  return core;
};

export default () => gameEngine(rules, getCore);
