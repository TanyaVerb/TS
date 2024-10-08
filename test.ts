const isBd: boolean = false;
let age: number = 40;
const userName: string = "Tanya";

//never- функция никогда не вернет результата
const createError = () => {
  throw new Error("Some error");
  while (true) {}
};

function logBdMsg(
  isBd: boolean,
  userName: string,
  age: number,
  someValue?: any
): string {
  if (isBd) {
    const mes = `Поздравляю ${userName.toUpperCase()}, вам ${age + 1} лет`;
    console.log(mes);
    return mes;
  } else if (!isBd) {
    return "Some";
  } else {
    return createError();
  }
}

// let someValue: any = "str";
// someValue = 2;
// someValue = false;

const jsonData = '{"title":"Hello world"}';

const titleObj: { title: string } = JSON.parse(jsonData);

const result = logBdMsg(isBd, userName, age);
console.log(titleObj.title);
//=======================================================

const currRate: string = "1.05";

const fetchCurr = (response: string): number => {
  const data: number = JSON.parse(response);
  return data;
};

function transferEurToUsd(
  available: boolean,
  amount: number,
  commission: number
): void {
  if (available) {
    let res = fetchCurr(currRate) * amount * commission;
    console.log(res);
  } else {
    console.log("Сейчас обмен недоступен");
  }
}

//------------------------------------------

let someVar: null = null;
let someVar2: undefined = undefined;

//=================================================
type TAnimal = "cat" | "dog";

let animal: TAnimal = "cat";

animal = "cat";

function getAnimalVoice(someAnimal: TAnimal): "may" | "gav" {
  switch (someAnimal) {
    case "cat":
      return "may";
    case "dog":
      return "gav";

    default:
      const nextAnimal: never = someAnimal; //never
      return nextAnimal;
  }
}

let result2 = getAnimalVoice("cat");
// console.log(result2);

//========================================================================
const tupleArray: Array<number> = [2, 2];
const tupleArray2: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];
const tupleArray3: string[] = ["1", "2"];

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

const tupleArray4: (boolean | number)[] = [true, 40];
tupleArray4.push(7);

const tupleArray5: [boolean, number, string, ...string[]] = [true, 40, "some"];
tupleArray5.push("next");

tupleArray5[3] = "new value";

const tupleArray6: [...boolean[], number, string] = [
  true,
  false,
  true,
  false,
  40,
  "str",
]; // не надо так делать!

function getPerson(): [string, number] {
  return ["Vlad", 32];
}

let user: [string, number?, boolean?];

user = ["str"];
user = ["str", 32];
user = ["str", 32, false];

// user[3]=false//er

type Person = [name: string, age: number];
let tanya: Person = ["Tanya", 35];
let tanya2: Person = ["Tanya", 35];

let t1 = tanya[0];
let t2 = tanya[1];

// const [name, age1] = tanya; //деструктуризация

//сужение типов
function getUserName2(user: (string | number)[]) {
  user.forEach((el) => {
    if (typeof el === "string") {
      el.toUpperCase();
    } else {
      el.toFixed();
    }
  });

  return name;
}
function getUserName([name, age1]: Person) {
  return name;
}

getUserName(tanya);

//==================================================================
type Animal = {
  name: string;
  voice: string;
  wool: boolean;
};
interface IAnimal {
  name: string;
  voice: string;
  wool: boolean;
}

type TCat = {
  climb: boolean;
} & Animal;

interface IDog extends Animal {
  friendly: boolean;
}

const cat: TCat = {
  name: "Murzik",
  voice: "may",
  wool: false,
  climb: true,
};

const dog: IDog = {
  name: "Rex",
  voice: "gav",
  wool: true,
  friendly: true,
};

//type guard
function isCat(pet: TCat | IDog): pet is TCat {
  return (pet as TCat).climb !== undefined;
}

function isDog(pet: TCat | IDog): pet is IDog {
  return (pet as IDog).friendly !== undefined;
}

