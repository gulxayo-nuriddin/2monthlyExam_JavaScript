// import { users } from "./data.js";


// function addUser(arr, name, lastname, age, job, email, password) {
//   let newUser = {
   
//     id: arr.length === 0 ? 1 : arr.at(-1).id + 1,
//     name,
//     lastname,
//     age,
//     job,
//     email,
//     password,
//   };

//   arr.push(newUser);

//   return newUser;
// }


// console.log("Qo'shishdan oldingi foydalanuvchilar soni:", users.length);

// addUser(
//   users,
//   "Toshmat",
//   "Eshmatov",
//    56,
//   "bekorchi",
//   "toshmat_eshmatov@gmail.com",
//   "0000"
// );

// console.log("Qo'shilgandan keyingi oxirgi foydalanuvchi:", users.at(-1));


// import {users} from "./data.js";

// function deleteUser(id) {
//     let index = users.findIndex(user => user.id === id);

//     if (index === -1) {
//         console.log("User not found");
//         return ;
//     }

//     let updateUsers = users.filter(user => user.id !== id);

//     console.log("Users successfully deleted");
//     console.log("New users' list:", updatedUsers);
// }

// deleteUser(3);





// 2-oylik imithon masalalari shu yerdan pastda boshlanadi. 

// 100-masala

// function Namuna100(str) {
//     let arr = str.split("*");
//     let tag = arr[0];
//     let count = arr[1];
//     let res = `<${tag}></${tag}>`;
//     return res.repeat(count);
// }
// console.log("100-masala:", Namuna100("div*2"));


// 101-masala

// function Namuna101(num) {
//     let sum = 0;
//     for (let i = 1; i <= num; i++) {
//         sum += i;
//     }
//     return sum;
// }
// console.log("101-masala:", Namuna101(3));


// 102-masala

// function Namuna102(num, obj) {
//     if (num >= obj.min && num <= obj.max) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log("102-masala:", Namuna102(4, { min: 0, max: 5 }));



// 103-masala

// function Namuna103(num) {
//     let kv = num * num;
//     let strKv = String(kv);
//     let lastChar = strKv[strKv.length - 1];
//     return Number(lastChar) === num;
// }
// console.log("103-masala:", Namuna103(5));


// 104-masala

// function Namuna104(arr) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         newArr.push(arr[i] + i);
//     }
//     return newArr;
// }
// console.log("104-masala:", Namuna104([1, 2, 3, 4, 5]));


// 105-masala

// function Namuna105(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== "cola" && arr[i] !== "fanta") {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }
// console.log("105-masala:", Namuna105(["fanta", "cola", "water"]));


// 106-masala

// function Namuna106(num) {
//     let str = String(num);
//     return str.length;
// }
// console.log("106-masala:", Namuna106(7154));



// 107-masala

// function Namuna107(num) {
//     let str = String(num);
//     let arr = str.split("");
//     let sortedArr = arr.sort(function(a, b) {
//         return b - a;
//     });
//     let joinedStr = sortedArr.join("");
//     return Number(joinedStr);
// }
// console.log("107-masala:", Namuna107(123));


// 108-masala

// function Namuna108(min, max) {
//     let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
//     return randomNum;
// }
// console.log("108-masala:", Namuna108(5, 9));


// 109-masala

// function Namuna109(num) {
//     let str = String(num);
//     let len = str.length;
//     let sum = 0;
//     for (let i = 0; i < len; i++) {
//         sum += Math.pow(Number(str[i]), len);
//     }
//     return sum === num;
// }
// console.log("109-masala:", Namuna109(153));


// 110-masala

// function Namuna110(str) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] >= "A" && str[i] <= "Z") {
//             count++;
//         }
//     }
//     return count;
// }
// console.log("110-masala:", Namuna110("fvLzpxmgXSDrobbgMVrc"));


