/*
 * @fileoverview Utilities for manipulating JavaScript code.
 * @author joey@tech-center.com (Joey Cadieux)
 */

const contactpage = moment().format('LTS');
document.getElementById("contactpage").innerHTML = contactpage;


// Contact Form

const __email = __email;
document.getElementById("__email").innerHTML = __email;


const __msg = __msg;
document.getElementById("__msg").innerHTML = __msg;


function validateMsg(msg) {
	if (typeof msg !== 'string' || msg.lenth < 10) {
		return 'Message: Whoops!'
	}
}

function validateEmail(email) {
	if (typeof email !== 'string' || email.lenth < 3) {
		return 'Email: Whoops!'
	}
}