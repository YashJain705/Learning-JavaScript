const accountId = 144553
let accountEmail = "jyash@google.com"
var accountPassword = "12345"
accountCity = "Delhi"
let accountState;

// accountId = 2 // not allowed as const cannot be changed


accountEmail = "yj@yj.com"
accountPassword = "21212121"
accountCity = "Jaipur"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
simply always use let and const keyword for defining and declaring variables
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])