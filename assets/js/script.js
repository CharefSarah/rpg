////////////////////////////////////////////////////////////////
// CHRONO
////////////////////////////////////////////////////////////////

var startTime = 0
var start = 0
var end = 0
var diff = 0
var timerID = 0

function chrono() {
  end = new Date()
  diff = end - start
  diff = new Date(diff)
  var msec = diff.getMilliseconds()
  var sec = diff.getSeconds()
  var min = diff.getMinutes()
  var hr = diff.getHours() - 1
  if (min < 10) {
    min = "0" + min
  }
  if (sec < 10) {
    sec = "0" + sec
  }
  if (msec < 10) {
    msec = "00" + msec
  } else if (msec < 100) {
    msec = "0" + msec
  }
  document.getElementById("chronotime").value = hr + ":" + min + ":" + sec + ":" + msec
  timerID = setTimeout("chrono()", 10)
}

function chronoStart() {
  document.chronoForm.startstop.value = "stop!"
  document.chronoForm.startstop.onclick = chronoStop
  document.chronoForm.reset.onclick = chronoReset
  start = new Date()
  chrono()
}

function chronoContinue() {
  document.chronoForm.startstop.value = "stop!"
  document.chronoForm.startstop.onclick = chronoStop
  document.chronoForm.reset.onclick = chronoReset
  start = new Date() - diff
  start = new Date(start)
  chrono()
}

function chronoReset() {
  document.getElementById("chronotime").value = "0:00:00:000"
  start = new Date()
}

function chronoStopReset() {
  document.getElementById("chronotime").value = "0:00:00:000"
  document.chronoForm.startstop.onclick = chronoStart
}

function chronoStop() {
  document.chronoForm.startstop.value = "start!"
  document.chronoForm.startstop.onclick = chronoContinue
  document.chronoForm.reset.onclick = chronoStopReset
  clearTimeout(timerID)
}



// Consctructeur objet Hero.
function Hero(name, health, maxHealth, defence, attack, weakness, resistance, lightAttack, bigAttack) {
  this.name = name;
  this.health = health;
  this.maxHealth = maxHealth;
  this.defence = defence;
  this.attack = attack;
  this.weakness = weakness;
  this.resistance = resistance;
  this.lightAttack = lightAttack;
  this.bigAttack = bigAttack;
}
// vie 
var life = 3;

function background() {
  if (round == 5) {
    document.body.style.backgroundImage = "url(assets/img/7.jpg)"; //changing bg image
  } else if (round == 10) {
    document.body.style.backgroundImage = "url(assets/img/8.jpg)";
  } else if (round == 15) {
    document.body.style.backgroundImage = "url(assets/img/10.jpg)";
  } else if (round == 20) {
    document.body.style.backgroundImage = "url(assets/img/2.png)";
  } else if (round == 25) {
    document.body.style.backgroundImage = "url(assets/img/5.jpg)";
  } else if (round == 30) {
    document.body.style.backgroundImage = "url(assets/img/12.jpg)";
  }
}

// window.addEventListener("load", function () {
//   document.getElementById("lifeTotal").innerHTML = life;
// });



function ModalDeathHero() {
  document.getElementById("modalDeathHero").style.display = "block";
}
document.getElementById("dismissDeathHero").addEventListener("click", function () {
  document.getElementById("modalDeathHero").style.display = "none";
});

function ModalDeathEnnemy() {
  document.getElementById("modalDeathEnnemy").style.display = "block";
}
document.getElementById("dismissDeathEnnemy").addEventListener("click", function () {
  document.getElementById("modalDeathEnnemy").style.display = "none";
});


// // Test pour stopper le chrono.
// document.getElementById("potion").addEventListener("click", function () {
// chronoStop();
// });



function ModalVictory() {
  chronoStop();
  console.log(chronotime.value);
  document.getElementById("modalVictory").style.display = "block";
  document.getElementById("victoryTime").innerHTML = chronotime.value;
  document.getElementById("chronoForm").style.display = "none";


}
document.getElementById("dismissModalVictory").addEventListener("click", function () {
  document.getElementById("modalVictory").style.display = "none";
  document.location.reload();
})


// nombres d'attaques

var basicAttack = 30;
document.getElementById("basicAttack").innerHTML = basicAttack;

