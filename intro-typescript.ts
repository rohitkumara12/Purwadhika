//VARIABLE 

let fullname : string= 'defryan';
let nilai : number = 80;
let isGraduated : boolean | number = false;
isGraduated = 0.15;
console.log(fullname)
console.log(score)
console.log(isGraduated);
let point : any  = 111;
point = ''


//FUNCTION

function sum(num1: number , num2: number ){
    return num1 + num2;
};

sum(10,11)

//ARRAY
const numbers : number[] = [100,1,100];
const fruits : string[] = ["nanas","apel","mangga"];
const randoms : any = ["apel",100,true,"anggur"]


//OBJECT 
//INTERFACE 
interface Student {
    fullname : string ;
    age : number;
    isGraduated : boolean;
}
const student : Student = {
    fullname : '',
    age : 0 ,
    isGraduated : false,
}

//TYPES

type User = {
    username : string;
    password : string;
    email : string;
}

const user : User = {
    username: '',
    password: '',
    email : '',
}

//ARRAY OF OBJECT 
type UserNew = {
    username  : string;
    password  : string;
    email : string;
    isVerified : boolean;
    phoneNumber? :string
}