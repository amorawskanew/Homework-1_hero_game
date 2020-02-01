// Write your JS here
const hero = {
  name: "Anna",
  heroic: true,
  inventory: [],
  health: 10,
  weapon: {
    type: "sword",
    damage: 2
  }
};

const dagger = {
  type: "dagger",
  damage: 2
};

function rest(person) {
  if (person.health < 10) {
    person.health = 10;
  } else {
    alert(person.name + " has already recovered!");
  }
  displayStats();
  return person;
}

function pickUpItem(person, weapon) {
  person.inventory.push(weapon);
  displayStats();
}

function equipWeapon(person) {
  if (person.inventory.length > 0) {
    person.weapon = person.inventory[0];
    displayStats();
  }
}

function displayStats() {
  document.getElementById("name").innerHTML = hero.name;
  document.getElementById("health").innerHTML = hero.health;
  document.getElementById("weapon_type").innerHTML = hero.weapon.type;
  document.getElementById("weapon_damage").innerHTML = hero.weapon.damage;
}

//section 4
function openWindow() {
  hero.name = window.prompt("Enter hero's name", hero.name);
}

document.getElementById("enemy").addEventListener("click", deleteEnemy);
function deleteEnemy() {
  document.getElementById("enemy").remove();
}

document.getElementById("dagger").addEventListener("click", deleteDagger);
function deleteDagger() {
  document.getElementById("dagger").remove();
}

displayStats();
