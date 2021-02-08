$(document).ready(function () {
	$('form').submit(function (event) {
		champsVides();
	})
})

function champsVides() {
	var prenom = $('#prenom').val();
	var nom = $('#nom').val();
	var email = $('#email').val();

	if(prenom === '' || nom === '' || email === ''){
		console.log('Oups')
	}else{
		creationLigne(prenom,nom,email);
	}
}

//Création de ligne
function creationLigne(a,b,c) {

	var table = document.querySelector('.table');
	var nouvelleLigne = table.insertRow(table.length);

	var nombre_ligne = table.rows.length -1;

	var ligne_id =nouvelleLigne.insertCell(0).innerHTML = nombre_ligne;
	var ligne_prenom =nouvelleLigne.insertCell(1).innerHTML = a;
	var ligne_nom =nouvelleLigne.insertCell(2).innerHTML = b;
	var ligne_email =nouvelleLigne.insertCell(3).innerHTML = c;
}