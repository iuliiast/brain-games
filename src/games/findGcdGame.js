#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {
  getWelcome, startRoundLoop, nextRound, getRandomNum,
} from '..';

let amountOfRound = 3;
let amountOfCorrectAnswers = 0;

export default () => {
  getWelcome();
  console.log('Find the greatest common divisor of given numbers.');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  for (let i = startRoundLoop; i < amountOfRound; i += nextRound) {
    const firstRandomNum = getRandomNum(1, 100);
    const secondRandomNum = getRandomNum(1, 100);
    console.log(`Question: ${firstRandomNum} ${secondRandomNum}`);
    // find GCD by Euclidean Algorithm
    let a = firstRandomNum;
    let b = secondRandomNum;
    let remainder;
    while ((a % b) > 0) {
      remainder = a % b;
      a = b;
      b = remainder;
    }
    const correctAnswer = b;

    const userAnswer = readlineSync.question('Your answer: ');
    const answerIsNum = Number(userAnswer);
    if (answerIsNum === correctAnswer) {
      amountOfCorrectAnswers += 1;
      if (amountOfCorrectAnswers > 2) {
        amountOfRound = 3;
        console.log(`Correct!\nCongratulations, ${name}!`);
      } if (amountOfCorrectAnswers <= 2) {
        console.log('Correct!');
      }
    } else {
      amountOfRound = 1;
      console.log(`'${answerIsNum}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
    }
  }
};
