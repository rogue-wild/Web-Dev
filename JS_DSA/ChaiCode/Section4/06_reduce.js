const myNums = [1, 2, 3];

// const myTotal = myNums.reduce((accumulator, currentNumber) => {
//         console.log(`accumulator: ${accumulator}, currentNumber: ${currentNumber}`);
//   return accumulator + currentNumber;
// }, 0);// "0" is the initial value of the accumulator


const myTotal = myNums.reduce((accumulator, currentNumber) => accumulator + currentNumber, 0);// "0" is the initial value of the accumulator

console.log(myTotal);


const shoppingCart = [
        //json for itemName and price
        {
                itemName: "iPhone 12 Pro",
                price: 999.99,
                quantity: 1
        },
        {
                itemName: "MacBook Pro",
                price: 1299.99,
                quantity: 1
        },
        {
                itemName: "AirPods Pro",
                price: 249.99,
                quantity: 1
        },
        {
                itemName: "iPad Pro",
                price: 999.99,
                quantity: 1
        } ];

const priceToPay = shoppingCart.reduce((accumulator, cartItem) => accumulator + cartItem.price * cartItem.quantity, 0);       

console.log(priceToPay);

//reduce method is used to reduce an array to a single value (number, string, object, array, etc.) by executing a reducer function for each item in the array.

//The reducer function takes four arguments:
//accumulator
//currentValue
//currentIndex
//array

//The reducer function's returned value is assigned to the accumulator,whose value is remembered across each iteration throughout the array,and ultimately becomes the final, single resulting value.
