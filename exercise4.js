const products = [
    {
        nama : 'indomie',
        price : 4000,
        stok : 10,
    },
    {
        nama : 'chocolatos',
        price : 3000,
        stok : 50,
    },
    {
        nama : 'Ultra Milk',
        price : 6000,
        stok : 20,
    },
];

function CalculateProducts(_products) {
    const sortedProductprice =[..._products].sort((a,b) => a.price - b.price);
    const avarageProductprice = _products.reduce((item,produk) => item + produk.price,0);
    const sortedProductStok = [..._products].sort((c,d) => c.stok - d.stok,0 );

    return {
        price :{

            highestPrice : sortedProductprice[sortedProductprice.length - 1],
            lowestprice : sortedProductprice[0],
            average : avarageProductprice/ sortedProductprice.length
        },
        stock :{
            highestStock : sortedProductStok[sortedProductStok.length - 1],
            lowestStock : sortedProductStok[0],

        }
    }

}
console.log(CalculateProducts(products))