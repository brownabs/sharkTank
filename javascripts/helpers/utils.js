//printToDom function - will use this multiple times so it is modularized and exported


const printToDom = (divId, textToPrint) => {

  $(`#${divId}`).html(textToPrint);
  
};

export default { printToDom };
