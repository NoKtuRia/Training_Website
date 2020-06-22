let singForm = document.getElementById('singIn-form');
singForm.addEventListener('submit', (e) => {
    let error;

    let inputs = document.getElementsByTagName("input");

    for(let i = 0; i < inputs.length; i++) {
        console.log(inputs[i]);
        if (!inputs[i].value) {
            error = "* Veuillez renseigner tous les champs";
        }
    }

    let name = document.getElementById('name').value;
    let pseudo = document.getElementById('pseudo').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('name').value;

    console.log(name);

    if (name.length < 50) {
         if (pseudo.length < 50) {
            if (email.length < 155) {
                if (password.length < 16) {
                    return true;
                } else if (password.length > 16){
                    error = "*Mot de passe trop long ou trop court(entre 6 et 16 caractères).";
                }
            } else if (email.length > 155) {
                error = "*Email trop long ou trop court.";
            }
        } else if (pseudo.length > 50) {
            error = "*Pseudo trop long.";
        }
    } else if (name.length > 50) {
        error = "*Nom trop long.";
    }

    if (error) {
        e.preventDefault();
        document.getElementById('error').textContent = error;
        error = undefined;
    }
});
