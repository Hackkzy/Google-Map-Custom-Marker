// Initialize and add the map
function initMap() {
  // The location.
  const location = { lat: 23.2, lng: 70.895 };

  // Map centered at given location
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: location,
  });

  // Info winodow
  const contentString = "Welcome to Gujarat!";
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
    ariaLabel: "location",
  });

  // Custom Marker
  const marker = new google.maps.Marker({
    position: location,
    map,
    title: "location (Ayers Rock)",
  });
  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
    });
  });
}

window.initMap = initMap;
