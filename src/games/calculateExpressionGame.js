import gameEngine from '..';
import getRandomNum from '../utils';

const rules = 'What is the result of the expression?';

const getCore = () => {
  const getRandomOperator = getRandomNum(1, 3);
  let randomOperator = '';
  if (getRandomOperator === 1) {
    randomOperator = '+';
  }
  if (getRandomOperator === 2) {
    randomOperator = '-';
  }
  if (getRandomOperator === 1) {
    randomOperator = '*';
  }
  const firstRandomNum = getRandomNum(1, 10);
  const secondRandomNum = getRandomNum(1, 5);
  const question = `${firstRandomNum}${randomOperator}${secondRandomNum}`;
  let correctAnswer;
  if (randomOperator === '+') {
    correctAnswer = firstRandomNum + secondRandomNum;
  }
  if (randomOperator === '-') {
    correctAnswer = firstRandomNum - secondRandomNum;
  }
  if (randomOperator === '*') {
    correctAnswer = firstRandomNum * secondRandomNum;
  }
  const answer = String(correctAnswer);
  const core = [question, answer];
  return core;
};

export default () => gameEngine(rules, getCore);
