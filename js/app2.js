'use strict';

var everyLocation = [];

var storeHours = ['6am ', '7am ', '8am ', '9am ', '10am ', '11am ', '12pm ', '1pm ', '2pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm '];

var Seattle = new Store('Seattle', 23, 65, 6.3);
var Tokyo = new Store('Tokyo', 3, 24, 1.2);
var Dubai = new Store('Dubai', 11, 38, 3.7);
var Paris = new Store('Paris', 20, 38, 2.3);
var Lima = new Store('Lima', 2, 16, 4.6);
// constructor function for store locations
function Store(nameOfStore, minCustomer, maxCustomer, avgCookiesSoldPerSale) {
  this.storeName = nameOfStore;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookiesSoldPerSale = avgCookiesSoldPerSale;
  this.arrayOfCookies = [];
  this.sumOfStoreHourCookies = 0;
  everyLocation.push(this);
}
// gives random number for the amount of Customers
// makes an array of random numbers for each store hour
// multiply each index of array with average cookie sale per hour
// outputs an array of cookies sold per hour of entire day
Store.prototype.randomNumber = function () {
  for (var i = 0; i < storeHours.length; i++) {
    var randomNumber = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;
    this.arrayOfCookies.push(Math.ceil(randomNumber * this.avgCookiesSoldPerSale));
  }
};
//   //calculates sum of cookies for the day
Store.prototype.sumOfStoreCookies = function () {
  this.randomNumber();
  for (var i = 0; i < storeHours.length; i++) {
    this.sumOfStoreHourCookies += this.arrayOfCookies[i];
  }
};
// calculates store locations hourly sums 
var sumArray = [];
var totalOfAllTotals = 0;
function sumOfAllLocationsStoreHours() {
  for (var i = 0; i < storeHours.length; i++) {
    var sum = 0;
    // console.log(storeHours[i]);
    // loop through hours 
    for (var j = 0; j < everyLocation.length; j++) {
      sum += everyLocation[j].arrayOfCookies[i];
      // console.log(everyLocation[j].arrayOfCookies[i]);
    }
    totalOfAllTotals += sum;
    sumArray.push(sum);
  }
};
// render the hours as a header row  .. id=stores
Store.prototype.render = function () {
  var parent = document.getElementById('stores');
  var row = document.createElement('tr');
  var header = document.createElement('th');
  header.textContent = '';
  row.appendChild(header);
  for (var i = 0; i < storeHours.length; i++) {
    header = document.createElement('th');
    header.textContent = storeHours[i];
    row.appendChild(header);
  }
  var header = document.createElement('th');
  header.textContent = 'Total';
  row.appendChild(header);
  parent.appendChild(row);
};
// renders the stores and their cookies per hour
Store.prototype.renderSales = function () {
  this.sumOfStoreCookies();
  var parent = document.getElementById('stores');
  var row = document.createElement('tr');
  var data = document.createElement('td');
  data.textContent = this.storeName;
  row.appendChild(data);

  for (var i = 0; i < storeHours.length; i++) {
    data = document.createElement('th');
    data.textContent = this.arrayOfCookies[i];
    row.appendChild(data);
  }

  //ADD DATA OF SUM HERE

  var sumData = document.createElement('td');
  sumData.textContent = this.sumOfStoreHourCookies;
  row.appendChild(sumData);
  //append all rows to parent
  parent.appendChild(row);
};

function renderSalesHours() {
  var parent = document.getElementById('stores');
  var row = document.createElement('tr');
  var data = document.createElement('td');
  data.textContent = 'Total';
  row.appendChild(data);
  console.log(sumArray);
  for (var i = 0; i < 14; i++) {
    data = document.createElement('td');
    data.textContent = sumArray[i];
    row.appendChild(data);
  }
  ///////////////////////
  data = document.createElement('td');
  data.textContent = totalOfAllTotals;
  row.appendChild(data);
  parent.appendChild(row);
  //////////////////////
}
//////////FORMS//////////////////
var form = document.getElementById('form');

function handleFormSubmit(event) {
  event.preventDefault();

  var nameOfStore = event.target.nameOfStore.value;
  var minCustomer = Number(event.target.minCustomer.value);
  var maxCustomer = Number(event.target.maxCustomer.value);
  var avgCookiesSoldPerSale = Number(event.target.avgCookiesSoldPerSale.value);

  var testt = new Store(nameOfStore, minCustomer, maxCustomer, avgCookiesSoldPerSale);

  testt.renderSales();
}

form.addEventListener('submit', handleFormSubmit);
////////////////////////////////
Store.prototype.render();
Seattle.renderSales();
Tokyo.renderSales();
Dubai.renderSales();
Paris.renderSales();
Lima.renderSales();

sumOfAllLocationsStoreHours();
renderSalesHours();