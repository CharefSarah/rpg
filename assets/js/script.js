// Consctructeur objet Hero.
function Hero(health, defence, attack, weakness, resistance) {
    this.health = health;
    this.defence = defence;
    this.attack = attack;
    this.weakness = weakness;
    this.resistance = resistance;
  }

  var knight  = new Hero(500,30,50,thunder,sword);

  var mage = new Hero(300,10,75,sword,magic);

  var archer = new Hero(400,20,75,none,none);

  //Constructeur objet Méchant.
function BadGuy(health,defence,attack,weakness,resistance) {
    this.health = health;
    this.defence = defence;
    this.attack = attack;
    this.weakness = weakness;
    this.resistance = resistance;
}

var orc = new BadGuy(300,10,25,all,none);

var darkKnight = new BadGuy(1000,30,40,none,sword); 
