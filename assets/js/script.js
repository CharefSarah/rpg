// masque le body temps que le héro n'est pas selectionnée
window.onload = function () {
  d1.style.display = "none";
  d2.style.display = "none";
}

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

// Cache le reste du body temps qu'un héro n'a pas était selectioné.

function togg() {
  if (getComputedStyle(d2).display != "none") {
    d2.style.display = "none";
  } else {
    d2.style.display = "block";
  }
};

function togg1() {
  if (getComputedStyle(d1).display != "none") {
    d1.style.display = "none";
  } else {
    d1.style.display = "block";
  }
};

// Consctructeur objet Hero.
function Hero(name, health, maxHealth, defence, attack, weakness, resistance, lightAttack, bigAttack,image) {
  this.name = name;
  this.health = health;
  this.maxHealth = maxHealth;
  this.defence = defence;
  this.attack = attack;
  this.weakness = weakness;
  this.resistance = resistance;
  this.lightAttack = lightAttack;
  this.bigAttack = bigAttack;
  this.image = image;
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
    document.body.style.backgroundImage = "url(assets/img/2.jpg)";
  } else if (round == 25) {
    document.body.style.backgroundImage = "url(assets/img/5.jpg)";
  } else if (round == 30) {
    document.body.style.backgroundImage = "url(assets/img/12.jpg)";
  }
}

var playByPlay = document.getElementById('announcements');
var numberOfEvent = 0;

function clearDisplayEvent() {
  playByPlay.innerHTML = "";
  numberOfEvent = 0;
}

function displayEvent(message) {
  numberOfEvent++;
  if (numberOfEvent >= 10) {
    clearDisplayEvent();
  }
  playByPlay.innerHTML += message + "<br>";
}


function ModalDeathHero() {
  document.getElementById("baseAttack").disabled = "true";
  document.getElementById("heavyAttack").disabled = "true";
  document.getElementById("potion").disabled = "true";
  document.getElementById("modalDeathHero").style.display = "block";
}
document.getElementById("dismissDeathHero").addEventListener("click", function () {
  document.getElementById("baseAttack").disabled = false;
  document.getElementById("heavyAttack").disabled = false;
  document.getElementById("potion").disabled = false;
  document.getElementById("modalDeathHero").style.display = "none";
});

function ModalDeathEnnemy() {
  document.getElementById("baseAttack").disabled = "true";
  document.getElementById("heavyAttack").disabled = "true";
  document.getElementById("potion").disabled = "true";
  document.getElementById("modalDeathEnnemy").style.display = "block";
}
document.getElementById("dismissDeathEnnemy").addEventListener("click", function () {
  document.getElementById("baseAttack").disabled = false;
  document.getElementById("heavyAttack").disabled = false;
  document.getElementById("potion").disabled = false;
  document.getElementById("modalDeathEnnemy").style.display = "none";
});

