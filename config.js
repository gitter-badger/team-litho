mapboxgl.accessToken = 'pk.eyJ1Ijoiam9leWNyZWF0b3IiLCJhIjoiY2t4eGp2cTVpMmFsbzJvbnliaTZheHRtdCJ9.Dhq-8dqBOQ9rzbNgdymJ3A';
const map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/dark-v10',
	center: [-96.052335, 39.159882],
	zoom: 4.3
});


// disable map zoom when using scroll
map.scrollZoom.disable();