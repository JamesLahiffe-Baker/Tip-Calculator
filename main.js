function countrySwitchBoard(country) {
  switch(country) {
    case 'France':
      createPlaceDropDown(country);
      placeDropDown('Paris');
      placeDropDown('Lyon');
      placeDropDown('Somewhere else in France');
      break;
    case 'Italy':
      createPlaceDropDown(country);
      placeDropDown('Rome');
      placeDropDown('Milan');
      placeDropDown('Catania');
      placeDropDown('Naples');
      placeDropDown('Somewhere else in Italy');
      break;
    case 'United Kingdom':
      createPlaceDropDown(country);
      placeDropDown('London');
      placeDropDown('Birmingham');
      placeDropDown('Cardiff');
      placeDropDown('Scotland');
      placeDropDown('Somewhere else in the UK');
      break;
    case 'United States':
      createPlaceDropDown(country);
      placeDropDown('Florida');
      placeDropDown('New York');
      placeDropDown('Texas');
      placeDropDown('California');
      placeDropDown('Somewhere else in the United States');
      break;
    case 'Morocco':
      createPlaceDropDown(country);
      placeDropDown('Tangier');
      placeDropDown('Marrakesh');
      placeDropDown('Somewhere else in the Morocco');
      break;
    case 'United Arab Emirates':
      createPlaceDropDown(country);
      placeDropDown('Dubai');
      placeDropDown('Abu Dhabi');
      placeDropDown('Somewhere else in the United Arab Emirates');
      break;
    default:
      console.log('Problem with countrySwitchBoard function');
  }
}
function createPlaceDropDown(country) {
  const divPlaceDropDown = document.querySelector('.divPlaceDropDown');
  const placeDropDownSelect = document.createElement('select');
  placeDropDownSelect.classList.add('placeDropDownClass');
  divPlaceDropDown.appendChild(placeDropDownSelect);
  placeDropDownOptionTab(country);
}
function placeDropDownOptionTab(country) {
  const placeDropDownOption = document.createElement('option');
  const placeDropDownSelect = document.querySelector('.placeDropDownClass');
  placeDropDownSelect.appendChild(placeDropDownOption);
  placeDropDownOption.innerText = 'Choose your location in ' + country ;
}
function placeDropDown(place) {
  const placeDropDownSelect = document.querySelector('.placeDropDownClass');
  const placeDropDownOption = document.createElement('option');
  placeDropDownSelect.appendChild(placeDropDownOption);
  placeDropDownOption.innerText = place;
  placeDropDownOption.onclick = function() { placeSwitchBoard(place); };
}

function placeSwitchBoard(place) {
  const myBill = document.querySelector('.billAmount');
  const myBillValue = myBill.value;
  switch(place) {
    case 'Paris':
      straightBillRate(myBillValue, 0.1, '€', 'France, Paris');
      break;
    case 'Lyon':
      straightBillRate(myBillValue, 0.08, '€', 'France, Lyon');
      break;
    case 'Somewhere else in France': 
      billCalculator(myBillValue, 20, 150, 0.07, 0.05, '€', 'France');
      break;
    case 'Rome': 
      straightBillRate(myBillValue, 0.13, '€', 'Italy, Rome');
      break;
    case 'Milan': 
      billCalculator(myBillValue, 25, 180, 0.1, 0.15, '€', 'Italy, Milan');
      break;
    case 'Catania': 
      straightBillRate(myBillValue, 0.1, '€', 'Italy, Catania');
      break;
    case 'Naples': 
      billCalculator(myBillValue, 15, 200, 0.15, 0.1, '€', 'Italy, Naples');
      break;
    case 'Somewhere else in Italy':
      billCalculator(myBillValue, 15, 250, 0.2, 0.15, '€', 'Italy');
      break;
    case 'London': 
      billCalculator(myBillValue, 15, 180, 0.15, 0.1, '£', 'England, London');
      break;
    case 'Birmingham': 
      straightBillRate(myBillValue, 0.07, '£', 'England, Birmingham');
      break;
    case 'Cardiff': 
      straightBillRate(myBillValue, 0.03, '£', 'Walse, Cardiff');
      break;
    case 'Scotland':
      straightBillRate(myBillValue, 0.1, '£', 'Scotland');
      break;
    case 'Somewhere else in the UK': 
      straightBillRate(myBillValue, 0.05, '£', 'United Kingdom (God I hate it when the UK is classed as a country too)');
      break;
    case 'Florida': 
      straightBillRate(myBillValue, 0.15, '$', 'United States, Florida');
      break;
    case 'New York': 
      billCalculator(myBillValue, 150, 450, 0.2, 0.15, '$', 'United States, New York');
      break;
    case 'Texas':
      straightBillRate(myBillValue, 0.1, '$', 'United States, Texas');
      break;
    case 'California': 
      straightBillRate(myBillValue, 0.25, '$', 'United States, California');
      break;
    case 'Somewhere else in the United States':
      billCalculator(myBillValue, 50, 350, 0.2, 0.15, '$', 'United States');
      break;
    case 'Tangier': 
      straightBillRate(myBillValue, 0.7, 'د. م.', 'Morocco, Tangier');
      break;
    case 'Marrakesh': 
      billCalculator(myBillValue, 170, 1150, 0.2, 0.1, 'د. م.', 'Morocco, Marrakesh');
      break;
    case 'Somewhere else in the Morocco':
      billCalculator(myBillValue, 180, 950, 0.1, 0.07, 'د. م.', 'Morocco');
      break;
    case 'Dubai': 
      billCalculator(myBillValue, 150, 680, 0.15, 0.1, 'د.إ', 'United Arab Emirates, Dubai');
      break;
    case 'Abu Dhabi': 
      straightBillRate(myBillValue, 0.2, 'د.إ', 'United Arab Emirates, Abu Dhabi');
      break;
    case 'Somewhere else in the United Arab Emirates':
      straightBillRate(myBillValue, 0.5, 'د.إ', 'United Arab Emirates');
      break;
    default:
      console.log('Problem with placeSwitchBoard function');
  }
}

function billCalculator(bill, lower, upper, rate1, rate2, unit, countryAndState) {
  const tip = bill >= lower && bill <= upper ? (bill * rate1) : (bill * rate2);
  userReply(bill, tip, unit, countryAndState); 
}

function straightBillRate(bill, rate, unit, countryAndState) {
  const tip = (bill * rate);
  userReply(bill, tip, unit, countryAndState);
}

function userReply(bill, tip, unit, countryAndState) {
  const divResults = document.querySelector('.divResults');
  const h2Results = document.createElement('h2');
  divResults.appendChild(h2Results);
  const tip2 = tip.toFixed(2);
  h2Results.innerText = 'You should pay ' + unit + tip2 + ' for your bill of ' + unit + bill + ' when in the country of ' + countryAndState + '.';
}