function ModalProgress(){
  if(round==2) {
    document.getElementById("modalProgressTitle").innerHTML = "A L'AVENTURE !";
    document.getElementById("modalProgressText").innerHTML = "Votre periple commence depuis votre village, occupé par les forces de Void les shield-bearers decident de le liberer ! <br>Attaquez les orques qui vous assiegent";
    document.getElementById("baseAttack").disabled = "true";
    document.getElementById("heavyAttack").disabled = "true";
    document.getElementById("potion").disabled = "true";
    document.getElementById("modalProgress").style.display = "block";
  }
  if(round==3) {
    document.getElementById("modalProgressTitle").innerHTML = "BIEN JOUE ! ";
    document.getElementById("modalProgressText").innerHTML = "Vous avez vaincu les orques qui occupaient Myrefall ! <br>A peine la bataille terminée vous entendez au loin les renfort de Xonoth arrivés !";
    document.getElementById("baseAttack").disabled = "true";
    document.getElementById("heavyAttack").disabled = "true";
    document.getElementById("potion").disabled = "true";
    document.getElementById("modalProgress").style.display = "block";
  }
  if(round==4) {
    document.getElementById("modalProgressTitle").innerHTML = "BIEN JOUE !";
    document.getElementById("modalProgressText").innerHTML = "Vous avez repoussé les renforts orques et vous remarquez que leur traces remontent jusqu'au marais, sur la route vous croisez une seconde vague de renfort.";
    document.getElementById("baseAttack").disabled = "true";
    document.getElementById("heavyAttack").disabled = "true";
    document.getElementById("potion").disabled = "true";
    document.getElementById("modalProgress").style.display = "block";
  }
  if(round==5) {
    document.getElementById("modalProgressTitle").innerHTML = "BIEN JOUE !";
    document.getElementById("modalProgressText").innerHTML = "Encore d'autres orques vaincus ! Aprés cette recente bataille vous arrivez enfin au aux abords des marais bordant Myrefall... Ils grouillent d'orques !";
    document.getElementById("baseAttack").disabled = "true";
    document.getElementById("heavyAttack").disabled = "true";
    document.getElementById("potion").disabled = "true";
    document.getElementById("modalProgress").style.display = "block";
  }
  if(round==6) {
    document.getElementById("modalProgressTitle").innerHTML = "BIEN JOUE !";
    document.getElementById("modalProgressText").innerHTML = "Vous et vos compagnons Shield-bearers vous enfoncez dans les marais, les orques vous encerclent, la bataille sera dur mais vous entendez déja au loin les rugissement de Xonoth";
    document.getElementById("baseAttack").disabled = "true";
    document.getElementById("heavyAttack").disabled = "true";
    document.getElementById("potion").disabled = "true";
    document.getElementById("modalProgress").style.display = "block";
  }
  if(round==7) {
    document.getElementById("modalProgressTitle").innerHTML = "BIEN JOUE !";
    document.getElementById("modalProgressText").innerHTML = "Orque aprés orque vous vous approchez de leur chef";
    document.getElementById("baseAttack").disabled = "true";
    document.getElementById("heavyAttack").disabled = "true";
    document.getElementById("potion").disabled = "true";
    document.getElementById("modalProgress").style.display = "block";
  }
  if(round==8){
    document.getElementById("modalProgressTitle").innerHTML = "BIEN JOUE !";
    document.getElementById("modalProgressText").innerHTML = "Aprés d'autres combats le chemin se degage, vous voyez au loin a la sortie des marais une foret de la quelle sort les bruits d'autres orcs et de leur chef.";
    document.getElementById("baseAttack").disabled = "true";
    document.getElementById("heavyAttack").disabled = "true";
    document.getElementById("potion").disabled = "true";
    document.getElementById("modalProgress").style.display = "block";
  }
  if(round==9){
    document.getElementById("modalProgressTitle").innerHTML = "BIEN JOUE !";
    document.getElementById("modalProgressText").innerHTML = "La sortie est proche, Xonoth envoi ses dernieres troupes alors que Xonoth attend patiemment dans la foret.";
    document.getElementById("baseAttack").disabled = "true";
    document.getElementById("heavyAttack").disabled = "true";
    document.getElementById("potion").disabled = "true";
    document.getElementById("modalProgress").style.display = "block";
  }
  if(round==10){
    document.getElementById("modalProgressTitle").innerHTML = "BIEN JOUE !";
    document.getElementById("modalProgressText").innerHTML = "Vous avez vaincu les derniers orques des forces de Xonoth, a son tour maintenant !";
    document.getElementById("baseAttack").disabled = "true";
    document.getElementById("heavyAttack").disabled = "true";
    document.getElementById("potion").disabled = "true"; 
    document.getElementById("modalProgress").style.display = "block";
  }
  if(round==11){
    document.getElementById("modalProgressTitle").innerHTML = "BRAVO";
    document.getElementById("modalProgressText").innerHTML = "Aprés un difficile combat, Les shield-bearers ont vaincu Xonoth! <br> Sur son corps vous trouvez les ordres que Void lui a donné et vous decidez de remonter la piste";
    document.getElementById("modalProgressBadge1").src = "assets/img/badge1.png"
    document.getElementById("baseAttack").disabled = "true";
    document.getElementById("heavyAttack").disabled = "true";
    document.getElementById("potion").disabled = "true";
    document.getElementById("modalProgress").style.display = "block";
  }
  if(round==12){
    document.getElementById("modalProgressTitle").innerHTML = "BIEN JOUE";
    document.getElementById("modalProgressText").innerHTML = "Grace aux ordres trouvé sur Xonoth vous decidez d'aller jusqu'au chateau du lac d'argent au nord d'ici. Mais vous devez d'abord sortir de la foret dans lequel, en l'absence des orques, les araignées ont repris leurs droits...";
    document.getElementById("modalProgressBadge1").src = "assets/img/badge1.png"
    document.getElementById("baseAttack").disabled = "true";
    document.getElementById("heavyAttack").disabled = "true";
    document.getElementById("potion").disabled = "true";
    document.getElementById("modalProgress").style.display = "block";
  }
  if(round==13){
    document.getElementById("modalProgressTitle").innerHTML = "BIEN JOUE";
    document.getElementById("modalProgressText").innerHTML = "Vous continuez votre chemin dans la funeste foret, mais mefiez vous... Dans les branches au dessus vous entendez le cliquetis caracteristiques des pattes d'araignées...";
    document.getElementById("modalProgressBadge1").src = "assets/img/badge1.png"
    document.getElementById("baseAttack").disabled = "true";
    document.getElementById("heavyAttack").disabled = "true";
    document.getElementById("potion").disabled = "true";
    document.getElementById("modalProgress").style.display = "block";
  }
  if(round==14) {
    document.getElementById("modalProgressTitle").innerHTML = "BIEN JOUE";
    document.getElementById("modalProgressText").innerHTML = "Vous arrivez bientot pres d'un point d'eau, encore quelques metres et vous pourrez vous reposer... ATTENTION!";
    document.getElementById("modalProgressBadge1").src = "assets/img/badge1.png"
    document.getElementById("baseAttack").disabled = "true";
    document.getElementById("heavyAttack").disabled = "true";
    document.getElementById("potion").disabled = "true";
    document.getElementById("modalProgress").style.display = "block";
  }
  if(round==15){
    document.getElementById("modalProgressTitle").innerHTML = "BIEN JOUE";
    document.getElementById("modalProgressText").innerHTML = "La nuit tombe quand vous arrivez pres de l'étang, vous y trouvez un marchand qui vous explique que l'invasion d'araignées a laquelle vous faites face vient du chateau proche d'ici ou leur reine a elu domicile. En bon shield-bearers vous decidez de liberer la region de cette menace, en avant pour le chateau !";
    document.getElementById("modalProgressBadge1").src = "assets/img/badge1.png"
    document.getElementById("baseAttack").disabled = "true";
    document.getElementById("heavyAttack").disabled = "true";
    document.getElementById("potion").disabled = "true";
    document.getElementById("modalProgress").style.display = "block";
  }
  if(round==16){
    document.getElementById("modalProgressTitle").innerHTML = "BIEN JOUE";
    document.getElementById("modalProgressText").innerHTML = "Le nombre d'araignée grandit a mesure que vous vous approchez de leur tanniére, tenez bon !";
    document.getElementById("modalProgressBadge1").src = "assets/img/badge1.png"
    document.getElementById("baseAttack").disabled = "true";
    document.getElementById("heavyAttack").disabled = "true";
    document.getElementById("potion").disabled = "true";
    document.getElementById("modalProgress").style.display = "block";
  }
  if(round==17){
    document.getElementById("modalProgressTitle").innerHTML = "BIEN JOUE";
    document.getElementById("modalProgressText").innerHTML = "Entre quelques combats vous trouvez le temps de vous reposer, mais les araignées, elles, ne connaissent pas la fatigue";
    document.getElementById("modalProgressBadge1").src = "assets/img/badge1.png"
    document.getElementById("baseAttack").disabled = "true";
    document.getElementById("heavyAttack").disabled = "true";
    document.getElementById("potion").disabled = "true";
    document.getElementById("modalProgress").style.display = "block";
  }
  if(round==18){
    document.getElementById("modalProgressTitle").innerHTML = "BIEN JOUE";
    document.getElementById("modalProgressText").innerHTML = "Au loin se dessine la silhouette du chateau occupé par la reine araignée ! Continuez comme ça shield-bearers !";
    document.getElementById("modalProgressBadge1").src = "assets/img/badge1.png"
    document.getElementById("baseAttack").disabled = "true";
    document.getElementById("heavyAttack").disabled = "true";
    document.getElementById("potion").disabled = "true";
    document.getElementById("modalProgress").style.display = "block";
  }
  if(round==19) {
    document.getElementById("modalProgressTitle").innerHTML = "BIEN JOUE";
    document.getElementById("modalProgressText").innerHTML = "Vous avez vaincu presques toutes les araignées autour du chateau, La porte est ouverte et vous entendez leur reine, Eukrid, a l'interieur. <br> A l'attaque !";
    document.getElementById("modalProgressBadge1").src = "assets/img/badge1.png"
    document.getElementById("baseAttack").disabled = "true";
    document.getElementById("heavyAttack").disabled = "true";
    document.getElementById("potion").disabled = "true";
    document.getElementById("modalProgress").style.display = "block";
  }
  if(round==20){
    document.getElementById("modalProgressTitle").innerHTML = "BIEN JOUE";
    document.getElementById("modalProgressText").innerHTML = "Vous arrivez enfin devant Eukrid, Debarassez la région de ce Fléau !";
    document.getElementById("modalProgressBadge1").src = "assets/img/badge1.png"
    document.getElementById("baseAttack").disabled = "true";
    document.getElementById("heavyAttack").disabled = "true";
    document.getElementById("potion").disabled = "true";
    document.getElementById("modalProgress").style.display = "block";
  }
  if(round==21){
    document.getElementById("modalProgressTitle").innerHTML = "BRAVO";
    document.getElementById("modalProgressText").innerHTML = "La perfide araignée a été tué. Vous avez sauvé la région d'un funeste destin. Vous decouvrez dans le chateau la preuve qu'elle avait été envoyé par Void lui-même ainsi que l'endroit ou il se terre. En route pour son donjon!";
    document.getElementById("modalProgressBadge1").src = "assets/img/badge1.png";
    document.getElementById("modalProgressBadge2").src="assets/img/badge2.png";
    document.getElementById("baseAttack").disabled = "true";
    document.getElementById("heavyAttack").disabled = "true";
    document.getElementById("potion").disabled = "true";
    document.getElementById("modalProgress").style.display = "block";
  }
  if(round==22) {
    document.getElementById("modalProgressTitle").innerHTML = "BIEN JOUE";
    document.getElementById("modalProgressText").innerHTML = "Vous partez du chateau d'Eukrid en direction de Void mais il est déja au courant de votre venue... Il a lui meme envoyé son armée de mort-vivant vous arretez";
    document.getElementById("modalProgressBadge1").src = "assets/img/badge1.png";
    document.getElementById("modalProgressBadge2").src="assets/img/badge2.png";
    document.getElementById("baseAttack").disabled = "true";
    document.getElementById("heavyAttack").disabled = "true";
    document.getElementById("potion").disabled = "true";
    document.getElementById("modalProgress").style.display = "block";
  }
  if(round==23){
    document.getElementById("modalProgressTitle").innerHTML = "BIEN JOUE";
    document.getElementById("modalProgressText").innerHTML = "Les premiers mort-vivants vaincus vous vous rendez compte qu'arrivait jusqu'au chateau de Void ne sera pas une mince affaire. <br> Tenez bon Shield-bearers !";
    document.getElementById("modalProgressBadge1").src = "assets/img/badge1.png";
    document.getElementById("modalProgressBadge2").src="assets/img/badge2.png";
    document.getElementById("baseAttack").disabled = "true";
    document.getElementById("heavyAttack").disabled = "true";
    document.getElementById("potion").disabled = "true";
    document.getElementById("modalProgress").style.display = "block";
  }
  if(round==24){
    document.getElementById("modalProgressTitle").innerHTML = "BIEN JOUE";
    document.getElementById("modalProgressText").innerHTML = "Vous y etes presques, Les rangs des mort vivant s'amenuisent tandis que vous avancez en direction des terres de Void";
    document.getElementById("modalProgressBadge1").src = "assets/img/badge1.png";
    document.getElementById("modalProgressBadge2").src="assets/img/badge2.png";
    document.getElementById("baseAttack").disabled = "true";
    document.getElementById("heavyAttack").disabled = "true";
    document.getElementById("potion").disabled = "true";
    document.getElementById("modalProgress").style.display = "block";
  }
  if(round==25) {
    document.getElementById("modalProgressTitle").innerHTML = "BIEN JOUE";
    document.getElementById("modalProgressText").innerHTML = "Vous voila arrivé dans les terribles terres de Void, au loin son chateau domine tout son royaume. C'est la derniére ligne droite pour vous !";
    document.getElementById("modalProgressBadge1").src = "assets/img/badge1.png";
    document.getElementById("modalProgressBadge2").src="assets/img/badge2.png";
    document.getElementById("baseAttack").disabled = "true";
    document.getElementById("heavyAttack").disabled = "true";
    document.getElementById("potion").disabled = "true";
    document.getElementById("modalProgress").style.display = "block";
  }
  if(round==26) {
    document.getElementById("modalProgressTitle").innerHTML = "BIEN JOUE";
    document.getElementById("modalProgressText").innerHTML = "Vous grimpez les escarpements autour du chateau, toujours assaili par les mort-vivants que Void ne cesse d'envoyer... Mais vous avancez !";
    document.getElementById("modalProgressBadge1").src = "assets/img/badge1.png";
    document.getElementById("modalProgressBadge2").src="assets/img/badge2.png";
    document.getElementById("baseAttack").disabled = "true";
    document.getElementById("heavyAttack").disabled = "true";
    document.getElementById("potion").disabled = "true";
    document.getElementById("modalProgress").style.display = "block";
  }
  if(round==27){
    document.getElementById("modalProgressTitle").innerHTML = "BIEN JOUE";
    document.getElementById("modalProgressText").innerHTML = "Presque ! Vous sentez déja le souffre se degager de l'antre de Void tandis que les derniers mort-vivants vous barrent encore la route, <br> Liberer le monde de son Joug ! Foncez !";
    document.getElementById("modalProgressBadge1").src = "assets/img/badge1.png";
    document.getElementById("modalProgressBadge2").src="assets/img/badge2.png";
    document.getElementById("baseAttack").disabled = "true";
    document.getElementById("heavyAttack").disabled = "true";
    document.getElementById("potion").disabled = "true";
    document.getElementById("modalProgress").style.display = "block";
  }
  if(round==28){
    document.getElementById("modalProgressTitle").innerHTML = "BIEN JOUE";
    document.getElementById("modalProgressText").innerHTML = "Les portes de son chateau n'ont jamais été aussi proches... Bon courage aventurier !";
    document.getElementById("modalProgressBadge1").src = "assets/img/badge1.png";
    document.getElementById("modalProgressBadge2").src="assets/img/badge2.png";
    document.getElementById("baseAttack").disabled = "true";
    document.getElementById("heavyAttack").disabled = "true";
    document.getElementById("potion").disabled = "true";
    document.getElementById("modalProgress").style.display = "block";
  }
  if(round==29){
    document.getElementById("modalProgressTitle").innerHTML = "BIEN JOUE";
    document.getElementById("modalProgressText").innerHTML = "Se dresse devant vous les derniers mort-vivants de l'armée de void, une formalité avant le combat final...";
    document.getElementById("modalProgressBadge1").src = "assets/img/badge1.png";
    document.getElementById("modalProgressBadge2").src="assets/img/badge2.png";
    document.getElementById("baseAttack").disabled = "true";
    document.getElementById("heavyAttack").disabled = "true";
    document.getElementById("potion").disabled = "true";
    document.getElementById("modalProgress").style.display = "block";
  }
  if(round==30) {
    document.getElementById("modalProgressTitle").innerHTML = "BIEN JOUE";
    document.getElementById("modalProgressText").innerHTML = "Vous voila nez a nez avec le mal incarné, sauvez Myrefall et le reste du monde de son emprise ! ";
    document.getElementById("modalProgressBadge1").src = "assets/img/badge1.png";
    document.getElementById("modalProgressBadge2").src="assets/img/badge2.png";
    document.getElementById("baseAttack").disabled = "true";
    document.getElementById("heavyAttack").disabled = "true";
    document.getElementById("potion").disabled = "true";
    document.getElementById("modalProgress").style.display = "block";
  }
  if(round==31) {
    document.getElementById("modalProgressTitle").innerHTML = "VICTOIRE";
    document.getElementById("modalProgressText").innerHTML = "Vous avez vaincu le terrible Void ! Les shield-bearers ont liberer le monde de la domination des forces du mal.<br> Une fois trépassé vous decouvrez la source de son pouvoir, la flamme magique d'Ardath, elle est a vous desormais...";
    document.getElementById("modalProgressBadge1").src = "assets/img/badge1.png";
    document.getElementById("modalProgressBadge2").src="assets/img/badge2.png";
    document.getElementById("modalProgressBadge3").src="assets/img/badge3.png";
    document.getElementById("baseAttack").disabled = "true";
    document.getElementById("heavyAttack").disabled = "true";
    document.getElementById("potion").disabled = "true";
    document.getElementById("modalProgress").style.display = "block";
  }

}
document.getElementById("dismissModalProgress").addEventListener("click", function () {
  document.getElementById("baseAttack").disabled = false;
  document.getElementById("heavyAttack").disabled = false;
  document.getElementById("potion").disabled = false;
  document.getElementById("modalProgress").style.display = "none";
});




