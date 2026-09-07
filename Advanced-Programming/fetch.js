// fetch ("https://purwadhika.com/")
// .then((Response) => Response.json())
// .then((data)=>{
//     console.log(data)
// })


async function FetchUsers(){

    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/users",{
            method : 'GET',
        });
        
        if (!res.ok) throw new Error(res);
        const data = await res.json();

    } catch (error){
        console.log('error')
        console.log(error)
    }
}
FetchUsers(data);