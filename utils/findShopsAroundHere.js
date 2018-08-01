const geolib = require('geolib');

export const findShopsAroundHere = (geocode) => {
  return asyncGetMyLocation()
    .then(myPosition => {
			console.log('my position', myPosition);
      return geolib.getDistance(myPosition, { latitude: geocode.lat, longitude: geocode.lng });
    })
}

const asyncGetMyLocation = () => {
	return new Promise((resolve, reject) => {
		return navigator.geolocation.getCurrentPosition(position => {
			resolve({ latitude: position.coords.latitude, longitude: position.coords.longitude });
		});
	});
}