function ModalVictory() {
  chronoStop();
  document.getElementById("baseAttack").disabled = "true";
  document.getElementById("heavyAttack").disabled = "true";
  document.getElementById("potion").disabled = "true";
  document.getElementById("modalVictory").style.display = "block";
  document.getElementById("victoryTime").innerHTML = chronotime.value;
  document.getElementById("chronoForm").style.display = "none";


}
document.getElementById("dismissModalVictory").addEventListener("click", function () {
  document.getElementById("modalVictory").style.display = "none";
  document.location.reload();
})


function ModalGameOver() {
  chronoStop();
  document.getElementById("baseAttack").disabled = "true";
  document.getElementById("heavyAttack").disabled = "true";
  document.getElementById("potion").disabled = "true";
  document.getElementById("modalGameOver").style.display = "block";
}
document.getElementById("dismissModalGameOver").addEventListener("click", function () {
  document.getElementById("modalGameOver").style.display = "none";
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
    ModalGameOver();
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
  }
}



function addLife() {
  if (round == 5 || round == 10 || round == 15 || round == 20 || round == 25 || round == 30) {
    life = life + 1;
    displayLife();
  }
}

// Compteur de vie
function LostLife() {
  if (hero.health <= 0) {
    life = life - 1;
    displayLife();
    hero.health = hero.maxHealth;
    document.getElementById("heroHealth").innerHTML = hero.health;
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
  document.getElementById("heroImg").src = hero.image;


  health.setAttribute("value", hero.health);
  health.setAttribute("max", hero.maxHealth);
}

// Selection de tout les boutons de choix de classes
var classSelectArray = document.querySelectorAll('.classSelect');
// choix de classe selon le bouton : 
var hero = classSelectArray.forEach(element => {
  element.addEventListener('click', function CreateHero() {
    if (element.id == "knight") {
      hero = new Hero("Rodric", 500, 500, 30, 30, "thunder", "sword", "Coup d'épée", "Coup de bouclier","assets/img/knight.png");
      SetHeroValue();
      ButtonDisappear();
      displayLife();
      chronoStart();
      togg();
      togg1();
        ModalProgress();

      return hero;


    } else if (element.id == "mage") {
      hero = new Hero("Zorrun", 300, 300, 10, 40, "sword", "magic", "Eclair", "Mur de feu","assets/img/mage.png");
      document.getElementById("heroHealth").innerHTML = hero.health;
      SetHeroValue();
      ButtonDisappear();
      displayLife();
      chronoStart();
      togg();
      togg1();
      ModalProgress();

      return hero;


    } else if (element.id == "rogue") {
      hero = new Hero("Urim", 400, 400, 20, 35, "none", "none", "Attaque sournoise", "Assassinat","assets/img/urim.png");
      document.getElementById("heroHealth").innerHTML = hero.health;
      SetHeroValue();
      ButtonDisappear();
      displayLife();
      chronoStart();
      togg();
      togg1();
      ModalProgress();

      return hero;

    }
  });
});

//Constructeur objet Méchant.
function BadGuy(name, health, maxHealth, defence, attack, weakness, resistance,image) {
  this.name = name;
  this.health = health;
  this.maxHealth = maxHealth;
  this.defence = defence;
  this.attack = attack;
  this.weakness = weakness;
  this.resistance = resistance;
  this.image = image;
}

// Compteur de round
var round = 1;
document.getElementById("round").innerHTML = round;

//Creation du méchant selon le nombre de round: 
function CreateBadGuy() {
  if (round == 30) {
    var badGuy = new BadGuy("Void", 1000, 1000, 30, 40, "none", "sword","assets/img/darkknight.png");
  } else if (round == 20) {
    var badGuy = new BadGuy("Ekrid", 750, 750, 30, 50, "none", "none","assets/img/spider.png");
  } else if (round == 10) {
    var badGuy = new BadGuy("Xonoth", 630, 630, 30, 32, "none", "none","assets/img/wolf.png");
  } else if ( round == 1 || round == 2 || round == 3 || round == 4 || round == 5 || round == 6 || round == 7 || round == 8 || round == 9 ) {
      var badGuy = new BadGuy("Orque", 300, 300, 10, 30, "all", "none","assets/img/orc.png");
  } else if ( round == 11 || round == 12 || round == 13 || round == 14 || round == 15 || round == 16 || round == 17 || round == 18 || round == 19 ) {
    var badGuy = new BadGuy("Araignée",300, 300, 10, 30, "all", "none","assets/img/spider1.png");
  } 
  else {
    var badGuy = new BadGuy("Mort-vivant",300, 300, 10, 30, "all", "none","assets/img/skull.png");

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
  document.getElementById("badguyImg").src = badGuy.image;
}

// création du méchant
window.addEventListener("load", function () {
  badGuy = CreateBadGuy();
  DisplayBadGuy();
});


// mort du méchant
function DeathEnemy() {
  if (badGuy.health <= 0) {
    clearDisplayEvent();
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
    ModalProgress();

  }
}

// Fonction Coup critique
function Crit() {
  // Renvoi un nombre entre 1 et 100
  crit = Math.floor(Math.random() * 100) + 1;
  if (crit <= 10) {
    displayEvent("- COUP CRITIQUE!!");
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
    displayEvent("- Vous avez esquivé!");
  } else {
    ennemyDamage = badGuy.attack;
    displayEvent("- L'ennemi a contre attaqué, vous avez pris " + ennemyDamage + " dégats");
  }
}

//Fonction pour faire bouger les jauges
function MoveAllyHealthBar() {
  health.setAttribute("value", hero.health);
  var percentHealth = (hero.health / hero.maxHealth) * 100;
  document.getElementById("bar").style.width = percentHealth + "%";
}

function MoveEnnemyHealthBar() {
  badGuyHealth.setAttribute("value", badGuy.health);
  var percentHealth = (badGuy.health / badGuy.maxHealth) * 100;
  if (badGuy.health <= 0) {
    percentHealth = 100;
  }
  document.getElementById("badguyBar").style.width = percentHealth + "%";
}

document.getElementById("baseAttack").addEventListener("click", function baseAttack() {
  damage = BaseAttackDamage();
  badGuy.health = badGuy.health - damage;
  document.getElementById("badGuyHealth").innerHTML = badGuy.health;
  displayEvent("- Vous avez infligé " + damage + " dégats avec votre " + hero.lightAttack);
  Dodge();
  hero.health = hero.health - ennemyDamage;
  document.getElementById("heroHealth").innerHTML = hero.health;
  LostBasicAttack();
  MoveEnnemyHealthBar();
  setTimeout(MoveAllyHealthBar, 300);
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
  displayEvent("- Vous avez infligé " + damage + " dégats avec votre " + hero.bigAttack);
  Dodge();
  hero.health = hero.health - ennemyDamage;
  document.getElementById("heroHealth").innerHTML = hero.health;
  LostBigAttack();
  MoveEnnemyHealthBar();
  setTimeout(MoveAllyHealthBar, 300);
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
    heroHealthToGet = hero.health + 49;
    if (hero.health < hero.maxHealth && heroHealthToGet < hero.maxHealth) {
      hero.health = hero.health + 50;
      stockPotion--;
      displayEvent("- Votre potion vous a rendu 50PV.");
      document.getElementById("heroHealth").innerHTML = hero.health;
      document.getElementById("stockPotion").innerHTML = stockPotion;
      MoveAllyHealthBar();
    } else {
      displayEvent("- Vous n'avez pas besoin de potion.")
    }
  } else {
    displayEvent("- Vous n'avez plus assez de potion.")
  }
});

// Ajout d'un nombre de potion entre 1 et 3, faudra juste lier ca a la victoire plutot qu'a un bouton mais ca fonctionne.
function addPotion() {
  potionToAdd = Math.floor(Math.random() * 2) + 1; //chiffre en 1 et 3
  stockPotion = stockPotion + potionToAdd;
  document.getElementById("stockPotion").innerHTML = stockPotion;
  return stockPotion;
}

$(document).ready(function () {
  $("#baseAttack").click(function () {
    $(".badguyImg").effect("shake",{times:2}, 400);
    $(".heroImg").effect("shake",{times:1},120);
    
  });
  $("#heavyAttack").click(function () {
    $(".badguyImg").effect("shake",{times:3}, 300);
    $(".heroImg").effect("shake",{times:1},260);

  });
});

