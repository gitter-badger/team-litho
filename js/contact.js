/*
 * @fileoverview Utilities for manipulating JavaScript code.
 * @author joey@tech-center.com (Joey Cadieux)
 */

const contactpage = moment().format('LTS');
document.getElementById("contactpage").innerHTML = contactpage;


// Contact Form

function validateForm() {
	let x = document.forms['contact']['email'].value;
	if (x == '') {
		alert("Email  must be filled out");
		return false;
	}
}


function validateForm() {
	let x = document.forms['contact']['body'].value;
	if (x == '') {
		alert("Body  must be filled out");
		return false;
	}
}