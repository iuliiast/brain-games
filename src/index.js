#!/usr/bin/env node

import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};
export const isEven = () => {
  // Начало игры
  console.log('Welcome to the Brain Games!`n Answer "yes" if the number is even, otherwise answer "no".');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  // Появляется рандомное число
  const getRandomInt = (min, max) => {
    let result = 0;
    min = Math.ceil(min);
    max = Math.floor(max);
    result = Math.floor(Math.random() * (max - min)) + min;
    let correctAnswer = '';
    if (result % 2 === 0) {
      correctAnswer = 'yes';
    } else correctAnswer = 'no';
    console.log(`Question: ${result}`);
    const getYesOrNo = readlineSync.question('Your answer: ');
    if (getYesOrNo === correctAnswer) {
      console.log('Correct!');
    } else console.log(`'${getYesOrNo}' is wrong answer ;(. Correct answer was "no".\nLet's try again, ${name}!`);
  };
  return getRandomInt(1, 100);
};
