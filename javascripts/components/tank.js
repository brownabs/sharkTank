//need persons data and printToDom function 

import utils from '../helpers/utils.js';
import personData from '../helpers/data/personData.js';

//this function will be called in the init function in main.js
//function builds the tank full of alive people

const buildTank = () => {
  //using dot notation to call a function imported from personData file
  const alivePeople = personData.retrieveAlivePeople();
  let domString = '';
  domString += '<div class="card">';
  domString += '<div class="card-header">SHARK TANK</div>';
  domString += '<ul class="list-group list-group-flush">';

  alivePeople.forEach((person) => {
    domString += `<li class="list-group-item">${person.name}</li>`;
  });

  domString += '</ul>';
  domString += '</div>';

  utils.printToDom('tank', domString);
};


export default { buildTank };
