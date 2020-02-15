import runGame from '..';
import getRandomNum from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getGameData = () => {
  const question = getRandomNum(1, 3600);
  const answer = (isPrime(question) ? 'yes' : 'no');
  return [String(question), answer];
};

export default () => runGame(description, getGameData);
