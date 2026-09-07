//Indirict Function

function sum(sum1 ,sum2 ,callback){
    const result  = sum1 + sum2 ;
    return callback(result); //output 40
}

function Output(result){
    console.log(result);
}

sum(30,10,Output);

//DIRECT CALLBACK


// function sum(num1,num2,callback){
//     const result = num1+num2;
//     return callback(result);
// }

// Sum(10,30(result))


{
    const fruits = ["apel","nanas","jeruk"];
    
    function Delete(callback) {
        setTimeout(() =>{
            fruits.pop();
            return callback();

        },3000)
    }

    function Get(){
        setTimeout(()=>{
            console.log(fruits);
        },1000);
    }
    Delete(() => Delete(Get)); //callback hell
}