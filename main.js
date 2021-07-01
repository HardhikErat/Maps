let latitude=19.0760, longitude=72.8777;

// Initializing Mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoiaGFyZGhpa2VyYXQiLCJhIjoiY2txa3dudWlxMHRwbDJvcHFzZ3FveGZiZyJ9.qtKfzEThXoyj7RlGlOtbkQ';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [longitude, latitude],
    zoom:16
});

map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
    })
);

map.addControl(
    new MapboxDirections({
        accessToken: mapboxgl.accessToken
    }),
    'top-left'
);