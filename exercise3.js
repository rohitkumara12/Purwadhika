   class student  {

    nama = '';
    email = '';
    birthdate = '';
    score = 0;

    constructor(nama,email,birthdate,score){
        this.nama = nama
        this.email = email
        this.birthdate = birthdate;
        this.score = score;
    }
    get convertage(){
        return new Date().getFullYear - new Date(this.birthdate).getFullYear();
    }
   }

   const students = [
    new student ("ian", "ian@gmail.com","2002-01-01",90),
    new student("riky","riky@gmail.com","2001-12-01",80),
    new student("jovin","jovin@email.com", "2002-10-15",70),
   ];

   function calculate(_students){
    const sortedstudentscore = _students.sort ((a,b) => a.score - b.score);
    const averagestudentscore = _students.reduce((acc,item) => acc + item.score,0 );

    const sortstudentsage = _students.sort((a,b) => a.convertage - b.convertage,0);
    const avarageStudentage = _students.reduce((acc,item) => acc + item?.convertage,0,);
    return {
        score : {
            highest : sortedstudentscore [sortedstudentscore.length - 1],
            lowest : sortedstudentscore[0],
            average : averagestudentscore / sortedstudentscore.length
        },
        age :{
            highest : sortstudentsage[sortstudentsage.length -1 ],
            lowest : sortstudentsage[0],
            average : averagestudentscore / sortstudentsage.length


        }
    }
   }
   console.log(calculate(students))
   