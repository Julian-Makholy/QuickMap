mapboxgl.accessToken = 'pk.eyJ1IjoicmV0YXJmZCIsImEiOiJjbDN2bHVseXcwYm95M2NwbDN1NnRlYXNxIn0.kzi2vYYTmI5SBmPKlAjPOg';

  navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
  })
  
  function successLocation(position) {
    setupMap([position.coords.longitude, position.coords.latitude])
  }

  function errorLocation() {
   setupMap([35.2137, 31.7683]);
  }

  function setupMap(center) {
    map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: center,
      zoom: 11
    })

  const nav = new mapboxgl.NavigationControl()
    map.addControl(nav)

  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken
})

  map.addControl(directions, "top-left")
}
  
// maybe I should make a switch statement to reduce all these i values and func declerations 

let i1=0;
  function Function1(){
    i1++;
    if (i1%2==0){
    document.getElementById('footer').style.display='block';
  }
    else{ 
    document.getElementById('footer').style.display='none';
  }
}

  function Function2(){
  darkmode.toggleDarkMode();
}   
var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})
