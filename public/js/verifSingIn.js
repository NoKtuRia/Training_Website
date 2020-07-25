const singForm = document.getElementById('singIn-form');
singForm.addEventListener('submit', (e) => {
    let error;

    let inputs = document.getElementsByTagName("input");

    for (let i = 0; i < inputs.length; i++) {
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
    }else if (name.value === '') {
        name.style.borderBottom = "3px solid red";
    }  else {
        name.style.borderBottom = "3px solid #8FCF3C";
    }

    if (pseudo.value.length > 50) {
        e.preventDefault();
        pseudo.style.borderBottom = "3px solid red";
        error = "* Votre pseudo est trop long.";
    }else if (pseudo.value === '') {
        pseudo.style.borderBottom = "3px solid red";
    }  else {
        pseudo.style.borderBottom = "3px solid #8FCF3C";
    }

    if (email.value.length > 155) {
        e.preventDefault();
        email.style.borderBottom = "3px solid red";
        error = "* Votre mail est trop long."
    } else if (email.value === '') {
        email.style.borderBottom = "3px solid red";
    } else {
        email.style.borderBottom = "3px solid #8FCF3C";
    }

    if (password.value.length > 16 || password.value.length < 5) {
        e.preventDefault();
        password.style.borderBottom = "3px solid red";
        error = "* Votre mot de passe doit contenir entre 6 et 16 caractères";
    }else if (password.value === '') {
        password.style.borderBottom = "3px solid red";
    }  else {
        password.style.borderBottom = "3px solid #8FCF3C";
    }

    if (error) {
        document.getElementById('error').textContent = error;
        //error = undefined;
    }
});
