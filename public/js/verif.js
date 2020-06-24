let singForm = document.getElementById('singIn-form');
singForm.addEventListener('submit', (e) => {
    let error;

    let inputs = document.getElementsByTagName("input");

    for(let i = 0; i < inputs.length; i++) {
        console.log(inputs[i]);
        if (!inputs[i].value) {
            e.preventDefault();
            error = "* Veuillez renseigner tous les champs";
        }
    }

    let name = document.getElementById('name');
    let pseudo = document.getElementById('pseudo');
    let email = document.getElementById('email');
    let password = document.getElementById('password');

    //console.log(name);

    if (name.value.length > 50) {
        e.preventDefault();
        name.style.borderBottom = "3px solid red";
        error = "* Votre nom est trop long.";
    } else {
        name.style.borderBottom = "3px solid #8FCF3C";
    }

    if (pseudo.value.length > 50) {
        e.preventDefault();
        pseudo.style.borderBottom = "3px solid red";
        error = "* Votre pseudo est trop long.";
    } else {
        pseudo.style.borderBottom = "3px solid #8FCF3C";
    }

    if (email.value.length > 155) {
        e.preventDefault();
        email.style.borderBottom = "3px solid red";
        error = "* Votre mail est trop long."
    } else {
        email.style.borderBottom = "3px solid #8FCF3C";
    }

    if (password.value.length > 16 || password.value.length < 5) {
        e.preventDefault();
        password.style.borderBottom = "3px solid red";
        error = "* Votre mot de passe doit contenir entre 6 et 16 caractères";
    } else {
        password.style.borderBottom = "3px solid #8FCF3C";
    }

    /*if (name.length < 50) {
        document.getElementById('name').style.borderBottom = "3px solid #64D501";
        return true;
    }
    
    else if (pseudo.length < 50) {
        document.getElementById('pseudo').style.borderBottom = "3px solid #64D501";
        return true;
    }

    else if (email.length < 155) {
        document.getElementById('email').style.borderBottom = "3px solid #64D501";
        return true;
    }

    else if (password.length < 16) {
        document.getElementById('password').style.borderBottom = "3px solid #64D501";
        return true;
    }

    else if (password.length > 16) {
            error = "*Mot de passe trop long ou trop court(entre 6 et 16 caractères).";
            document.getElementById('password').style.borderBottom = "3px solid red";
    }

     else if (email.length > 155) {
             error = "*Email trop long ou trop court.";
             document.getElementById('email').style.borderBottom = "3px solid red";
    }

    else if (pseudo.length > 50) {
        error = "*Pseudo trop long.";
        document.getElementById('pseudo').style.borderBottom = "3px solid red";
    }

    else if (name.length > 50) {
        error = "*Nom trop long.";
        document.getElementById('name').style.borderBottom = "3px solid red";
    }*/

    if (error) {
        document.getElementById('error').textContent = error;
        //error = undefined;
    }
});
