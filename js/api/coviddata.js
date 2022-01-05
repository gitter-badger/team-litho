/*
 * @fileoverview Utilities for manipulating JavaScript code.
 * @author joey@tech-center.com (Joey Cadieux)
 */

fetch('https://api.covid19api.com/countries')
  .then(response => response.json())
  .then(data => {
    const country = data.country;

    country.forEach(country => {
      console.log(country);
    })
  })