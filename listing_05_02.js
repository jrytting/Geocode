// Declare variables for later use
var map;
var geocoder;
var startMarker;
var addressArray;

function loadMap() {
    // loadMap: initialize the API and load the map onto the page

    // Get the map container div
    var mapDiv = document.getElementById('map');

            map = new google.maps.Map(document.getElementById('map'), {
            center: new google.maps.LatLng(42.370372, -87.895775),
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });

    // Initialize the geocoder object and tie it to the current map view
        geocoder = new google.maps.Geocoder();
        addressArray = ['4170 Woodlawn Avenue, Gurnee IL', '4169 Woodlawn Avenue, Gurnee IL',
                        '460 Pinewood Drive, Gurnee IL', '4555 Old Grand Avenue, Gurnee IL'];

        geocodeAll(addressArray);
};

function geocode() {
    // geocode: Call the Google geocoder with the address supplied by the user
    var address = document.getElementById('start').value;
    codeAddress(address);
    codeAddress("404 Evergreen Avenue, Waukegan IL");
    //codeAddress("Beach Park, IL");
    //codeAddress("Waukegan, IL");

};

function geocodeAll(addressArray) {
    // geocode: Call the Google geocoder with the address supplied by the user
    var arrayLength = addressArray.length;
    for (var i = 0; i < arrayLength; i++) {
        //addressArray[i]);
        codeAddress(addressArray[i]);
    }
    
    //codeAddress("404 Evergreen Avenue, Waukegan IL");
    //codeAddress("Beach Park, IL");
    //codeAddress("Waukegan, IL");

};

function codeAddress(address) {
    geocoder.geocode({ 'address': address }, function (results, status) {
        if (status == 'OK') {
            map.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location,
                title: address
            });
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
};


