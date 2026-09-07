const students =[
    {
        name : 'rohit',
        email : 'rohit123#email.com',
        age : ('05-06-2003'),
        score : 85
    },
    {
        name : 'dika',
        email : 'dika123@email.com',
        age : ('18-07-2003'),
        score : 80
    },
    {
        name : 'daus',
        email : 'daus12@gmail.com',
        age : ('21-10-2003'),
        score : 90
    },
];


function CalculateStudent(students){

    let Highestscore = students[0].score;
    let Lowestscore = students[0].score;
    totalscore = 0


    for(let student of students){
        if (student.score > Highestscore){
            Highestscore = student.score
        }
        else if (student.score < Lowestscore){
            Lowestscore = student.score
        }
        totalscore += student.score
    }

    let avaragescore = totalscore / students.length

    return{
        score :{
            highestscore : Highestscore,
            lowestscore : Lowestscore,
            avgscore : avaragescore,
        }
    };
}
console.log(CalculateStudent(students))


const kosmetik = [
    {
        namaproduk : 'masker',
        stokproduk : 120,
    },
    {
        namaproduk : 'shampoo',
        stokproduk : 150,
    },
    {
        namaproduk : 'sabun',
        stokproduk : 200,
    },
]

function CalculateStocks(kosmetik) {
    let higheststok = kosmetik[0].stokproduk
    let loweststok = kosmetik[0].stokproduk
    let totalstok = 0

    for(let skinker of kosmetik){
        if(skinker.stokproduk > higheststok){
            higheststok = skinker.stokproduk
        }
        if(skinker.stokproduk < loweststok){
            loweststok = skinker.stokproduk
        }
        totalstok += skinker.stokproduk;
    }
    let averagestok = totalstok / kosmetik.length

    return{
        stok:{
            highest : higheststok,
            lowest : loweststok,
            avg : averagestok
        }
    };
}
console.log(CalculateStocks(kosmetik))
