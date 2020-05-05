'use strict';


var storeHours = ['6am ', '7am ', '8am ', '9am ', '10am ', '11am ', '12pm ', '1pm ', '2pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm '];

// constructor function for store locations
function Store(nameOfStore, minCustomer, maxCustomer, storeHours, averageCookieSalePerHour, cookiesPerDay) {
  this.storeName = nameOfStore;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
}


// gives random number for the amount of Customers
Store.prototype.randomNumber = function (minCustomer, maxCustomer) {
  var randomNumber = Math.floor(Math.random() * (maxCustomer - minCustomer + 1)) + minCustomer;
  var randomCustomerPerHourArray = [];
  for (var i = 0; i < storeHours.length; i++) {
    randomCustomerPerHourArray.push(randomNumber);
  }
};

// make prototypes of following
this.averageCookieSalePerHour = averageCookieSalePerHour;
this.cookiesPerDay = cookiesPerDay;



Store.prototype.cookiesPerHour = function () {

};


////////////////////////

var parentElement = document.getElementById('table');
var tableRow = document.createElement('tr');
var array = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima'];
tableRow.appendChild(tableHeader);
for (var i = 0; i < Array.length; i++) {
  tableHeader = document.createElement('th');
  tableHeader.textContent = array[i];
  tableRow.appendChild(tableHeader);
}
parentElement.appendChild(tableRow);

var fluffy



// var seattle = {
//   minCustomer: 23,
//   maxCustomer: 65,
//   averageCookieSale: 6.3,

//   customersPerHour: function () {
//     var min = this.minCustomer;
//     var max = this.maxCustomer;
//     var customers = Math.floor(Math.random() * (max - min + 1)) + min;
//     return customers;
//   },

//   cookiesPerHour: function () {
//     var customers = this.customersPerHour();
//     return Math.floor(customers * this.averageCookieSale);
//   },

//   cookiesPerDay: function () {
//     var cookieHour = []; //cookieHour - for entire day
//     var sum = 0;
//     for (var i = 0; i < 14; i++) {
//       cookieHour.push(this.cookiesPerHour());
//       sum += this.cookiesPerHour();
//     }
//     cookieHour.push(sum);
//     return cookieHour;
//   },

//   render: function () {
//     var parent = document.getElementById('seattle');
//     var array = this.cookiesPerDay();
//     var hour = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', 'Total Sold: '];
//     for (var i = 0; i < 15; i++) {
//       var listItem = document.createElement('li');
//       listItem.textContent = hour[i] + array[i];
//       parent.appendChild(listItem);
//     }
//   }
// };




// var tokyo = {
//   minCustomer: 3,
//   maxCustomer: 24,
//   averageCookieSale: 1.2,
//   customersPerHour: function () {
//     var min = this.minCustomer;
//     var max = this.maxCustomer;
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   },
//   cookiesPerHour: function () {
//     var customers = this.customersPerHour();
//     return Math.floor(customers * this.averageCookieSale);
//   },

//   cookiesPerDay: function () {
//     var cookieHour = []; //cookieHour - for entire day
//     var sum = 0;
//     for (var i = 0; i < 14; i++) {
//       cookieHour.push(this.cookiesPerHour());
//       sum += this.cookiesPerHour();
//     }
//     cookieHour.push(sum);
//     return cookieHour;
//   },

//   render: function () {
//     var parent = document.getElementById('tokyo');
//     var array = this.cookiesPerDay();
//     var hour = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', 'Total Sold: '];
//     for (var i = 0; i < 15; i++) {
//       var listItem = document.createElement('li');
//       listItem.textContent = hour[i] + array[i];
//       parent.appendChild(listItem);
//     }
//   }
// };




// var dubai = {
//   minCustomer: 11,
//   maxCustomer: 38,
//   averageCookieSale: 3.7,
//   customersPerHour: function () {
//     var min = this.minCustomer;
//     var max = this.maxCustomer;
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   },
//   cookiesPerHour: function () {
//     var customers = this.customersPerHour();
//     return Math.floor(customers * this.averageCookieSale);
//   },

//   cookiesPerDay: function () {
//     var cookieHour = []; //cookieHour - for entire day
//     var sum = 0;
//     for (var i = 0; i < 14; i++) {
//       cookieHour.push(this.cookiesPerHour());
//       sum += this.cookiesPerHour();
//     }
//     cookieHour.push(sum);
//     return cookieHour;
//   },

//   render: function () {
//     var parent = document.getElementById('dubai');
//     var array = this.cookiesPerDay();
//     var hour = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', 'Total Sold: '];
//     for (var i = 0; i < 15; i++) {
//       var listItem = document.createElement('li');
//       listItem.textContent = hour[i] + array[i];
//       parent.appendChild(listItem);
//     }
//   }
// };




// var paris = {
//   minCustomer: 20,
//   maxCustomer: 38,
//   averageCookieSale: 2.3,
//   customersPerHour: function () {
//     var min = this.minCustomer;
//     var max = this.maxCustomer;
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   },
//   cookiesPerHour: function () {
//     var customers = this.customersPerHour();
//     return Math.floor(customers * this.averageCookieSale);
//   },

//   cookiesPerDay: function () {
//     var cookieHour = []; //cookieHour - for entire day
//     var sum = 0;
//     for (var i = 0; i < 14; i++) {
//       cookieHour.push(this.cookiesPerHour());
//       sum += this.cookiesPerHour();
//     }
//     cookieHour.push(sum);
//     return cookieHour;
//   },

//   render: function () {
//     var parent = document.getElementById('paris');
//     var array = this.cookiesPerDay();
//     var hour = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', 'Total Sold: '];
//     for (var i = 0; i < 15; i++) {
//       var listItem = document.createElement('li');
//       listItem.textContent = hour[i] + array[i];
//       parent.appendChild(listItem);
//     }
//   }
// };




// var lima = {
//   minCustomer: 2,
//   maxCustomer: 16,
//   averageCookieSale: 4.6,
//   customersPerHour: function () {
//     var min = this.minCustomer;
//     var max = this.maxCustomer;
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   },
//   cookiesPerHour: function () {
//     var customers = this.customersPerHour();
//     return Math.floor(customers * this.averageCookieSale);
//   },

//   cookiesPerDay: function () {
//     var cookieHour = []; //cookieHour - for entire day
//     var sum = 0;
//     for (var i = 0; i < 14; i++) {
//       cookieHour.push(this.cookiesPerHour());
//       sum += this.cookiesPerHour();
//     }
//     cookieHour.push(sum);
//     return cookieHour;
//   },

//   render: function () {
//     var parent = document.getElementById('lima');
//     var array = this.cookiesPerDay();
//     var hour = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', 'Total Sold: '];
//     for (var i = 0; i < 15; i++) {
//       var listItem = document.createElement('li');
//       listItem.textContent = hour[i] + array[i];
//       parent.appendChild(listItem);
//     }
//   }
// };

// seattle.render();
// tokyo.render();
// dubai.render();
// paris.render();
// lima.render();