import utils from '../helpers/utils.js';
import personData from '../helpers/data/personData.js'

//this function will be called in the init function in main.js
//function builds the tank full of alive people
// will need printToDom function and persons data

const buildGraveyard = () => {
  //get dead people data
  const deadPeople = personData.retrieveDeadPeople();
  
  //build domString, then call printToDom function, then export buildGraveyard function
  let domString = '';
  domString += '<div class="card">';
  domString += '<div class="card-header">Graveyard</div>';
  domString += '<ul class="list-group list-group-flush">';

  deadPeople.forEach((person) => {
    domString += `<li class="list-group-item">${person.name}  </li>`;
  });

  domString += '</ul>';
  domString += '</div>';

  utils.printToDom('graveyard', domString);
}

export default { buildGraveyard };
