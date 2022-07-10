function abracadabra ()
{
	let prenom = prompt("Quel est votre prénom ?");
	console.log (prenom);
	let nom = prompt('Quel est votre nom ?');
	console.log (nom);
	let age = prompt ("quel est votre âge ?");
	console.log(age);

	alert ("Sapristi, on ne m'avait pas dit que c'était vous " + prenom + "! Euh... je veux dire ... Monsieur le grand magicien " 
		+ nom + " ! Cela fait déjà " + age + " ans que vous faites rayonner notre contrée !")
}

abracadabra();