/* Imports */
import { renderEnemy } from "./render-utilities.js";
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

let result = '';
let defeated = 0;

let enemies = [
    {
        name: 'Xenomorph',
        type: 'alien',
        health: 20,
    },
    {
        name: 'Dutch',
        type: 'human1',
        health: 15,
    },
    {
        name: 'Sniper',
        type: 'human2',
        health: 10,
    },
];

//monster types
const alien = {
    type: 'alien',
    health: 20,
};

const human1 = {
    type: 'human1',
    health: 15,
};

const human2 = {
    type: 'human2',
    health: 10,
};

const devil = {
    type: 'devil',
    health: 30;
};
/* Events */

/* Display Functions */
function displayResult() {
    damageBoard.textContent = result;
}

function displayPlayerBoard() {
    playerBoard.textContent = `You have defeated ${defeated} enemies.`;
}

function displayPlayer() {
    playerHealth.textContent = Math.max(0, player.health);
    if (player.health < 1) {
        predator.src = 'assets/predator_dead.png';
    } else {
        predator.src = `assets/${player.type}.png`;
    }
}

function displayEnemies() {
    enemyList.innerHTML = '';

    for(const enemy of enemies) {
        const enemyEl = renderEnemy(enemy);
        enemyList.append(enemyEl);

        goblinEl.addEventListener('click', () => {
            if (enemy.health < 1 {
                result = `Enemy is already dead, fight someone else.`;
                displayResult();
                return;
            }
        })
    }
}
// (don't forget to call any display functions you want to run on page load!)
displayPlayer();
displayResult();
displayPlayerBoard();
