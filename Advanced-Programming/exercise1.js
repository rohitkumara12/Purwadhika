const student1 = [
    {
        name : 'rohit',
        email : 'rohit123@gmail.com'
    }
]

const student2 =[
    {
        name : 'alif',
        email : 'alif123@email.com'
    }
]

function mergeStudent(){
    

const gabungan = [...student1,...student2]
const result = []

for(const student of gabungan){
        const studentin = result.some(
            (item) => item.email == student.email
        );
        if (!studentin) {
            result.push(student)
        }
        }
        return result
    }
    console.log(mergeStudent())