function playWithPet(pet: TCat | IDog) {
  if (isDog(pet)) {
    pet.friendly;
    console.log("Играем с собакой");
  } else if (isCat(pet)) {
    pet.climb;
    console.log("Играем с котом");
  } else {
    let a: never;
  }
}

playWithPet(cat);
playWithPet(dog);

//******************************************************/
const box = document.querySelector(".box") as HTMLElement;
box.textContent = "some text";

const input = document.querySelector("input") as HTMLInputElement;
input.value;

const a = document.querySelector("a") as HTMLAnchorElement;
const listA = document.querySelectorAll("a") as NodeListOf<HTMLAnchorElement>;

// listA.forEach((el)=>{

// })

//========================================================================
//Деструктуризация типов

interface TuserDataForLog {
  isBirthday: boolean;
  userName: string;
  age: number;
  extraKey: string;
  message: {
    text: string;
  };
  cars: ["bmw", "volvo"];
}
const userDataForLog: TuserDataForLog = {
  isBirthday: true,
  userName: "Tanya",
  age: 35,
  extraKey: "some text",
  message: {
    text: "error",
  },
  cars: ["bmw", "volvo"],
};

type TlogUser = (data: TuserDataForLog) => void;
const copyLogUser: TlogUser = logUser;

copyLogUser(userDataForLog);

const copyLogUser2: TlogUser = function (data) {
  console.log(data.cars[0]);
};

function logUser({
  isBirthday,
  userName,
  age,
  extraKey,
  message: { text },
  cars: [car1, car2],
}: TuserDataForLog) {
  console.log(isBirthday);
  console.log(userName);
  console.log(age);
  console.log(extraKey);
  console.log(text);
  console.log(car1);
  console.log(car2);
}

logUser(userDataForLog);

type TServer = {
  protocol: "http" | "https";
  port: 3000 | 3001;
  log: (msg: string) => void;
};

const server: TServer = {
  protocol: "http", // 'https
  port: 3000,
  log(msg) {
    console.log(msg); //строка
  },
};

server.port;

type TStartServer = (
  protocol: TServer["protocol"],
  server: TServer["port"],
  log: TServer["log"]
) => string;

type TStartServer2 = (
  protocol: "https" | "http",
  server: number,
  log: (msg: string) => void
) => string;

const startServer = (
  protocol: "https" | "http",
  server: number,
  log: (msg: string) => void
): string => {
  console.log(`Server started on ${protocol}, server:${server}`);

  return "Start server";
};
const startServer2: TStartServer = (protocol, server, log) => {
  console.log(`Server started on ${protocol}, server:${server}`);

  return "Start server";
};

startServer(server.protocol, server.port, server.log);

//=============================================================
interface TStyles {
  [K: string]: string | number;
}
interface IStyles {
  [K: string]: string | number;
}

const styles: IStyles = {
  position: "relative",
  top: "0",
  left: "0",
};

//----------------
interface ICompany {
  name: string;
  price: number;
}

type Tkeys = "name" | "price";
type Tkeys2 = keyof ICompany;

const keys: Tkeys = "name"; //price

const conpanyData: ICompany = {
  name: "Google",
  price: 10000,
};

function getCompanyData(obj: ICompany, key: keyof ICompany) {
  console.log(obj[key]);
}

getCompanyData(conpanyData, "name");

//запросы типов
const PI = 3.14;

const clonePI: typeof PI = 3.14;

const dataFromBd = {
  water: 200,
  el: 350,
  price: "local",
} as const;

function checkData(data: typeof dataFromBd): boolean {
  const dataFromUser = {
    water: 200,
    el: 350,
  };

  return dataFromUser.water === data.water && dataFromUser.el === data.water;
}

checkData(dataFromBd);

