/*
 * @fileoverview Utilities for manipulating JavaScript code.
 * @author joey@tech-center.com (Joey Cadieux)
 */

const days = moment().add(5, 'days').calendar(); 
document.getElementById("days").innerHTML = days;


class Websitetitle {
	constructor(text, title) {
		this.text = text;
		this.title = title;
	} 
}

const Websitetitle = new Websitetitle(­­'TeamLitho', 'Developer');
document.getElementById('demo').innerHTML = myWebsitetitle.text + " " + myWebsitetitle.title;