let appId = 'abc';
const button = document.querySelector('button')!;

function add(n1: number, n2: number) {
  if (n1 + n2 > 0) {
    return n1 + n2;
  }
  return;
}

function clickHandler(message: string) {
  // let userName = 'Max';
  console.log('Clicked! ' + message);
}
// a comment
if (button) {
  button.addEventListener('click', clickHandler.bind(null, "You're welcome!"));
}

//do not use var, global scope in javascript

//function 
const addFunc = function (a:number, b:number){

}

const addFunc2 = (a:number, b:number) => {

}

const printOut0 = function(a:number |string){
  console.log(a);
}

const printOut1 = (a:number | string) => {
  console.log(a);
}

const printOut2 = (output:number | string) => console.log(output);

//const printOut3 = output => console.log(output);

const printOut3:(a:number | string) => void = output => console.log(output);


const button2 = document.querySelector('button')
button2?.addEventListener('click', event => console.log(event));


//spread operator

const hobbies  = ['Sport','Walk']
const activeHobbies = [];
activeHobbies.push(...hobbies);

//
const person = {
  name:'asd',
  age:12
}

const copiedPerson = {...person}

const [hoby1, hoby2,...rest] = hobbies;




