export function renderBad(bad) {
    const li = document.createElement('li');
    li.classList.add('bad', 'card');

    const health = document.createElement('span');
    health.classList.add('stat');
    health.textContent = bad.health;

    const image = document.createElement('img');
    image.alt = bad.type;
    if (bad.health < 1) {
        image.src = `assets/human-skull.png`;
    } else {
        image.src = `assets/Picture Icons/Enemy Icons/${bad.type}.png`;
    }

    const name = document.createElement('span');
    name.classList.add('name');
    name.textContent = bad.name;

    li.append(health, image, name);

    return li;
}
