"use strict";
/// <reference types="@types/google.maps" />
var _a;
let map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
    });
}
window.initMap = initMap;
(_a = document.getElementById('submit')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const address = document.getElementById('address')
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
        }
        else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
});
//# sourceMappingURL=app.js.map