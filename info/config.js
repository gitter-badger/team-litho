var map = new maplibregl.Map({
	container: 'map', // container id
	style: 'https://api.maptiler.com/maps/dark/style.json?key=yU6sVoWWVT1kZ16BpGAe', // s
	center: [-95.7129, 37.0902],
	zoom: 3.5
});

// disable map zoom when using scroll
map.scrollZoom.disable();

map.on('load', () => {
	map.addSource('spcday1', {
		type: 'geojson',
		// Use a URL for the value for the `data` property.
		data: ' https://www.spc.noaa.gov/products/outlook/day1otlk_cat.nolyr.geojson'
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