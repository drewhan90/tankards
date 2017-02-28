
function toggleNavBar() { // Burger NavBar 
	document.getElementsByClassName("navBar")[0].classList.toggle("responsive");
}

function initialize() {
    var vanArtsLocation = new google.maps.LatLng(49.282738, -123.115358);

    var mapProp = {
        center:vanArtsLocation,
        zoom:15,
        mapTypeId:google.maps.MapTypeId.ROADMAP, // TERRAIN, HYBRID, SATELLITE
        disableDefaultUI:false
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

    var marker = new google.maps.Marker({
        position:vanArtsLocation,
    });

    var infoWindow = new google.maps.InfoWindow({
        content:"<strong>VanArts</strong> 570 Dunsmuir St"
    });

    infoWindow.open(map, marker);

    marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);