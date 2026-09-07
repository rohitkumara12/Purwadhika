class student {
    name = '';
    score = '';


    constructor (name,score){
        this.name = name
        this.score = score
    }
};

const students = [
    new student("rohit",90,),
    new student("roshit",80,),
    new student("rohan",70),
]

function CalculateStudent(_students){

    const sortedStudentScore = [..._students].sort((a,b) => a.score - b.score,0);
    const totalScore = [..._students].reduce((c,d) => c + d.score,0 )
    const AvarageScore = totalScore / _students.length;
    const abaoveAvarage = _students.filter(
        student => student.score > AvarageScore
    )
    // const AboveAvarage = _students.filter(
        
    // )

    return{
        score :{
            highest : sortedStudentScore[sortedStudentScore.length - 1],
            lowest : sortedStudentScore[0],
            avg :  AvarageScore[0],
            abaoveavg : abaoveAvarage[0]
            

        }
    }

}
console.log(CalculateStudent(students))



