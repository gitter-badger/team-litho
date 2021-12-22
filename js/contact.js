/*
 * @fileoverview Utilities for manipulating JavaScript code.
 * @author joey@tech-center.com (Joey Cadieux)
 */

const contactpage = moment().format('LTS');
document.getElementById("contactpage").innerHTML = contactpage;


// Contact Form

const forms = document.getElementById('forms')
const fname = document.getElementById('fname')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const body = document.getElementById('body')

const errorElement = document.getElementById('error')

forms.addEventListener('submit', (e) => {
	let messages = []
	if (fname.value === '' || fname.value == null) {
		messages.push('Name is required!')
	}
	if (messages.length > 0) {
		errorElement.innerText = messages.join(', ')
		e.preventDefault()
	}
})