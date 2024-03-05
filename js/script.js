// Create the script tag, set the appropriate attributes
/*var script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&callback=initMap';
script.async = true;*/


/* Generate the latitude and longitude coordinates of the eclipse's path. */
function genCoords(){
   const coordinates = [];
 
	for ( var x = -156; x < -23; x+=1){
    	var y = 29*Math.cos(0.023*x+1.1)+20;
      coordinates.push({lat: y, lng: x});
    }
    return coordinates;
}

/* Plot the path in red. */
function initMap() {
	var coordinates = genCoords();
	var maxTotality = new google.maps.LatLng(26.765178902673206,-102.696509457010109);
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3,
    center: { lat: 25, lng: -90 },
    mapTypeId: "hybrid",
  });

  const eclipsePath = new google.maps.Polyline({
    path: coordinates,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 0.5,
    strokeWeight: 20,
  });
  
  var marker = new google.maps.Marker({
		position: maxTotality,
		map: map,
		animation: google.maps.Animation.BOUNCE,
		icon: 'images/eclipse_icon.png'
	});

  eclipsePath.setMap(map);
}


window.initMap = initMap;
