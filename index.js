var customerName = 'bob';
const leastFavoriteCustomer = 'frank';

function firstFunc() {
    return customerName;
}
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
  }
function setBestCustomer(){
    bestCustomer = 'not bob';
}
 function overwriteBestCustomer() {
     bestCustomer = 'maybe bob';
 }
 function changeLeastFavoriteCustomer() {
     leastFavoriteCustomer = 'maybe frank';
 }