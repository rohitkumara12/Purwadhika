// const products = [
//     {
//         name : "masker",
//         category : "skincare",
//         price : 120000,
//         quantity : 3,
//     },
//     {
//         name : "lipstick",
//         category : "skincare",
//         price : 90000,
//         quantity : 2,

//     },
//     {
//         name : "shampoo",
//         category : "bodycare",
//         price : 150000,
//         quantity : 1,
//     },
// ];

// function Skincare(products){

//     let result = []
//     let total = 0

//     for (let product of products){
//         if(product.category === "skincare"){
//             result.push(product)  
//         }
//         total += product.price * product.quantity
//     }
//     return result;

// }
// console.log(Skincare(products))

// // const cart = [
// //     {
// //         name : "keyboard",
// //         price : 300000,
// //         quantity : 2,
// //     },
// //     {
// //         name : "mouse",
// //         price : 150000,
// //         quantity : 3,
// //     },
// //     {
// //         name : "headset",
// //         price : 200000,
// //         quantity  : 2,
// //     },
// // ];

// // function CountingCart(cart){
// //     let total = 0

// //     for(let item of cart){
// //         total += item.price * item.quantity
// //     }
// //     return total =  total
// // }
// // console.log(CountingCart(cart))


const products = [
    {
        name : "masker",
        stocks : 120,
    },
    {
        name : "lipstik",
        stocks : 50,
    },
    {
        name : "shampoo",
        stocks : 30,
    },
];

function CountingStocks(products) {
    const stok = []

    for(let product of products){
        if (product.stocks < 50) {
            stok.push(product)
        }
        return{
            stok : stok{
                product = product.name
                stok = product.stocks
            }
        }
    }

}
