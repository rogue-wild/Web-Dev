const accountId = 8371983;
let accountEmail = "vishnu@gmail.com";
var accountPassword = "43124"; //do not use because of issue in block and functional scope

accountCity = "Jaipur"; // should be this type of variable declaration bad practice

let accountState; //undefined variables because no value is assigned

//accountId = 2 // not allowed because it is a constant

accountEmail = "vb@vb.com";
accountPassword = "2121212";
accountCity = "Bengaluru";

console.log(accountId);
console.log(accountCity);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
// using table to log statements in a tabular structure 
// ┌─────────┬─────────────┐
// │ (index) │   Values    │
// ├─────────┼─────────────┤
// │    0    │   8371983   │
// │    1    │ 'vb@vb.com' │
// │    2    │  '2121212'  │
// │    3    │ 'Bengaluru' │
// │    4    │  undefined  │
// └─────────┴─────────────┘