function LostBasicAttack() {
  basicAttack = basicAttack - 1;
  document.getElementById("basicAttack").innerHTML = basicAttack;
  if (basicAttack == 0) {
    document.getElementById("baseAttack").disabled = "true";
  }
}
// Nombre de grosses attaques
var bigAttack = 10;
document.getElementById("bigAttack").innerHTML = bigAttack;

function LostBigAttack() {
  bigAttack = bigAttack - 1;
  document.getElementById("bigAttack").innerHTML = bigAttack;
  if (bigAttack == 0) {
    document.getElementById("heavyAttack").disabled = "true";
  }
}

// Game over plus refresh de la page
function winner() {
  if (round == 31) {
    ModalVictory();
  }
}
// Game over plus refresh de la page
function EndGame() {
  if (life == 0) {
    confirm("GAME OVER!");
    document.location.reload();
  }
}


// mort du héro
function DeathHero() {
  if (hero.health <= 0) {
    ModalDeathHero();
  }
}

function displayLife() {
  for (let i = 0; i < 9; i++) {
    var heart = "heart" + i;
    document.getElementById(heart).style.display = "none";
  }
  for (let i = 0; i < life; i++) {
    var heart = "heart" + i;
    document.getElementById(heart).style.display = "inline";
    console.log(heart);

  }
}



function addLife() {
  if (round == 5 || round == 10 || round == 15 || round == 20 || round == 25 || round == 30) {
    life = life + 1;
    displayLife();

    document.getElementById("lifeTotal").innerHTML = life;
  }
}

// Compteur de vie
function LostLife() {
  if (hero.health <= 0) {
    life = life - 1;
    displayLife();
    hero.health = hero.maxHealth;
    document.getElementById("lifeTotal").innerHTML = life;
  }
}

let health = document.getElementById("healthBar");

let badGuyHealth = document.getElementById("badguyHealthBar");


// fait diisparaitre le choix du héro une fois qu'il a était choisi
function ButtonDisappear() {
  document.getElementById("knight").style.display = "none";
  document.getElementById("mage").style.display = "none";
  document.getElementById("rogue").style.display = "none";
}
// affiche les valeurs du héro
function SetHeroValue() {
  document.getElementById("heroName").innerHTML = hero.name;
  document.getElementById("basicAttackName").innerHTML = hero.lightAttack;
  document.getElementById("bigAttackName").innerHTML = hero.bigAttack;
  document.getElementById("heroHealth").innerHTML = hero.health;
  health.setAttribute("value", hero.health);
  health.setAttribute("max", hero.maxHealth);
  document.getElementById("heroDefence").innerHTML = hero.defence;
  document.getElementById("heroAttack").innerHTML = hero.attack;
  console.log(hero);
}

// Selection de tout les boutons de choix de classes
var classSelectArray = document.querySelectorAll('.classSelect');
// choix de classe selon le bouton : 
var hero = classSelectArray.forEach(element => {
  element.addEventListener('click', function CreateHero() {
    if (element.id == "knight") {
      hero = new Hero("Chevalier", 500, 500, 30, 30, "thunder", "sword", "Coup d'épée", "Coup de bouclier");
      SetHeroValue();
      ButtonDisappear();
      displayLife();
      chronoStart();
      return hero;


    } else if (element.id == "mage") {
      hero = new Hero("Mage", 300, 300, 10, 40, "sword", "magic", "Eclair", "Mur de feu");
      document.getElementById("heroHealth").innerHTML = hero.health;
      SetHeroValue();
      ButtonDisappear();
      displayLife();
      chronoStart();
      return hero;


    } else if (element.id == "rogue") {
      hero = new Hero("Voleuse", 400, 400, 20, 35, "none", "none", "Attaque sournoise", "Assassinat");
      document.getElementById("heroHealth").innerHTML = hero.health;
      SetHeroValue();
      ButtonDisappear();
      displayLife();
      chronoStart();
      return hero;

    }
  });
});




//Constructeur objet Méchant.
function BadGuy(name, health, maxHealth, defence, attack, weakness, resistance) {
  this.name = name;
  this.health = health;
  this.maxHealth = maxHealth;
  this.defence = defence;
  this.attack = attack;
  this.weakness = weakness;
  this.resistance = resistance;
}

// Compteur de round
var round = 1;
document.getElementById("round").innerHTML = round;

