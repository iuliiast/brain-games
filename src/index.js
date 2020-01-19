import readlineSync from 'readline-sync';

export default (rulesGame, getCore) => {
  const startRoundLoop = 0;
  const nextRound = 1;
  let amountOfRound = 3;
  let amountOfCorrectAnswers = 0;

  console.log('Welcome to the Brain Games!');
  console.log(`${rulesGame}`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  for (let i = startRoundLoop; i < amountOfRound; i += nextRound) {
    const [question, answer] = getCore();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === answer) {
      amountOfCorrectAnswers += 1;
      if (amountOfCorrectAnswers > 2) {
        amountOfRound = 3;
        console.log(`Correct!\nCongratulations, ${userName}!`);
      } if (amountOfCorrectAnswers <= 2) {
        console.log('Correct!');
      }
    } else {
      amountOfRound = 1;
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${userName}!`);
    }
  }
};
