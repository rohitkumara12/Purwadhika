function SwitchData(data) {
    result = []
    for (const student of data){

    for (const key in student){
        console.log(key)
        console.log(student[key])

        }
    }
}
SwitchData([
    {
        name : 'david',
        age : 20,
    }
])



