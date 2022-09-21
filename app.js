/* Imports */
import { renderBad } from './render-utilities.js';
import { getRandomItem } from './utils.js';
/* Get DOM Elements */
const predator = document.getElementById('predator');
const predatorHealth = document.getElementById('predator-health');

const badInput = document.getElementById('bad-input');
const badList = document.getElementById('bad-list');
const removeBad = document.getElementById('remove-bad');

const playerBoard = document.getElementById('player-board');
const damageBoard = document.getElementById('damage-board');

/* State */
let player = {
    health: 100,
    type: 'champion',
};

let result = '';
let defeated = 0;

let bads = [
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
    health: 30,
};

const playerAttacks = [0, 5, 5, 10, 10, 10, 15, 15, 15, 15, 20, 20, 25];
const monsterAttacks = [0, 0, 5, 5, 5, 5, 10, 10, 10, 15, 15];
const monsterTypes = [human2, human2, human2, human2, human1, human1, human1, alien, alien, devil];
/* Events */

badInput.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(badInput);
    const monsterType = getRandomItem(monsterTypes);

    const bad = {
        name: formData.get('name'),
        type: monsterType.type,
        health: monsterType.health,
    };
    bads.push(bad);

    result = `${bad.name} the ${bad.type} has joined the carnage`;

    displayBads();
    displayResult();

    badInput.reset();
});

removeBad.addEventListener('click', () => {
    const alive = [];

    for (const bad of bads) {
        if (bad.health > 0) {
            alive.push(bad);
        }
    }
    bads = alive;
    displayBads();
});
/* Display Functions */
function displayResult() {
    damageBoard.textContent = result;
}

function displayPlayerBoard() {
    playerBoard.textContent = `You have defeated ${defeated} enemies.`;
}

function displayPlayer() {
    predatorHealth.textContent = Math.max(0, player.health);
    if (player.health < 1) {
        predator.src = 'assets/predator_dead.png';
    } else {
        predator.src = `assets/${player.type}.png`;
    }
}

function displayBads() {
    badList.innerHTML = '';

    for (const bad of bads) {
        const badEl = renderBad(bad);
        badList.append(badEl);

        badEl.addEventListener('click', () => {
            if (bad.health < 1) {
                result = `Enemy is already dead, fight someone else.`;
                displayResult();
                return;
            }

            const playerAttack = getRandomItem(playerAttacks);
            const monsterAttack = getRandomItem(monsterAttacks);

            player.health = Math.max(0, player.health - monsterAttack);
            bad.health = Math.max(0, bad.health - playerAttack);

            result = '';
            if (playerAttack === 0) {
                result += 'Your blades go whizzing by. ';
            } else {
                result += `You slice ${bad.name} and did ${playerAttack} in damage. `;
            }

            if (monsterAttack === 0) {
                result += `${bad.name} missed you.`;
            } else {
                result += `${bad.name} hit you and did ${monsterAttack} in damage.`;
            }

            if (bad.health < 1) {
                defeated++;
                displayPlayerBoard();
            }

            displayResult();
            displayPlayer();
            displayBads();
        });
    }
}
// (don't forget to call any display functions you want to run on page load!)
displayPlayer();
displayBads();
