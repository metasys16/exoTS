/*
Considérant l'interface et la classe suivante :
*/
class Personne {
  private nom: string;
  private prenom: string;
}

interface Contact extends Personne {
  telephone: number;
}

/*
Indiquer la hiérachie de type pour chacune des classes suivantes
sous la forme d'un commentaire au dessus de la définition
*/

/* Heritage de la classe Personne*/
class Etudiant extends Personne {}

/* Classe Professeur qui n'herite ni d'une classe nni d'une interface*/
class Professeur {
  // nom dispo dans la classe Professeur
  private nom: string;
  private prenom: string;
  telephone: number;
}

/* La déclaration suivante n'est pas valide.
Expliquez dans un commentaire.
*/
// Il manque la définition de l'attibut telephone dans la classe Stagiaire puisque l'interface nous demande de le définir
class Stagiaire implements Contact{}
