'use strict';

var seattle = {
  minCustomer: 23,
  maxCustomer: 65,
  averageCookieSale: 6.3,
  customersPerHour: function () {
    var min = this.minCustomer;
    var max = this.maxCustomer;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  // cookiesPerHour: function () {

  // }
};
console.log(seattle.customersPerHour());

// var tokyo = {
//   minCustomer: 3,
//   maxCustomer: 24,
//   averageCookieSale: 1.2,
//   customersPerHour: function () {

//   },
//   cookiesPerHour: function () {
//   }
// };



// var dubai = {
//   minCustomer: 11,
//   maxCustomer: 38,
//   averageCookieSale: 3.7,
//   customersPerHour: function () {

//   },
//   cookiesPerHour: function () {

//   }
// };




// var paris = {
//   minCustomer: 20,
//   maxCustomer: 38,
//   averageCookieSale: 2.3,
//   customersPerHour: function () {

//   },
//   cookiesPerHour: function () {

//   }
// };




// var lima = {
//   minCustomer: 2,
//   maxCustomer: 16,
//   averageCookieSale: 4.6,
//   customersPerHour: function () {

//   },
//   cookiesPerHour: function () {

//   }
// };