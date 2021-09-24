// TODO: ask user R,P or S
//      - edge cases
//      - how to ask the user 
//     
function userPicks() {
    var userPicks = prompt(" Please, pick R, P or S to play. ");
    if ((userPicks === "R") || (userPicks === "P") || (userPicks === "S")) {
        //  continue calling next function
    } else {
        userPicks();
    }
    return userPicks;
}
// start();
// TODO: make the computer pick R,P or S
//      - randomize
function computerRandomPick() {
    Math.floor(Math.random() * 3);
    if (Math.floor(Math.random() * 3) == 0) {
        return "R"
    } else if (Math.floor(Math.random() * 3) == 1) {
        return "P"
    } else {
        return "S"
    }
}
console.log(computerRandomPick());
// TODO: compute results
//      - how to define a win, loss or tie
//      - 9 possible outputs
function whoWins(playerChoice, compChoice, wins, losses, tie) {
    if (playerChoice === compChoice) {
        alert("You Tied")
        tie++
    } else if ((playerChoice == "R" && compChoice == "P") || (playerChoice == "P" && compChoice == "S") || (playerChoice == "S" && compChoice == "R")) {
        alert("You Lose")
        losses++
    } else if ((playerChoice == "R" && compChoice == "S") || (playerChoice == "P" && compChoice == "R") || (playerChoice == "S" && compChoice == "P")) {
        alert("You Won")
        wins++
    }
    return wins, losses, tie
}
function startGame() {
    var wins = 0;
    var losses = 0;
    var tie = 0;
    var user = userPicks();
    wins, losses, tie = whoWins(user, computerRandomPick(), wins, losses, tie);
    console.log(wins, losses, tie)
    showScore(wins, losses, tie);
    if (window.confirm("Keep playing?")) {
        window.open(continuePlaying(wins, losses, tie ), "Thanks for Playing!");
      }
}
function continuePlaying(wins, losses, tie ) {
    var user = userPicks();
    wins, losses, tie = whoWins(user, computerRandomPick(), wins, losses, tie);
    console.log(wins, losses, tie)
    showScore(wins, losses, tie);
    if (window.confirm("Keep playing?")) {
        window.open(continuePlaying(wins, losses, tie ), "Thanks for Playing!");
      }
}
// TODO: show results
//      - User wins/loss/tie message
// TODO: show past matchs results
//                  wins    losses      ties
//       user       1       0           1   
//      computer    0       1           1    
function showScore(wins, losses, tie) {
    alert("Scores:\nWins: " + wins + "\n Losses: " + losses + "\n Ties: " + tie)
}
startGame();
// TODO: ask play again or not
//      -start from