


function Map(latitude, longitude) {
  this.location = {lat: latitude, lng: longitude};
  this.map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: this.location
  });
}


exports.googleModule = Map;
