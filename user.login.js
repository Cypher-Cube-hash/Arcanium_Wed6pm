let personsVerify = JSON.parse(localStorage.getItem("RegistrationData"));

let trys = 1;
document.querySelector("#log_submit").addEventListener("click", function(event){
    event.preventDefault();
    let trn_input = document.getElementsByName("login_trn")[0].value;
    let pass_input = document.getElementsByName("login_pass")[0].value;

    trys++;
    for(let x = 0; x<= personsVerify.length; x++){
        let element = personsVerify[x];
        if(trys<=3){
            if(element._trn == trn_input && element._password == pass_input){
                let currentUser = [trn_input];
                localStorage.setItem("current_user", JSON.stringify(currentUser));
                window.location.href = "products.page.html";
                break;   
            }
        }else{
                window.location.href = "trys.toomuch.html";
        }
    }
});

document.querySelector("#log_cancel").addEventListener('click', function(){
    let trn_input = document.getElementsByName("login_trn")[0].value;
    let pass_input = document.getElementsByName("login_pass")[0].value;

    if (trn_input) trn_input.remove();
    if (pass_input) pass_input.remove();
});





