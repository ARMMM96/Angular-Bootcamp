/// <reference types="@types/google.maps" />

let map: google.maps.Map;

function initMap(): void {
	map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
		center: { lat: -34.397, lng: 150.644 },
		zoom: 8,
	});
}

(window as any).initMap = initMap;

document.getElementById('submit')?.addEventListener('click', () => {
	const name = (document.getElementById('name') as HTMLInputElement).value;
	const address = (document.getElementById('address') as HTMLInputElement)
		.value;
	if (!name || !address) {
		alert('Please enter both name and address.');
		return;
	}

	const geocoder = new google.maps.Geocoder();

	geocoder.geocode({ address: address }, (results, status) => {
		if (status === google.maps.GeocoderStatus.OK && results) {
			const location = results[0].geometry.location;
			new google.maps.Marker({
				map: map,
				position: location,
				title: name,
			});
			map.setCenter(location);
		} else {
			alert(
				'Geocode was not successful for the following reason: ' + status
			);
		}
	});
});
