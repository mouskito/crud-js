$(document).ready(function () {
	$('form').submit(function (event) {
		champsVides();
	})
})

function champsVides() {
	var prenom = $('#prenom').val();
	var nom = $('#nom').val();
	var email_saisi = $('#email').val();

	if(prenom === '' || nom === '' || email_saisi === ''){
		console.log('Oups')
	}else{
		if(verifEmail(email_saisi) === false){
			console.log('email déja présent');
			$("#erreur").html('<p style="color:red"> Le mail existe déja</p>')
		}else{
			creationLigne(prenom,nom,email_saisi);
		}
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

// Verification email
function verifEmail(email) {
	var table = document.querySelector('.table');
	var nombre_ligne = table.rows.length -1;

	for (var index = 1; index <= nombre_ligne; index++) {
		
		var email_tableau = table.getElementsByTagName('tr')[index].cells[3].innerHTML;
		

		console.log(email_tableau)

		if(email === email_tableau){
			return false;
		}
	}
}