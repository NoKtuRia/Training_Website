const logForm = document.getElementById('login-form');

logForm.addEventListener("submit", (e) => {

    let errorLog;

    let inputs = document.getElementsByTagName('input');

    for (let i = 0; i < inputs.length; i++) {
        console.log(inputs[i]);
        if (!inputs[i].value) {
            e.preventDefault();
            errorLog = "* Veuillez renseigner tous les champs";
        }
    }

    if (errorLog) {
        document.getElementById('error').textContent = errorLog;
    }
});