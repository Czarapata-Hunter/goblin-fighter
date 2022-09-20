/* Imports */

/* Get DOM Elements */
const predator = document.getElementById('predator');
const playerHealth = document.getElementById('player-health');

const enemyInput = document.getElementById('enemy-input');
const enemyList = document.getElementById('enemy-list');
const removeEnemy = document.getElementById('remove-enemy');

const playerBoard = document.getElementById('player-board');
const damageBoard = document.getElementById('damage-board');

/* State */
let player = {
    health: 100,
    type: 'champion',
};
/* Events */

/* Display Functions */
function displayPlayer() {
    playerHealth.textContent = Math.max(0, player.health);
    if (player.health < 1) {
        predator.src = 'assets/predator_dead.png';
    } else {
        predator.src = `assets/${player.type}.png`;
    }
}
// (don't forget to call any display functions you want to run on page load!)
displayPlayer();
