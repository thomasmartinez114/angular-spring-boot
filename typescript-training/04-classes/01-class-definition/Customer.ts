class Customer {

    firstName: string;
    lastName: string;
}

// create instance of the class
let myCustomer = new Customer();

myCustomer.firstName = 'Martin';
myCustomer.lastName = 'Dixon';

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);