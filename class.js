class admin {

    username = '';
    password = "";
    email = '';

    constructor(_username,_email,_password){
        this.username = _username
        this.email = _email
        this.password = _password
    };

    displayadminprofile(){
        return this.username;
    }

}
const admin1 = new admin("rohit","rohit123@email.com","abc123")
console.log(admin1.displayadminprofile())
console.log(admin1)

//ENCAPSULATION

class bankaccount{
    #customername = '';
    #balance = '';

    constructor(customername,balance) {
        this.#customername = customername
        this.#balance = balance;
        Object.freeze(this);
    }
    displaydata(){
        return this.#customername;
    }
    
}
const customer01 = new bankaccount("defryan",100000);
console.log(customer01)
console.log(customer01.displaydata);
