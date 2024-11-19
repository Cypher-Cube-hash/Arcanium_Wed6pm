export class Person{
    static pcount = 0;
    constructor(fname, lname, dob, gender, phone, email, trn, password){
        if (typeof dob === "string") {
            dob = new Date(dob);
        }
        if(!ageValidator(dob)) throw new Error("Must be 18 years and over");
        this._fname = fname;
        this._lname = lname;
        this._dob = dob;
        this._gender = gender;
        this._phone = phone;
        this._email = email;
        this._trn = trn;
        this._password = password;
        Person.pcount++;
        this.cart = {};
        this.invoices = [];
    }
    getters(attr){
        return this[`_${attr}`];
    }
    setters(attr, value){
        return this[`_${attr}`] = value;
    }
}

function ageValidator(birthday){
    let currentDate = new Date(); 
    let age = currentDate.getFullYear() - birthday.getFullYear();

    let monthDifference = currentDate.getMonth() - birthday.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < birthday.getDate())) {
        age--;
    }
    return age >= 18; 
}