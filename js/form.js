const form = document.getElementById('form');
const username = document.getElementById('Username');
const email = document.getElementById('Email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const conPassword = document.getElementById('conPassword');

document.getElementById('form').addEventListener('submit', function() {
	e.preventDefault();

	checkInputs();
}); 

function checkInputs () {
	const usernameVal = username.value.trim();                                 
	const emailVal = email.value.trim();
	const phoneVal = phone.value.trim();
	const passwordVal =password.value.trim();
	const conPasswordVal =conPassword.value.trim();

	if(usernameVal === ''){
		setErrorFor(username, "Username is empty, fill.")
	}else{
		setSuccessFor(username) 
	}

	if(emailVal === ''){
		setErrorFor(email, "Email is empty, fill.")
	}else{
		setSuccessFor(email) 
	}
}

function setErrorFor(input, message){
	const formControl = input.parentElement;
	const small = formControl.querySelector('small') ;

	// add error message inside smal
	small.innerText = message;

	//add error class
	formControl.className ='form-control error';
}