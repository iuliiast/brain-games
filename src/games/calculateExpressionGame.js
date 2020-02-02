import gameEngine from '..';
import getRandomNum from '../utils';

const description = 'What is the result of the expression?';

const operatorList = ['+', '-', '*'];

const getGameData = () => {
  const randomOperator = operatorList[getRandomNum(0, operatorList.length - 1)];
  const firstRandomNum = getRandomNum(1, 10);
  const secondRandomNum = getRandomNum(1, 5);
  const question = `${firstRandomNum} ${randomOperator} ${secondRandomNum}`;
  let answer;
  if (randomOperator === '+') {
    answer = firstRandomNum + secondRandomNum;
  }
  if (randomOperator === '-') {
    answer = firstRandomNum - secondRandomNum;
  }
  if (randomOperator === '*') {
    answer = firstRandomNum * secondRandomNum;
  }
  return [String(question), String(answer)];
};

export default () => gameEngine(description, getGameData);
