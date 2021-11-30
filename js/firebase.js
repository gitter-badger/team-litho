import { initializeApp } from "firebase/app";



const firebaseConfig = {
	apiKey: "AIzaSyAeNdrdjP0jEW5C72bJqQ1dw55Hy3Jzrro",
	authDomain: "teamlithov2-2c17d.firebaseapp.com",
	projectId: "teamlithov2-2c17d",
	storageBucket: "teamlithov2-2c17d.appspot.com",
	messagingSenderId: "109257568032",
	appId: "1:109257568032:web:99c0d67f5b01a901dc3145"
};


const app = initializeApp(firebaseConfig);

// Variables

const auth = firebase.auth()
const database = firebase.database()

// Set Up our Register

function register() {
	email = document.getElementById("email").value
	confirm_email = document.getElementById("confirm_email").value
	confirm_password = document.getElementById("confirm_password").value
	password = document.getElementById("password").value
}

function validate_email(email) {
	expression = /^[^@]+@\w+(\.\w+)+\w$/
	if (expression.test(email) == false || validate_password(password) == false) {
		return
	}
	{
		return true
	} else {
		return false
	}
}

function validate_password(password) {
	if (password < 10) {
		return false
	} else {
		return true
	}
}

function validate_field(field) {
	if (field == null) {
		return false
	}
	if (field.length <= 0) {
		return false
	} else {
		return true
	}
}

// Auth 

auth.createUserWithEmailAndPassword(email, password)
	.then(function () {

		var user = auth.currentUser

		var database_ref = database_ref()

		var user_data = {
			email: email,
			password: password,
			last_login: Date.now()
		}

		database_ref.child('users/' + user.uid).set(user_data)


		alert('User Created')

	})
	.catch(function (error) {
		var error_code = error.code
		var error_massage = error.message

		alert(error.message)
	})