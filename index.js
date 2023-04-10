// Question 1:
// let num1 = prompt("Enter a first number");
// let num2 = prompt("Enter a second number");
// if(num1 > num2){
// console.log(num1 + "is larger");
// }
// else if(num2 > num1){
//     console.log(num2 + "is larger");
// }
// else{
//     console.log("The numbers are equals");
// }
// Question 2:
// let num = prompt("Enter a number")
// if(num>0){
//     alert("Nmber is Positive");
// }
// else if(num<0){
// alert("Number is Negative");
// }
// else{
//     alert("Number is Zero");
// }
// Question 3:
// let num1 = prompt("Enter First number");
// let num2 = prompt("Enter Second number");
// let num3 = prompt("Enter Third number");
// let num4 = prompt("Enter Fourth number");
// let num5 = prompt("Enter Fifth number");
// let largestNum = num1;
// if(num2 > largestNum){
//     largestNum = num2;
// }
// if(num3 > largestNum){
//     largestNum = num3;
// }
// if(num4 > largestNum){
//     largestNum = num4;
// }
// if(num5 > largestNum){
//     largestNum = num5;
// }
// console.log("The Largest Number is " + largestNum);
// Question 4:
// for(let i = 0; i <= 15; i++){
//     if(i % 2 === 0){
//         console.log(i + " is even ");
//     }
//     else{
//         console.log(i + " is odd ");
//     }
// }
// Question 5:
// let marks = prompt("Enter your marks:");
// let grade = "";

// if (marks < 60) {
//   grade = "F";
// } else if (marks < 70) {
//   grade = "D";
// } else if (marks < 80) {
//   grade = "C";
// } else if (marks < 90) {
//   grade = "B";
// } else {
//   grade = "A";
// }

// console.log("Your marks are " + marks + ", Your Grade is " + grade + ".");
// Question 6:
// for(let i = 1; i <=100; i++){
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log("FizzBuzz");
//     }
//     else if (i % 3 === 0){
//         console.log("Fizz");
//     }
//     else if (i % 5 === 0){
//         console.log("Buzz");
//     }
//     else{
//         console.log(i);
//     }

// }
// Question 7 :
// let rows = 5;
// for(let i = 1; i <= rows; i++ ){
//     let pattern = "";
//     for(let j = 1; j <= i; j++){
//         pattern += "*";
//     }
//     console.log(pattern);
// }
// Assignment # 2;
// Question 1:
function createAdder(num){
    return function(x){
        return x + num;
    };
}
const addFive = createAdder(5);
console.log(addFive(10));
console.log(addFive(20));

// Question 2:

function searchArray(arr, val){
    if(arr.lenght === 0){
        return false;
    }else if (arr[0]===val){
        return true;
    }else{
        return searchArray(arr.slice(1), val);
    }
}
const arr = [1, 2, 3, 4, 5]; 
console.log(searchArray(arr,3));

// Question 3:

function addParagraph(text){
    const newParagraph = document.createElement('P');
    newParagraph.textContent = text;
    document.body.appendChild(new newParagraph);
    }
// Question 4:

    function addListItem(text) {
        const newListItem = document.createElement('li');
        newListItem.textContent = text;
        const unorderedList = document.querySelector('ul');
        unorderedList.appendChild(newListItem);
      }

// Question 5:

function changeBackgroundColor(element, color){
element.style.BackgroundColor = color;
}
const myElement = document.getElementById('myelement');
changeBackgroundColor(myElement, 'red');

// Question 6:

function saveObjectToLocalStorage(key, obj){
    localStorage.setItem(key, JSON.stringify(obj))

}
const myObject = {name: 'john', age: 30};
saveObjectToLocalStorage('myKey', myObject); 

Question 7


function getObjectFromLocalStorage(key) {
    const obj = localStorage.getItem(key);
    return obj ? JSON.parse(obj) : null;
  }
  const myObject = getObjectFromLocalStorage('myKey');

  Question 8:

  function saveObjectPropertiesToLocalStorage(obj) {
    // Save object properties to localStorage
    for (const key in obj) {
      localStorage.setItem(key, JSON.stringify(obj[key]));
    }
  
    // Retrieve object properties from localStorage and return a new object
    const newObj = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      newObj[key] = JSON.parse(localStorage.getItem(key));
    }
    return newObj;
  }
   const myObject = { name: 'John', age: 30 };
  const newObj = saveObjectPropertiesToLocalStorage(myObject);
  console.log(newObj); // { name: 'John', age: 30 }
   











