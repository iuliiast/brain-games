import runGameEngine from '..';
import getRandomNum from '../utils';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getGameData = () => {
  const question = getRandomNum(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [String(question), answer];
};

export default () => runGameEngine(description, getGameData);
