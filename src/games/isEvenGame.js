#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {
  getWelcome, startRoundLoop, nextRound, getRandomNum,
} from '..';

let amountOfRound = 3;
let amountOfCorrectAnswers = 0;

export default () => {
  // Начало игры
  getWelcome();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  const evenNum = 2;
  // Появляется рандомное число
  let correctAnswer = '';
  for (let i = startRoundLoop; i < amountOfRound; i += nextRound) {
    const randomNum = getRandomNum(1, 100);
    if (randomNum % evenNum === 0) {
      correctAnswer = 'yes';
    } else correctAnswer = 'no';
    console.log(`Question: ${randomNum}`);
    const isAnswer = readlineSync.question('Your answer: ');
    if (isAnswer === correctAnswer) {
      amountOfCorrectAnswers += 1;
      if (amountOfCorrectAnswers > 2) {
        amountOfRound = 3;
        console.log(`Correct!\nCongratulations, ${name}!`);
      } if (amountOfCorrectAnswers <= 2) {
        console.log('Correct!');
      }
    } else {
      amountOfRound = 1;
      console.log(`'${isAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
    }
  }
};
