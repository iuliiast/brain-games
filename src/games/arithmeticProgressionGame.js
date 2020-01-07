#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {
  getWelcome, startRoundLoop, nextRound, getRandomNum,
} from '..';

let amountOfRound = 3;
let amountOfCorrectAnswers = 0;

export default () => {
  getWelcome();
  console.log('What number is missing in the progression?');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  for (let i = startRoundLoop; i < amountOfRound; i += nextRound) {
    const startingNum = getRandomNum(1, 5);
    const commonDifference = getRandomNum(2, 5);
    const missingNum = getRandomNum(1, 10);
    const quantityOfProgression = 10;
    let correctAnswer;
    const arithmeticProgStr = () => {
      let currentResult = '';
      let result = '';
      let currentNum = startingNum;
      let startIndex = 1;
      while (startIndex <= quantityOfProgression) {
        currentNum += commonDifference;
        if (startIndex === missingNum) {
          currentResult = '.. ';
          correctAnswer = currentNum;
        } else {
          currentResult = `${String(currentNum)} `;
        }
        result += currentResult;
        startIndex += 1;
      }
      const strWithoutLastSymbol = result.substr(0, result.length - 1);
      return strWithoutLastSymbol;
    };
    arithmeticProgStr();
    console.log(`Question: ${arithmeticProgStr()}`);
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
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
    }
  }
};
