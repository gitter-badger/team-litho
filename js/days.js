/*
 * @fileoverview Utilities for manipulating JavaScript code.
 * @author joey@tech-center.com (Joey Cadieux)
 */

const days = moment().add(5, 'days').calendar(); 
document.getElementById("days").innerHTML = days;