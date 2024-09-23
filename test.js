"use strict";
const isBd = false;
let age = 40;
const userName = "Tanya";
//never- функция никогда не вернет результата
const createError = () => {
    throw new Error("Some error");
    while (true) { }
};
function logBdMsg(isBd, userName, age, someValue) {
    if (isBd) {
        const mes = `Поздравляю ${userName.toUpperCase()}, вам ${age + 1} лет`;
        console.log(mes);
        return mes;
    }
    else if (!isBd) {
        return "Some";
    }
    else {
        return createError();
    }
}
// let someValue: any = "str";
// someValue = 2;
// someValue = false;
const jsonData = '{"title":"Hello world"}';
const titleObj = JSON.parse(jsonData);
const result = logBdMsg(isBd, userName, age);
console.log(titleObj.title);
//=======================================================
const currRate = "1.05";
const fetchCurr = (response) => {
    const data = JSON.parse(response);
    return data;
};
function transferEurToUsd(available, amount, commission) {
    if (available) {
        let res = fetchCurr(currRate) * amount * commission;
        console.log(res);
    }
    else {
        console.log("Сейчас обмен недоступен");
    }
}
//------------------------------------------
let someVar = null;
let someVar2 = undefined;
let animal = "cat";
animal = "cat";
function getAnimalVoice(someAnimal) {
    switch (someAnimal) {
        case "cat":
            return "may";
        case "dog":
            return "gav";
        default:
            const nextAnimal = someAnimal; //never
            return nextAnimal;
    }
}
let result2 = getAnimalVoice("cat");
// console.log(result2);
//========================================================================
const tupleArray = [2, 2];
const tupleArray2 = [
    [1, 2, 3],
    [4, 5, 6],
];
const tupleArray3 = ["1", "2"];
const itemByIndex = tupleArray3[0];
tupleArray2.push([2, 34, 4]);
const result1 = tupleArray3.map((el) => {
    return el;
});
const obj = {
    name: "Vlad",
    age: 32,
    job: true,
};
const result3 = Object.entries(obj);
const tupleArray4 = [true, 40];
tupleArray4.push(7);
const tupleArray5 = [true, 40, "some"];
tupleArray5.push("next");
tupleArray5[3] = "new value";
const tupleArray6 = [
    true,
    false,
    true,
    false,
    40,
    "str",
]; // не надо так делать!
function getPerson() {
    return ["Vlad", 32];
}
let user;
user = ["str"];
user = ["str", 32];
user = ["str", 32, false];
let tanya = ["Tanya", 35];
let tanya2 = ["Tanya", 35];
let t1 = tanya[0];
let t2 = tanya[1];
// const [name, age1] = tanya; //деструктуризация
//сужение типов
function getUserName2(user) {
    user.forEach((el) => {
        if (typeof el === "string") {
            el.toUpperCase();
        }
        else {
            el.toFixed();
        }
    });
    return name;
}
function getUserName([name, age1]) {
    return name;
}
getUserName(tanya);
const cat = {
    name: "Murzik",
    voice: "may",
    wool: false,
    climb: true,
};
const dog = {
    name: "Rex",
    voice: "gav",
    wool: true,
    friendly: true,
};
//type guard
function isCat(pet) {
    return pet.climb !== undefined;
}
function isDog(pet) {
    return pet.friendly !== undefined;
}
function playWithPet(pet) {
    if (isDog(pet)) {
        pet.friendly;
        console.log("Играем с собакой");
    }
    else if (isCat(pet)) {
        pet.climb;
        console.log("Играем с котом");
    }
    else {
        let a;
    }
}
playWithPet(cat);
playWithPet(dog);
//******************************************************/
const box = document.querySelector(".box");
box.textContent = "some text";
const input = document.querySelector("input");
input.value;
const a = document.querySelector("a");
const listA = document.querySelectorAll("a");
const userDataForLog = {
    isBirthday: true,
    userName: "Tanya",
    age: 35,
    extraKey: "some text",
    message: {
        text: "error",
    },
    cars: ["bmw", "volvo"],
};
const copyLogUser = logUser;
copyLogUser(userDataForLog);
const copyLogUser2 = function (data) {
    console.log(data.cars[0]);
};
function logUser({ isBirthday, userName, age, extraKey, message: { text }, cars: [car1, car2], }) {
    console.log(isBirthday);
    console.log(userName);
    console.log(age);
    console.log(extraKey);
    console.log(text);
    console.log(car1);
    console.log(car2);
}
logUser(userDataForLog);
const server = {
    protocol: "http", // 'https
    port: 3000,
    log(msg) {
        console.log(msg); //строка
    },
};
server.port;
const startServer = (protocol, server, log) => {
    console.log(`Server started on ${protocol}, server:${server}`);
    return "Start server";
};
const startServer2 = (protocol, server, log) => {
    console.log(`Server started on ${protocol}, server:${server}`);
    return "Start server";
};
startServer(server.protocol, server.port, server.log);
const styles = {
    position: "relative",
    top: "0",
    left: "0",
};
const keys = "name"; //price
const conpanyData = {
    name: "Google",
    price: 10000,
};
function getCompanyData(obj, key) {
    console.log(obj[key]);
}
getCompanyData(conpanyData, "name");
//запросы типов
const PI = 3.14;
const clonePI = 3.14;
const dataFromBd = {
    water: 200,
    el: 350,
    price: "local",
};
function checkData(data) {
    const dataFromUser = {
        water: 200,
        el: 350,
    };
    return dataFromUser.water === data.water && dataFromUser.el === data.water;
}
checkData(dataFromBd);
const totalData = {
    jackets: "empty",
    hats: 5,
    socks: 6,
    pants: 255,
    scissors: 8,
    paper: "empty",
    dishwashers: 8,
    cookers: "empty",
    mixers: "empty",
    deficit: true,
    date: new Date(),
};
const totalData2 = {
    jackets: 15,
    hats: 5,
    socks: 6,
    pants: 255,
    scissors: 8,
    paper: true,
    dishwashers: 8,
    cookers: 15,
    mixers: 17,
    deficit: true,
    date: new Date(),
};
function printReport2(data) {
    const emptyItems = Object.entries(data)
        .filter(([key, value]) => value === "empty")
        .map(([key]) => key);
    if (emptyItems.length > 0) {
        return `Нужны следующие элементы одежды: ${emptyItems.join(", ")}`;
    }
    else {
        // console.log(`Все в наличие`);
        return `Все в наличие`;
    }
}
const dataObj = {
    key1: "value1",
    key2: "value2",
    key3: "value3",
    // key4: "value3",
};
const data3 = [
    ["key1", 2],
    ["key2", "value2"],
    ["key3", false],
];
const data = [
    ["key1", "value1"],
    ["key1", "value1"],
    ["key1", "value1"],
];
const data4 = Object.entries(dataObj);
const data2 = Object.entries(dataObj);
const totalData3 = {
    jackets: 15,
    hats: 5,
    socks: 6,
    pants: 255,
    scissors: 8,
    paper: "empty",
    dishwashers: "empty",
    cookers: "empty",
    mixers: 17,
    deficit: true,
    date: new Date(),
};
function printReport3(data) {
    let result = Object.entries(data)
        // [['cookers', 'empty'], ['hats', 5]]
        .filter(([key, value]) => value === "empty")
        .reduce((acc, [key, value]) => `${acc} ${key},`, "");
    if (result.trim().length) {
        return `Нужны следующие элементы одежды: ${result.slice(0, -1)}!`;
    }
    else {
        return "Все в наличии";
    }
    //   .filter(([key, value]) => value === "empty")
    //   .reduce((acc, [key, value]) => `${acc} ${key}, `, "")
    //   .trim();
    // if (result.length > 0) {
    //   let result2 = result.slice(0, -1);
    //   return `Нужны следующие элементы одежды: ${result2}!`;
    // } else {
    //   return "Все в наличии";
    // }
}
printReport3(totalData3);
let list = printReport3(totalData3);
console.log(list);
//==================константы enams=======================
// enum STATUS {
//     ERROR,//0
//     SUCCES,//1
//     PROCESSING//2
// }
// console.log(STATUS.ERROR===0)
// console.log(STATUS[1])
// enum STATUS2 {
//     ERROR ='ERROR',//0
//     SUCCES = 'SUCCES',//1
//     PROCESSING ='PROCESSING'//2
// }
// console.log(STATUS2.ERROR)
//console.log(STATUS2[2]) Ошибка
var DIRECTION;
(function (DIRECTION) {
    DIRECTION["TOP"] = "TOP";
    DIRECTION["LEFT"] = "LEFT";
    DIRECTION["BOTTOM"] = "BOTTOM";
    DIRECTION["RIGHT"] = "RIGHT";
})(DIRECTION || (DIRECTION = {}));
function startAnimation(direction) {
    if (direction === DIRECTION.TOP) {
    }
    switch (direction) {
        case DIRECTION.BOTTOM:
        case "TOP":
    }
}
startAnimation(DIRECTION.BOTTOM);
//Дженерики-шаблоны========================================================
function processingData2(data) {
    return data;
}
const processingData3 = (data) => {
    return data;
};
let res2 = processingData2(2);
let res3 = processingData2("2");
const someResponse = {
    isValid: true,
    status: "ok",
};
const someResponse2 = {
    isValid: "true",
    status: 2,
};
const arr = [];
//arr.map()// встроенный дженерик
