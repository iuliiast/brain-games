#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {
  getWelcome, startRoundLoop, nextRound, getRandomNum,
} from '..';

let amountOfRound = 3;
let amountOfCorrectAnswers = 0;

export default () => {
  getWelcome();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  const lessThanPrimeNum = 1;
  const twoIsPrimeNum = 2;
  for (let i = startRoundLoop; i < amountOfRound; i += nextRound) {
    const getNum = getRandomNum(1, 3600);
    const correctAnswer = (num) => {
      let answer = 'yes';
      let counter;
      const counterLimit = num;

      if (num <= lessThanPrimeNum) {
        answer = 'no';
      }
      if (num === twoIsPrimeNum) {
        answer = 'yes';
      }
      counter = twoIsPrimeNum;
      while (counter !== counterLimit) {
        if (num % counter === 0) {
          answer = 'no';
        }
        counter += 1;
      }
      return answer;
    };

    console.log(`Question: ${getNum}`);
    const isAnswer = readlineSync.question('Your answer: ');
    if (isAnswer === correctAnswer(getNum)) {
      amountOfCorrectAnswers += 1;
      if (amountOfCorrectAnswers > 2) {
        amountOfRound = 3;
        console.log(`Correct!\nCongratulations, ${name}!`);
      } if (amountOfCorrectAnswers <= 2) {
        console.log('Correct!');
      }
    } else {
      amountOfRound = 1;
      console.log(`'${isAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer(getNum)}'.\nLet's try again, ${name}!`);
    }
  }
};
