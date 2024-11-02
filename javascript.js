
function computerchoiceRPS() {
    let stringchoice;
    let randomnumber = Math.ceil(Math.random()*(100 - 1 + 1)) % 3;
    console.log(randomnumber);
    if (randomnumber === 0) {stringchoice = "rock";console.log(stringchoice);}
    else if (randomnumber === 1) {stringchoice = "paper";console.log(stringchoice);}
    else if (randomnumber === 2) {stringchoice = "scissors";console.log(stringchoice);}
    else {console.log("somehting is wrong with the computerchoiceRPS function");}
    return stringchoice;
}

function gethumanchoice() {
    let validatevalue = false;
    let userinput;
        while (!validatevalue) {
            userinput = prompt("Let's play rock paper scissors! Please enter 'rock', 'paper', or 'scissors'");
            if (userinput === "rock" || userinput === "paper" || userinput === "scissors" ) {
                console.log(userinput + " in if statement");
                validatevalue = true;
            }
            else {
                alert("That entry wasn't 'rock', 'paper', or 'scissors'. Please try again");
                console.log(userinput + " still in while statement");
            }
        }
    console.log(userinput + " out of while statement");
    return userinput;

}

function oneRPSround(player1,player2,choice1, choice2) {
    if ((choice1 === "rock") && (choice2 === "scissors")) {console.log(player1 + " has won the round with "+ choice1 + "!");}
    else if ((choice1 === "rock") && (choice2 === "paper")) {console.log(player2 + " has won the round with "+choice2+"!");}
    else if ((choice1 === "rock") && (choice2 === "scissors")) {console.log(player1 + " has won the round with "+choice1+"!");}
    else if ((choice1 === "paper") && (choice2 === "rock")) {console.log(player1 + " has won the round with "+choice1+"!");}
    else if ((choice1 === "paper") && (choice2 === "scissors")) {console.log(player2 + " has won the round with "+choice2+"!");}
    else if ((choice1 === "scissors") && (choice2 === "rock")) {console.log(player2 + " has won the round with "+choice2+"!");}
    else if ((choice1 === "scissors") && (choice2 === "paper")) {console.log(player1 + " has won the round with "+choice1+"!");}
    else {console.log(player1 + " and "+ player2+ "have tied with "+choice1+"!");}
}
const computerchoice = computerchoiceRPS();
console.log("Computer choice is "+ computerchoice);
const humanchoice = gethumanchoice();
console.log(humanchoice);
const human = "human";
const computer = "computer";
oneRPSround(human,computer,humanchoice,computerchoice);