//Creation du méchant selon le nombre de round: 
function CreateBadGuy() {
  if (round == 30) {
    var badGuy = new BadGuy("Chevalier Noir", 1000, 1000, 30, 40, "none", "sword");
  } else if (round == 20) {
    var badGuy = new BadGuy("Araignée Géante Cracheuse De Feu", 750, 750, 30, 50, "none", "none")
  } else if (round == 10) {
    var badGuy = new BadGuy("Roi des orcs", 630, 630, 30, 32, "none", "none")
  } else {
    var badGuy = new BadGuy("Orc", 300, 300, 10, 30, "all", "none");
  }
  return badGuy
}
// affiche les valeurs du méchant
function DisplayBadGuy() {
  document.getElementById("badGuyName").innerHTML = badGuy.name;
  document.getElementById("badGuyHealth").innerHTML = badGuy.health;
  badGuyHealth.value = badGuy.health;
  badGuyHealth.setAttribute("value", badGuy.health);
  badGuyHealth.setAttribute("max", badGuy.health);
  document.getElementById("badGuyDefence").innerHTML = badGuy.defence;
  document.getElementById("badGuyAttack").innerHTML = badGuy.attack;
}

// création du méchant
window.addEventListener("load", function () {
  badGuy = CreateBadGuy();
  DisplayBadGuy();
});


// mort du méchant
function DeathEnemy() {
  if (badGuy.health <= 0) {
    ModalDeathEnnemy();
    round++;
    document.getElementById("round").innerHTML = round;
    badGuy = CreateBadGuy();
    badGuy.health = badGuy.maxHealth
    DisplayBadGuy();
    addLife();
    addPotion();
    basicAttack = 30;
    document.getElementById("basicAttack").innerHTML = basicAttack;
    document.getElementById("baseAttack").disabled = false;
    bigAttack = 10;
    document.getElementById("bigAttack").innerHTML = bigAttack;
    document.getElementById("heavyAttack").disabled = false;

  }
}

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
    ennemyDamage = 0;
    console.log("Esquivé");
  } else {
    ennemyDamage = badGuy.attack;
  }
}

//Fonction pour faire bouger les jauges
function MoveAllyHealthBar() {
  health.setAttribute("value", hero.health);
  var percentHealth = (hero.health / hero.maxHealth) * 100;
  console.log(percentHealth);
  document.getElementById("bar").style.width = percentHealth + "%";
}

function MoveEnnemyHealthBar() {
  badGuyHealth.setAttribute("value", badGuy.health);
  var percentHealth = (badGuy.health / badGuy.maxHealth) * 100;
  console.log(percentHealth);
  if (badGuy.health <= 0) {
    percentHealth = 100;
  }
  document.getElementById("badguyBar").style.width = percentHealth + "%";
}

document.getElementById("baseAttack").addEventListener("click", function baseAttack() {
  damage = BaseAttackDamage();
  badGuy.health = badGuy.health - damage;
  document.getElementById("badGuyHealth").innerHTML = badGuy.health;
  Dodge();
  hero.health = hero.health - ennemyDamage;
  document.getElementById("heroHealth").innerHTML = hero.health;
  LostBasicAttack();
  // J'appelle la fonction pour faire bouger les jauges par rapport aux changement dans les Points de vie de tout le monde
  MoveEnnemyHealthBar();
  setTimeout(MoveAllyHealthBar, 800);
  DeathHero();
  LostLife();
  EndGame();
  DeathEnemy();
  winner();
  background();


});


document.getElementById("heavyAttack").addEventListener("click", function heavyAttack() {
  damage = HeavyAttackDamage();
  badGuy.health = badGuy.health - damage;
  document.getElementById("badGuyHealth").innerHTML = badGuy.health;
  Dodge();
  hero.health = hero.health - ennemyDamage;
  document.getElementById("heroHealth").innerHTML = hero.health;
  LostBigAttack();
  MoveEnnemyHealthBar();
  setTimeout(MoveAllyHealthBar, 800);
  EndGame();
  LostLife();
  DeathHero();
  DeathEnemy();
  winner();
  background();


});

// contre attaque
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
    if (hero.health < hero.maxHealth) {
      hero.health = hero.health + 50;
      stockPotion--;
      document.getElementById("heroHealth").innerHTML = hero.health;
      document.getElementById("stockPotion").innerHTML = stockPotion;
      MoveAllyHealthBar();
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
// ajoute ube vie tout les  5 niveaux