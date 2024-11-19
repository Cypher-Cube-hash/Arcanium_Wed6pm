import {Person} from "./class.user.js"


let submit_btn = document.querySelector("#reg_btn");

let resp = false;
try {
    let register = JSON.parse(localStorage.getItem("RegistrationData")) || [];
    
    submit_btn.addEventListener("click", function(event){
        event.preventDefault();
        let first_name = document.querySelector("#firstname").value;
        let last_name = document.querySelector("#lastname").value;
        let d_o_b = document.querySelector("#dob").value;
        let gender = document.getElementsByName("gender").value;
        let phone = document.querySelector("#phone").value;
        let email = document.querySelector("#email").value;
        let trn = document.querySelector("#trn").value;
        let password = document.querySelector("#pass").value;

        let person = new Person(
                first_name,
                last_name,
                d_o_b,
                gender,
                phone,
                email,
                trn,
                password
        );

        register.push(person);
        localStorage.setItem("RegistrationData", JSON.stringify(register));
        resp = true;
        if(resp){
            window.location.href = "login.page.html";
        }
});
} catch (error) {
    window.alert(error.message);
}