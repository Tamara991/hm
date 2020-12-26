var OnePhonePrice = 119.95;
var TaxRate=5;
var TotalPhonePrice = null;
var PricePlusTax = null;
var tax = null;

console.log("One Phone Price is:");
console.log(OnePhonePrice);

TotalPhonePrice=OnePhonePrice*30;
console.log("Total Price for 30 phones is:");
console.log(TotalPhonePrice);

tax=TotalPhonePrice*5;
console.log("The value of tax is:");
console.log(tax);
 
PricePlusTax=TotalPhonePrice+tax;
console.log("The price of 30 phones plus tax is:");
console.log(PricePlusTax);



