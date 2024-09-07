const account_Id = 14453
let accountEmail = "pankaj@gmail.com"
var accountPassword = "12345"
accountCity = "Gorakhpur"
let accountState;
// account_Id = 2 not allowed
console.log(account_Id);
accountEmail = "hc@hc.com"
accountPassword = "2323234"
accountCity = "kanpur"

console.table([account_Id, accountEmail, accountPassword, accountCity, accountState])

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/