/*
Dans ce fichier, écrire un nombre arbitraire de fonctions.
Ces fonctions doivent faire appel à chacun des types basiques
de Typescript.
Bien entendu, chaque fonction ne doit pas faire à tous les types,
mais tous les types doivent être présent au moins une fois dans vos fonctions

Vérifier la bonne compilation de vote code, inspecter le code produit et
soumettre le résultat sur votre dépot github
*/
function addition(x, y) {
    return x + y;
}
function sePresenter(nom, prenom) {
    "Bonjour je m'appele {nom} {mickael}.";
}
function creerPersonnage(nom, prenom) {
    return nom + " " + prenom;
}
function supADix(number) {
    if (number > 10) {
        return true;
    }
    return false;
}
function compteurTab(number) {
    for (var i = 0; i < number.length; i++) {
        console.log(number[i]);
    }
}
function directions(Up, Down, Left, Right) {
    console.log(directions);
}
