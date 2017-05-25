


function Map(latitude, longitude) {
  this.location = {lat: latitude, lng: longitude};
  this.map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: this.location
  });
}

Map.prototype.marker = function(latitude,longitude) {
  var exactLocation = {lat: latitude, lng: longitude};
  var marker = new google.maps.Marker({
    position: exactLocation,
    map: this.map
  });
};



exports.googleModule = Map;
