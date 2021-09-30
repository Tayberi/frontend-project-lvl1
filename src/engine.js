import readlineSync from 'readline-sync';

export default async (game) => {
    console.log('Welcome to Brain Games!');
    const roundsCount = 3;

    const name = readlineSync.question('May I have your name? ');
    const { description, makeRound } = game;

    console.log(`Hello, ${name}!`);
    console.log(description);

    const iter = async (roundsLeft) => {
        if (roundsLeft === 0) {
            console.log(`Congratulations, ${name}!`);
            return;
        }

        const { correctAnswer, question } = makeRound();

        console.log(`Question: ${question}`);
        const playerAnswer = readlineSync.question('Your answer: ');

        if (playerAnswer !== correctAnswer) {
            console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
            console.log(`Let's try again, ${name}!`);

            return;
        }

        console.log('Correct!');
        iter(roundsLeft - 1);
    };

    iter(roundsCount);
};
