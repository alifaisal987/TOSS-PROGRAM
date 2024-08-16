document.getElementById("rollButton").addEventListener("click", function() {
    const dice = document.getElementById("dice");
    const roll = Math.floor(Math.random() * 6) + 1;
    dice.textContent = roll;
});
