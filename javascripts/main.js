import tank from './components/tank.js';
import graveyard from './components/graveyard.js';
import personData from './helpers/data/personData.js';

//shark attack function and then must reprint home page 
const sharkAttackEvent = () => {
  personData.randomSharkAttack();
   //randomly kill someone in personData
    //then reprints newly updated tank to DOM
  tank.buildTank();
  graveyard.buildGraveyard();
};


const revivePersonEvent = (e) => {
    const personId = e.target.id;
    personData.reviveDeadPerson(personId);
    tank.buildTank();
    graveyard.buildGraveyard();
  }

 //.click vs .on
 //.on() works on dynamically added elements while .click() doesn't.

const init = () => {
  tank.buildTank();
  graveyard.buildGraveyard();
  $('#bite-me').click(sharkAttackEvent);
  $('body').on("click", '.revive-me', revivePersonEvent)
};

init()

// DO NOT USE in vanilla JS from now on
// document.getElementById
// document.getElementsByClassName
// document.ANYTHING
//.classList - add, remove, contains
// .addEventListener
