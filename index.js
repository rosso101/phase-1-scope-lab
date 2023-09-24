// Write your solution in this file!
var customerName = "bob"

function upperCaseCustomerName() {
    if (typeof customerName === 'string') {
      customerName = customerName.toUpperCase();
    }
  }

let bestCustomer = 'not bob';

function overwriteBestCustomer() {
  bestCustomer = 'new best customer';
}

overwriteBestCustomer();

console.log(bestCustomer);

const leastFavoriteCustomer = 'James';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'victor'; 
}

changeLeastFavoriteCustomer();
