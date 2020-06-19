let error = document.getElementById('error');

function validateSingInForm () {
    window.location.reload(false)
    if (document.singInForm.name.value === "") {
        error.textContent = "* Erreur: tous les champs doivent être remplis.";
        return false;
    } else if (document.singInForm.pseudo.value === "") {
        error.textContent = "* Erreur: tous les champs doivent être remplis.";
        return false;
    } else if (document.singInForm.email.value === "") {
        error.textContent = "* Erreur: tous les champs doivent être remplis";
        return false;
    } else {
        error.textContent = "";
        alert('ça marche');
        return true;
    }
}
