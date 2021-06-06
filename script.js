// Etape 1 - Sélectionner nos éléments
let input = document.querySelector("#prix");
let error = document.querySelector("small");
let formulaire = document.querySelector("#formulaire");
let nbrAleatoire = getNbrAleatoire();
let cpt = 0;
let nbrChoisi;

// Etape 2 - Cacher l'erreur
error.style.display = "none";

// Etape 3 - Générer un nombre aléatoire
function getNbrAleatoire(){
    return Math.floor(Math.random() * 11); // Entier entre 0 et 10 ==> On met 11 car Math.random va aller jusque 9,99999 ==> Avec l'arrondi ==> 9 donc jamais 10
}

// Etape 6 - Créer la fonction vérifier
function verifier(nombre){
    let instruction = document.createElement('div');

    if(nbrChoisi < nbrAleatoire){
        // C'est plus
        instruction.textContent = "#" + cpt + " ( " + nombre + " ) " + "C'est plus !";
        instruction.className = "instruction plus"; // Ajout des classes à l'éléments
    }

    else if(nbrChoisi > nbrAleatoire){
        // C'est moins
        instruction.textContent = "#" + cpt + " ( " + nombre + " ) " + "C'est moins !";
        instruction.className = "instruction moins";
    }

    else {
        // Ok
        instruction.textContent = "#" + cpt + " ( " + nombre + " ) " + "Félicitation, vous avez réussi !";
        instruction.className = "instruction fini";
        input.disabled = true;
    }

    // Ajouter l'élément devant les autres
    document.querySelector("#instructions").prepend(instruction); // prepend pour inverser le sens d'envois des messages
}

// Etape 4 - Vérifier que l'utilisateur donne bien un nombre
// keyup ==> Détecte la saisie 
input.addEventListener('keyup', () =>{ // Fonction anonyme car plus jamais utilisé après
    if(isNaN(input.value)){
        error.style.display = "inline";
    }

    else{
        error.style.display = "none";
    }
});

// Etape 5 - Agir à l'envoi du formulaire
formulaire.addEventListener('submit', (e) => {
    e.preventDefault(); // Annuler le comportement par défaut de certains event ==> Ici formulaire qui renvoi vers autre page

    if(isNaN(input.value) || input.value == ""){
        input.style.borderColor = "red";
    }

    else{
        input.style.borderColor = "silver";
        cpt++;

        nbrChoisi = input.value;
        input.value = "";
        verifier(nbrChoisi);
    }
});