const form = document.getElementById('form');
const username = document.getElementById('Username');
const email = document.getElementById('Email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const conPassword = document.getElementById('conPassword');

form.addEventListener('submit',(e)=>{
	e.preventDefault();

	checkInputs();
})

function checkInputs () {
	const usernameVal = username.value.trim();                                 
	const emailVal = email.value.trim();
	const phoneVal = phone.value.trim();
	const passwordVal =password.value.trim();
	const conPasswordVal =conPassword.value.trim();

	if(usernameVal === ''){
		setErrorFor(username, "Empty")
	}
}