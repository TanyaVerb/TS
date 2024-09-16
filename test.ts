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
let tanya2:  = ["Tanya", 35];


let t1 = tanya[0]
let t2 = tanya[1]

const [name,age1] = tanya //деструктуризация


//сужение типов
function getUserName2(user:(string|number)[]){
  user.forEach(el=>{
    if (typeof el ==='string'){
      el.toUpperCase()
    }else{
      el.toFixed()
    }
  })

return name
}
function getUserName([name,age1]:Person){
  
return name
}

getUserName(tanya)

//==================================================================
type Animal = 
{
   name:string,
  voice: string,
  wool:boolean,
  
}
interface IAnimal{
  name:string,
  voice: string,
  wool:boolean,
  
}

type TCat={
climb:boolean
}& Animal


interface IDog extends Animal{
friendly:boolean
}


const cat:TCat = {
  name:'Murzik',
  voice: 'may',
  wool:false,
  climb:true
}




const dog:IDog = {
name:'Rex',
voice: 'gav',
wool:true,
 friendly:true,

}

//type guard
function isCat(pet:TCat|IDog):pet is TCat{
  return (pet as TCat).climb !==undefined

}


function isDog(pet:TCat|IDog):pet is IDog{
  return (pet as IDog).friendly !==undefined

}



function playWithPet(pet:TCat|IDog){
if (isDog(pet)){
pet.friendly
 console.log('Играем с собакой');
 
  
}else if  (isCat(pet)) {
pet.climb
 console.log('Играем с котом');
 
}
else{
  let a:never
}}

playWithPet(cat)
playWithPet(dog)

//******************************************************/
const box = document.querySelector('.box') as HTMLElement
box.textContent= 'some text'

const input =document.querySelector('input') as HTMLInputElement
input.value

const a =document.querySelector('a')  as HTMLAnchorElement
const listA =document.querySelectorAll('a')  as NodeListOf <HTMLAnchorElement>


listA.forEach((el)=>{

})