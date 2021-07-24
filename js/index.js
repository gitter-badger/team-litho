/*
 * @fileoverview Utilities for manipulating JavaScript code.
 * @author joey@tech-center.com (Joey Cadieux)
 */

var moment = require("moment-timezone");
moment().tz("America/Los_Angeles").format();

document.getElementById("moment").innerHTML = moment;

// const ourtime = new Date();
// document.getElementById("ourtime").innerHTML = ourtime;
