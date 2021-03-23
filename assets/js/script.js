// Consctructeur objet Hero.
function Hero(health, defence, attack, weakness, resistance) {
  this.health = health;
  this.defence = defence;
  this.attack = attack;
  this.weakness = weakness;
  this.resistance = resistance;
}

// Creation Classe Hero
var knight = new Hero(500, 30, 30, "thunder", "sword");

var mage = new Hero(300, 10, 40, "sword", "magic");

var archer = new Hero(400, 20, 35, "none", "none");

// Test affichage
window.addEventListener("load", function () {
  // Affichage Stat Knight 
  document.getElementById("knightHP").innerHTML = knight.health;
  document.getElementById("knightDefence").innerHTML = knight.defence;
  document.getElementById("knightAttack").innerHTML = knight.attack;
  document.getElementById("knightWeakness").innerHTML = knight.weakness;
  document.getElementById("knightResistance").innerHTML = knight.resistance;
  // Affichage Stat Mage 
  document.getElementById("mageHP").innerHTML = mage.health;
  document.getElementById("mageDefence").innerHTML = mage.defence;
  document.getElementById("mageAttack").innerHTML = mage.attack;
  document.getElementById("mageWeakness").innerHTML = mage.weakness;
  document.getElementById("mageResistance").innerHTML = mage.resistance;
  // Affichage Stat Archer
  document.getElementById("archerHP").innerHTML = archer.health;
  document.getElementById("archerDefence").innerHTML = archer.defence;
  document.getElementById("archerAttack").innerHTML = archer.attack;
  document.getElementById("archerWeakness").innerHTML = archer.weakness;
  document.getElementById("archerResistance").innerHTML = archer.resistance;
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
  }
}

function BaseAttackDamage() {
  attackDamage = knight.attack;
  if(Crit()) {
    attackDamage = attackDamage *2;
  }
  return attackDamage;
}

// Gros steak
function HeavyAttackDamage() {
  attackDamage = knight.attack * 2;
  if(Crit()) {
    attackDamage = attackDamage *2;
  }
  return attackDamage;
}

document.getElementById("baseAttack").addEventListener("click", function baseAttack() {
  damage = BaseAttackDamage();
  badGuy.health = badGuy.health - damage;
  document.getElementById("badGuyHealth").innerHTML = badGuy.health;
  return badGuy.health;
});

document.getElementById("heavyAttack").addEventListener("click", function heavyAttack() {
  damage = HeavyAttackDamage();
  badGuy.health = badGuy.health - damage;
  document.getElementById("badGuyHealth").innerHTML = badGuy.health;
  return badGuy.health;
});
