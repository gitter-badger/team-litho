/*
 * @fileoverview Utilities for manipulating JavaScript code.
 * @author joey@tech-center.com (Joey Cadieux)
 */

const timeupdater = moment().format('MMMM Do YYYY, h:mm:ss a');
document.getElementById("timeupdater").innerHTML = timeupdater;