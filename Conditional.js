//conditional
 
//if
 if (100 > 1){
    console.log("ok!");
 }
 
const score = 70;
 
if (score > 70){
    console.log("lulus!");
}


//if else 

if(score > 70){
    console.log("lulus!");
} else {
    console.log("tidak lulus");
}

const randominput = 123456;

if(typeof randominput === 'string'){
    conseole.log('input string');
} else{
    console.log('input number');
}

const description = 'purwadika';

if(description.length > 10){
    console.log('jumlah karakter terlalu panjang');
} else{
    console.log('Error');
}

//if else if else

const studentscore = 60

if(studentscore > 70){
    console.log('C')
} else if (studentscore > 80){
    console.log('B');
}else if (studentscore > 90){
    console.log('A')
} else{
    console.log('A++')
}

const tinggibadan = 190
const beratbadan = 85

if (tinggibadan == 170 && beratbadan > 60 && beratbadan < 65){
    console.log('Ideal')
} else if (tinggibadan > 170 && beratbadan > 70 && beratbadan < 90){
    console.log('ideal banget')
}