export function renderEnemy(enemy) {
    const li = document.createElement('li');
    li.classList.add('enemy', 'card');

    const health = document.createElement('span');
    health.classList.add('stat');
    health.textContent = enemy.health;

    const image = document.createElement('img');
    image.alt = enemy.type;
    if (enemy.health < 1) {
        image.src = `assets/human-skull.png`;
    } else {
        image.src = `assets/Picture Icons/Enemy Icons/${enemy.type}.png`;
    }

    const name = document.createElement('span');
    name.classList.add('name');
    name.textContent = goblin.name;

    li.append(health, image, name);

    return li;
}
