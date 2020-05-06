'use strict';


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
}

// gives random number for the amount of Customers
// makes an array of random numbers for each store hour
// multiply each index of array with average cookie sale per hour
// outputs an array of cookies sold per hour of entire day
Store.prototype.randomNumber = function () {
  var randomCustomerPerHourArray = [];
  for (var i = 0; i < storeHours.length; i++) {
    var randomNumber = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;
    randomCustomerPerHourArray.push(Math.ceil(randomNumber * this.avgCookiesSoldPerSale));
  }
  return randomCustomerPerHourArray;
};
// function to do the sum of each locations day
// Store.prototype.sumOfCookiesEachDay = function () {
//   var sum = 0;
// };

// functions give array of cookies each hour at store location
Seattle.randomNumber();
Tokyo.randomNumber();
Dubai.randomNumber();
Paris.randomNumber();
Lima.randomNumber();

// render the hour as a header row  .. id=stores
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
  parent.appendChild(row);
};

Store.prototype.renderSales = function () {
  var parent = document.getElementById('stores');
  var row = document.createElement('tr');
  var data = document.createElement('td');
  data.textContent = this.storeName;
  row.appendChild(data);

  for (var i = 0; i < storeHours.length; i++) {
    data = document.createElement('th');
    data.textContent = this.randomNumber()[i];
    row.appendChild(data);
  }
  parent.appendChild(row);
};

Store.prototype.render();
Seattle.renderSales();
Tokyo.renderSales();
Dubai.renderSales();
Paris.renderSales();
Lima.renderSales();

