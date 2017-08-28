/*
Dans ce fichier, écrire un nombre arbitraire de fonctions.
Ces fonctions doivent faire appel à chacun des types basiques
de Typescript.
Bien entendu, chaque fonction ne doit pas faire à tous les types,
mais tous les types doivent être présent au moins une fois dans vos fonctions

Vérifier la bonne compilation de vote code, inspecter le code produit et
soumettre le résultat sur votre dépot github
*/

function addition(x: number, y: number): number {
    return x + y;
}

function sePresenter(nom: string, prenom: string): void{
  console.log(`Bonjour je m'appele ${nom} ${prenom}.`)
}

function creerPersonnage(nom: string, prenom: string): string{
  return nom + " " + prenom;
}

function supADix(number: number): boolean{
  if(number > 10){
    return true;
  }
  return false;
}

function compteurTab(number: number[]){
  for(var i = 0;i<number.length;i++) {
    console.log(number[i]);
  }
}

enum Direction{Up,Down,Left,Right};

function deplacer(dir: Direction): void{
  console.log("Nous allons vers :" + dir);
}
