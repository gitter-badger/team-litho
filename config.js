mapboxgl.accessToken = 'pk.eyJ1Ijoiam9leWNyZWF0b3IiLCJhIjoiY2t4ZHI0YThiMTdzMjJva3kybnZxZzhkNyJ9.2wZYl3GR7if3ucmVBMoAFA';
const map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/dark-v10',
	center: [-96.052335, 39.159882],
	zoom: 3.5
});


disable map zoom when using scroll
map.scrollZoom.disable();



map.on('load', () => {
	map.addSource('spcday1', {
		type: 'geojson',
		data: 'https://www.spc.noaa.gov/products/outlook/day1otlk_cat.nolyr.geojson'
	});

	map.addLayer({
		'id': 'spcday1-layer',
		'type': 'fill',
		'source': 'spcday1',
		'paint': {
			'fill-color': ['get', 'fill'],
			'fill-outline-color': ['get', 'stroke'],
			'fill-opacity': 0.5
		}
	});
});