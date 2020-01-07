#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {
  getWelcome, startRoundLoop, nextRound, getRandomNum,
} from '..';

let amountOfRound = 3;
let amountOfCorrectAnswers = 0;

export default () => {
  getWelcome();
  console.log('What is the result of the expression?');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  for (let i = startRoundLoop; i < amountOfRound; i += nextRound) {
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
    console.log(`Question: ${firstRandomNum}${randomOperator}${secondRandomNum}`);
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
    const isAnswer = readlineSync.question('Your answer: ');
    const answerIsNum = Number(isAnswer);
    if (answerIsNum === correctAnswer) {
      amountOfCorrectAnswers += 1;
      if (amountOfCorrectAnswers > 2) {
        amountOfRound = 3;
        console.log(`Correct!\nCongratulations, ${name}!`);
      } if (amountOfCorrectAnswers < 2) {
        console.log('Correct!');
      }
    } else {
      amountOfRound = 1;
      console.log(`'${isAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
    }
  }
};
