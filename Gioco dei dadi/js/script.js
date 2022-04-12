// Gioco dei dadi
// lancio del dado 
function getRandomDice() {
    return Math.floor(Math.random() * 6 +1);
}
// lancio del utente 
const userDice = getRandomDice();
// lancio del computer 
const cpuDice = getRandomDice();
// console.log ("user ",userDice);
// console.log("cpu ", cpuDice);
if (userDice === cpuDice) {
    alert (`Parità ${userDice}`);
}
else if (userDice > cpuDice) {
    alert (`Vince l'utente  ${userDice} ${cpuDice}`);
}
else {
    alert (`Vince il computer ${cpuDice} ${userDice}`);
}