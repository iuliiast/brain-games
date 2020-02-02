import gameEngine from '..';
import getRandomNum from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  let counter = 2;
  while (counter !== num) {
    if (num % counter === 0) {
      return false;
    }
    counter += 1;
  }
  return true;
};

const getGameData = () => {
  const question = getRandomNum(1, 3600);
  const answer = (isPrime(question) ? 'yes' : 'no');
  return [String(question), answer];
};

export default () => gameEngine(description, getGameData);
