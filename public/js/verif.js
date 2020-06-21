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

    if (error) {
        e.preventDefault();
        document.getElementById('error').textContent = error;
        return false;
    }
});