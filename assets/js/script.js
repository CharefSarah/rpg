// Consctructeur objet Hero.
function Hero(health, maxHealth, defence, attack, weakness, resistance) {
  this.health = health;
  this.maxHealth = maxHealth;
  this.defence = defence;
  this.attack = attack;
  this.weakness = weakness;
  this.resistance = resistance;
}

let health = document.getElementById("healthBar");
let maxHealth = document.getElementById("healthBar").max;

// Selection de tout les boutons de choix de classes
var classSelectArray = document.querySelectorAll('.classSelect');
// choix de classe selon le bouton : 
var hero = classSelectArray.forEach(element => {
  element.addEventListener('click', function CreateHero() {
    if (element.id == "knight") {

      hero = new Hero(500, 500, 30, 30, "thunder", "sword");
      document.getElementById("heroHealth").innerHTML = hero.health;
      health.value = hero.health;
      health.max = hero.maxHealth;
      document.getElementById("heroDefence").innerHTML = hero.defence;
      document.getElementById("heroAttack").innerHTML = hero.attack;
      document.getElementById("heroWeakness").innerHTML = hero.weakness;
      document.getElementById("heroResistance").innerHTML = hero.resistance;
      console.log(hero);
      return hero;

    } else if (element.id == "mage") {

      hero = new Hero(300, 300, 10, 40, "sword", "magic");
      document.getElementById("heroHealth").innerHTML = hero.health;
      health.value = hero.health;
      health.max = hero.maxHealth;
      document.getElementById("heroDefence").innerHTML = hero.defence;
      document.getElementById("heroAttack").innerHTML = hero.attack;
      document.getElementById("heroWeakness").innerHTML = hero.weakness;
      document.getElementById("heroResistance").innerHTML = hero.resistance;
      console.log(hero);
      return hero;

    } else if (element.id == "archer") {

      hero = new Hero(400, 400, 20, 35, "none", "none");
      document.getElementById("heroHealth").innerHTML = hero.health;
      health.value = hero.health;
      health.max = hero.maxHealth;
      document.getElementById("heroDefence").innerHTML = hero.defence;
      document.getElementById("heroAttack").innerHTML = hero.attack;
      document.getElementById("heroWeakness").innerHTML = hero.weakness;
      document.getElementById("heroResistance").innerHTML = hero.resistance;
      console.log(hero);
      return hero;
    }
  });
});

//Constructeur objet Méchant.
function BadGuy(name, health, defence, attack, weakness, resistance) {
  this.name = name;
  this.health = health;
  this.defence = defence;
  this.attack = attack;
  this.weakness = weakness;
  this.resistance = resistance;
}

// Compteur de round
round = 1;

//Creation du méchant selon le nombre de round: 
function CreateBadGuy() {
  if (round == 10 || round == 20 || round == 30) {
    var badGuy = new BadGuy("Dark Knight", 1000, 30, 40, "none", "sword");
  } else {
    var badGuy = new BadGuy("Orc", 300, 10, 15, "all", "none");
  }
  return badGuy
}

window.addEventListener("load", function () {
  badGuy = CreateBadGuy();
  document.getElementById("badGuyName").innerHTML = badGuy.name;
  document.getElementById("badGuyHealth").innerHTML = badGuy.health;
  document.getElementById("badGuyDefence").innerHTML = badGuy.defence;
  document.getElementById("badGuyAttack").innerHTML = badGuy.attack;
  document.getElementById("badGuyWeakness").innerHTML = badGuy.weakness;
  document.getElementById("badGuyResistance").innerHTML = badGuy.resistance;
});

// Fonction Coup critique
function Crit() {
  // Renvoi un nombre entre 1 et 100
  crit = Math.floor(Math.random() * 100) + 1;
  if (crit <= 10) {
    return true;
  } else {
    return false;
  }
}
//Petit Steak
function BaseAttackDamage() {
  attackDamage = hero.attack;
  if (Crit()) {
    attackDamage = attackDamage * 2;
  }
  return attackDamage;
}

//Gros Steak
function HeavyAttackDamage() {
  attackDamage = hero.attack * 2;
  if (Crit()) {
    attackDamage = attackDamage * 2;
  }
  return attackDamage;
}

//Chance d'esquive, 10%
function Dodge() {
  dodge = Math.floor(Math.random() * 100) + 1;
  if (dodge <= 10) {
    return true;
  } else {
    return false;
  }
}

document.getElementById("baseAttack").addEventListener("click", function baseAttack() {
  damage = BaseAttackDamage();
  badGuy.health = badGuy.health - damage;
  document.getElementById("badGuyHealth").innerHTML = badGuy.health;
  if (Dodge()) {
    ennemyDamage = 0;
  } else {
    ennemyDamage = badGuy.attack;
  }
  hero.health = hero.health - ennemyDamage;
  document.getElementById("heroHealth").innerHTML = hero.health;
  health.value = hero.health;
});



document.getElementById("heavyAttack").addEventListener("click", function heavyAttack() {
  damage = HeavyAttackDamage();
  badGuy.health = badGuy.health - damage;
  document.getElementById("badGuyHealth").innerHTML = badGuy.health;
  if (Dodge()) {
    ennemyDamage = 0;
  } else {
    ennemyDamage = badGuy.attack;
  }
  hero.health = hero.health - ennemyDamage;
  document.getElementById("heroHealth").innerHTML = hero.health;
  health.value = hero.health;
});



function CunterAttack() {

  if (health = health - attackDamage) {
    attack = hero.health - attack;
    elseif(health <= 0); {
      // Enemy is dead
    }
  }
};
// Nombre de potion, 50HP/Potion
stockPotion = 3; 

// Initialisation du nombre de potion au chargement
window.addEventListener("load", function () {
  document.getElementById("stockPotion").innerHTML = stockPotion;
});

// Function pour utiliser des potions tant qu'il en reste
document.getElementById("potion").addEventListener("click", function () {
  if (stockPotion > 0) {
    if(hero.health<hero.maxHealth) {
      hero.health = hero.health + 50;
      stockPotion--;
      document.getElementById("heroHealth").innerHTML = hero.health;
      document.getElementById("stockPotion").innerHTML = stockPotion;
    } else {
      document.getElementById("potionAlert").innerHTML = "Vous n'avez pas besoin de potion !"
    }

  } else {
    document.getElementById("potionAlert").innerHTML = "Vous n'avez plus assez de potion";
  }
});

// Ajout d'un nombre de potion entre 1 et 3, faudra juste lier ca a la victoire plutot qu'a un bouton mais ca fonctionne.
function addPotion() {
  potionToAdd = Math.floor(Math.random() * 2) + 1; //chiffre en 1 et 3
  stockPotion = stockPotion + potionToAdd;
  document.getElementById("stockPotion").innerHTML = stockPotion;
  return stockPotion;
}

