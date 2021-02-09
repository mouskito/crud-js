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

			$('input').val('')
			$('#erreur').hide()
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
	var ligne_modifier =nouvelleLigne.insertCell(4).innerHTML = "<i class='fa fa-edit' id='"+nombre_ligne+"' onclick='modifier(this)'></i>";
	var ligne_sup =nouvelleLigne.insertCell(5).innerHTML = "<i class='fa fa-trash' id='"+nombre_ligne+"' onclick='supprimer(this)'></i>";
	//icon finder https://www.iconfinder.com/search/?q=delete
	//var ligne_sup =nouvelleLigne.insertCell(5).innerHTML = "<img src='delete.png'>";
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

//Modification
function modifier(argument) {
	var id = argument.id

	var table = document.querySelector('.table');
	var ligne = $('.table tr')[id];

	var prenom_a_modifier = ligne.cells[1].innerHTML;
	var nom_a_modifier = ligne.cells[2].innerHTML;
	var email_a_modifier = ligne.cells[3].innerHTML;
	document.querySelector('.table').deleteRow(id)

	$("#prenom").val(prenom_a_modifier)
	$("#nom").val(nom_a_modifier)
	$("#email").val(email_a_modifier)
	//ID
	var mes_lignes = document.querySelectorAll('tr');
	var nombre_ligne = table.rows.length -1;
	for (var i = 1; i <= nombre_ligne; i++) {
		mes_lignes[i].cells[0].innerHTML = i; 
		
	}
}

//
function supprimer(argument) {
	var id = argument.id;
	
	var prenom_a_supp = $('.table tr')[id].cells[1].innerHTML;
	var nom_a_supp = $('.table tr')[id].cells[2].innerHTML;

	if (confirm('Voulez vous supprimer   '+ prenom_a_supp + ' '+nom_a_supp + ' ?')) {
 		document.querySelector('.table').deleteRow(id)
	}
}