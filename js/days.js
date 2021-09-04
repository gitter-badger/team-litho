const days = moment().add(5, 'days').calendar(); 
document.getElementById("days").innerHTML = days;