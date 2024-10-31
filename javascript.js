function computerchoiceRPS() {
    let randomnumber = Math.ceil(Math.random()*(100 - 1 + 1));
    console.log(randomnumber);
    let numericalchoice = randomnumber % 3;
    console.log(numericalchoice);
    const choice = "placeholder"
    return choice;
}

/*
let userinput = prompt("Let's play rock paper scissors! Please enter 'rock', 'paper', or 'scissors'");
console.log(userinput)
    while (userinput !=rock || userinput !=scissors || userinput !=paper) {
        let userinput = prompt("That entry wasn't 'rock', 'paper', or 'scissors'. Please try again");
    }
*/
const choice = computerchoiceRPS();
console.log(choice);

