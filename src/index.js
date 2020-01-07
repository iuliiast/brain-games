#!/usr/bin/env node

import readlineSync from 'readline-sync';

export const getWelcome = () => console.log('Welcome to the Brain Games!');
export const startRoundLoop = 0;
export const nextRound = 1;
export const getRandomNum = (min, max) => {
  const minNum = Math.ceil(min);
  const maxNum = Math.floor(max);
  const result = Math.floor(Math.random() * (maxNum - minNum)) + minNum;
  return result;
};
export const userName = () => {
  getWelcome();
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};
