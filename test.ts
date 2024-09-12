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
console.log(result2);
