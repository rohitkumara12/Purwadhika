const user = {
    Username : "ian",
    Password : 'abc12345',
    Isverified : true,
}

const Profile = new Object();
Profile.fullname = 'Defryan',
Profile.Address = 'GOP-09',
Profile.Phone = '087811112222';

console.log(Profile);
console.log(user);


//CRUD 
const student ={
    name : 'ian',
    address : 'makassar',
};

student.phone = '081322221111'
console.log(student);

console.log(student.address) //makassar

delete student.name;
delete student.address
console.log(student);

const car = {
    brand : "honda",
    type : "civic"
};

car['brand'] // honda

car['type'] = 'jazz';

delete car['type'];
console.log(car)

//OPTIONAL CHAINING

const admin = {
    username : "defryan",
    Password : "BCD12345",
}

console.log(admin?.username);
console.log(admin?.Password);
console.log(admin?.address?.province);


//FOR IN LOOP

const products = {
    name : "indomie",
    price : 3000,
    weight : 150
}

for(let key in products){
    console.log(key) // 1.name
    console.log(products[key]) // products[name] = indomie
}