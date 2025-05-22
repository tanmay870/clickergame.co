let points = 0;
let pointsPerClick = 1;
let upgradeCost = 10;

const pointsDisplay = document.getElementById('points-display');
const clickButton = document.getElementById('click-button');
const upgradeButton = document.getElementById('upgrade-button');

function updateDisplay() {
    pointsDisplay.textContent = `Points: ${points}`;
    upgradeButton.textContent = `Upgrade (Cost: ${upgradeCost})`;

    if (points >= upgradeCost) {
        upgradeButton.disabled = false;
    } else {
        upgradeButton.disabled = true;
    }
}

function handleClick() {
    points += pointsPerClick;
    updateDisplay();
}

function buyUpgrade() {
    if (points >= upgradeCost) {
        points -= upgradeCost;
        pointsPerClick += 1;
        upgradeCost = Math.floor(upgradeCost * 1.5); // Use Math.floor for whole numbers
        updateDisplay();
        alert("Upgrade Successful! You now earn more points per click!");
    } else {
        alert("Not enough points to buy this upgrade!");
    }
}

// Event Listeners
clickButton.addEventListener('click', handleClick);
upgradeButton.addEventListener('click', buyUpgrade);

// Initial display update
updateDisplay();