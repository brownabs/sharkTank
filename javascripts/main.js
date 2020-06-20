import tank from './components/tank.js';
import graveyard from './components/graveyard.js';
import personData from './helpers/data/personData.js';

//you will need to import all of the 
const sharkAttackEvent = () => {
  personData.randomSharkAttack();
  tank.buildTank();
  graveyard.buildGraveyard();
};

const init = () => {
  tank.buildTank();
  graveyard.buildGraveyard();
  $('#bite-me').click(sharkAttackEvent);
};

init();

// DEAD TO US:
// document.getElementById
// document.getElementsByClassName
// document.ANYTHING
//.classList - add, remove, contains
// .addEventListener
