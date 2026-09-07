const apparels = ['kelme','adidas']

const deleteData = () =>{
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if (apparels.length === 0){
                return reject ('apparels Data Is Empty');
            }
            apparels.pop()
            return resolve (apparels)

        },3000);
    });
}

const getData = () =>{
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            if (apparels.length === 0){
                return reject ('apparels Data is empty');
            }
            return resolve(apparels)
        },1000);
    });
}

async function main(){
    //declarative 

    try{
        for (let i = 1 ; i <= 1000 ; i++){
            const res = await deleteData();
            console.log(res)
        }
        const  res2 = await getData();
        console.log(res2);
    } catch(error){
        console.log('error')
        console.log(error);
    }
}
main()

const second = async () =>{
    //arrow
};

const third = async function(){
    //Expression
};