// Consctructeur objet Hero.
function Hero(health, defence, attack, weakness, resistance) {
  this.health = health;
  this.defence = defence;
  this.attack = attack;
  this.weakness = weakness;
  this.resistance = resistance;
}

function CreateHero() {
  pickedClass = document.getElementById("heroButton").value;
  window.alert(pickedClass);
  if(pickedClass="knight") {
    var hero = new Hero(500, 30, 30, "thunder", "sword");
  } else if(pickedClass="mage") {
    var hero = new Hero(300, 10, 40, "sword", "magic");
  } else if(pickedClass="archer") {
    var hero =  new Hero(400, 20, 35, "none", "none");
  }
  return hero;
}

document.getElementById("heroButton").addEventListener("click", function () {
  hero = CreateHero();
  document.getElementById("heroHealth").innerHTML = hero.health;
  document.getElementById("heroDefence").innerHTML = hero.defence;
  document.getElementById("heroAttack").innerHTML = hero.attack;
  document.getElementById("heroWeakness").innerHTML = hero.weakness;
  document.getElementById("heroResistance").innerHTML = hero.resistance;

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

// compteur de round
round = 0;

//Creation du méchant : ( non vraiment, meilleure commentaire ever )
function CreateBadGuy() {
  if (round == 10) {
    var badGuy = new BadGuy("Dark Knight", 1000, 30, 40, "none", "sword");
  } else {
    var badGuy = new BadGuy("Orc", 300, 10, 25, "all", "none");
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

function BaseAttackDamage() {
  attackDamage = hero.attack;
  if(Crit()) {
    attackDamage = attackDamage *2;
  }
  return attackDamage;
}

// Gros steak
function HeavyAttackDamage() {
  attackDamage = hero.attack * 2;
  if(Crit()) {
    attackDamage = attackDamage *2;
  }
  return attackDamage;
}

//Esquive, 1/10 chance d'esquiver
function Dodge() {
  dodge = Math.floor(Math.random() * 100) + 1;
  if(dodge<=10) {
    return true;
  } else {
    return false;
  }
 // if(Dodge())
}

document.getElementById("baseAttack").addEventListener("click", function baseAttack() {
  damage = BaseAttackDamage();
  badGuy.health = badGuy.health - damage;
  document.getElementById("badGuyHealth").innerHTML = badGuy.health;
  knight.health = knight.health - damage;
  document.getElementById("knightHP").innerHTML = knight.health;
  return badGuy.health, knight.health;
});

document.getElementById("heavyAttack").addEventListener("click", function heavyAttack() {
  damage = HeavyAttackDamage();
  badGuy.health = badGuy.health - damage;
  document.getElementById("badGuyHealth").innerHTML = badGuy.health;
  knight.health = knight.health - damage;
  document.getElementById("knightHP").innerHTML = knight.health;
  return badGuy.health, knight.health;
});

function CunterAttack() {

  if (health = health - attackDamage) {
    attack = knight.health - attack;
    elseif(health <= 0); {
      // Enemy is dead
    }
  }
}

