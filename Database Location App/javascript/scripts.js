var x = document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
}


$('#location-button').click(function () {

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log(position);
            $.get("http://maps.googleapis.com/maps/api/geocode/json?latlng=" + position
                .coords.latitude + "," + position.coords.longitude +
                "&sensor=false",
                function (data) {
                    console.log(data);
                })
            var img = new Image();
            img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" +
                position.coords.latitude + "," + position.coords.longitude +
                "&zoom=13&size=800x400&sensor=false";
            $('#output').html(img);
        });

    }
});