const totalData: TotalWarehouse = {
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
const totalData2: TotalWarehouse = {
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

type ValidAmount = "empty" | number;

interface ClothesWarehouse {
  jackets: ValidAmount;
  hats: ValidAmount;
  socks: ValidAmount;
  pants: ValidAmount;
}

interface StationeryWarehouse {
  scissors: ValidAmount;
  paper: "empty" | boolean;
}

interface AppliancesWarehouse {
  dishwashers: ValidAmount;
  cookers: ValidAmount;
  mixers: ValidAmount;
}

interface TotalWarehouse
  extends ClothesWarehouse,
    StationeryWarehouse,
    AppliancesWarehouse {
  deficit: boolean;
  date: Date;
}

function printReport2(data: TotalWarehouse): string {
  const emptyItems = Object.entries(data)
    .filter(([key, value]) => value === "empty")
    .map(([key]) => key);
  if (emptyItems.length > 0) {
    return `Нужны следующие элементы одежды: ${emptyItems.join(", ")}`;
  } else {
    // console.log(`Все в наличие`);
    return `Все в наличие`;
  }
}

// let resultT = printReport(totalData);
// console.log(resultT);

// let resultR = printReport2(totalData);
// console.log(resultT);

// let resultR2 = printReport2(totalData2);
// console.log(resultT2);
interface IObj {
  [K: string]: string; //одинаковые ключи (строки)
}

type TObj = {
  key1: number;
  key2: string;
  key3: boolean;
};

type TDadaObj2 = {
  [k: string]: string;
};
const dataObj: IObj = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
  // key4: "value3",
};

type TData = string[][];

type TData2 = [string, string][];

//type Test = 'key1'|'key2'|'key3'
type TData1 = [keyof TObj, TObj[keyof TObj]][];

type Test = TObj[keyof TObj];

const data3: TData1 = [
  ["key1", 2],
  ["key2", "value2"],
  ["key3", false],
];

const data: [string, string | number | boolean][] = [
  ["key1", "value1"],
  ["key1", "value1"],
  ["key1", "value1"],
];

const data4: TData1 = Object.entries(dataObj) as TData1;
const data2: [string, string | number | boolean][] = Object.entries(dataObj);

const totalData3: TotalWarehouse = {
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

function printReport3(data: TotalWarehouse): string {
  let result: string = (
    Object.entries(data) as [
      [keyof TotalWarehouse, TotalWarehouse[keyof TotalWarehouse]]
    ]
  )

    // [['cookers', 'empty'], ['hats', 5]]
    .filter(([key, value]) => value === "empty")
    .reduce((acc, [key, value]) => `${acc} ${key},`, "");
  if (result.trim().length) {
    return `Нужны следующие элементы одежды: ${result.slice(0, -1)}!`;
  } else {
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

enum DIRECTION {
  TOP = "TOP",
  LEFT = "LEFT",
  BOTTOM = "BOTTOM",
  RIGHT = "RIGHT",
}

function startAnimation(direction: DIRECTION): void {
  if (direction === DIRECTION.TOP) {
  }
  switch (direction) {
    case DIRECTION.BOTTOM:
    case "TOP":
  }
}
startAnimation(DIRECTION.BOTTOM);

//Дженерики-шаблоны========================================================

function processingData2<T>(data: T): T {
  return data;
}

const processingData3 = <T>(data: T): T => {
  return data;
};

let res2 = processingData2<number>(2);
let res3 = processingData2<string>("2");

type TSomeResponse = {
  isValid: boolean;
};
type TSomeResponse2 = {
  isValid: string;
};

type TSomeResponse3<T> = {
  isValid: T;
};
interface TSomeResponse4<T, S> {
  isValid: T;
  status: S;
}

const someResponse: TSomeResponse4<boolean, string> = {
  isValid: true,
  status: "ok",
};
const someResponse2: TSomeResponse4<string, number> = {
  isValid: "true",
  status: 2,
};

const arr: Array<string> = [];
//arr.map()// встроенный дженерик
