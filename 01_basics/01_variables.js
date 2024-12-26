const accountId = 144553
let accountEmail = "test123@gmail.com"
var accountPassword = "123450"
accountCity = "Jaipur"
let accountState 
// accountId = 2 //not allowed

accountEmail = "ts@gmail.com"
accountPassword = "888"
accountCity = "Bengaluru"

/*
Prefer not to use var
beacuse of issue in block scope
*/
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
