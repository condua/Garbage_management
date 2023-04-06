
// Add a tile layer to the map (you can use any tile layer URL)
var myLocation = [10.880401, 106.805111];
var map = L.map('map').setView([10.880401, 106.805111], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var myIcon = L.icon({
    iconUrl: './icon/MyloIcon.png',
    iconSize: [38, 40],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    shadowUrl: '',
    shadowSize: [68, 95],
    shadowAnchor: [22, 94]
});
var e = L.icon({
    iconUrl: './icon/trashEmptyIcon.png',
    iconSize: [38, 40],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    shadowUrl: '',
    shadowSize: [68, 95],
    shadowAnchor: [22, 94]
});
var f = L.icon({
    iconUrl: './icon/trashFullIcon.png',
    iconSize: [38, 40],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    shadowUrl: '',
    shadowSize: [68, 95],
    shadowAnchor: [22, 94]
});
var h = L.icon({
    iconUrl: './icon/trashHaflIcon.png',
    iconSize: [38, 40],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    shadowUrl: '',
    shadowSize: [68, 95],
    shadowAnchor: [22, 94]
});

L.marker([myLocation[0], myLocation[1]], {icon: myIcon}).addTo(map);
L.marker([myLocation[0]+0.001, myLocation[1]-0.001], {icon: e}).addTo(map);
L.marker([myLocation[0]+0.001, myLocation[1]+0.002], {icon: f}).addTo(map);
L.marker([myLocation[0]+0.002, myLocation[1]+0.01], {icon: h}).addTo(map);
L.marker([myLocation[0]+0.004, myLocation[1]-0.006], {icon: e}).addTo(map);
L.marker([myLocation[0]-0.02, myLocation[1]]-0.03, {icon: f}).addTo(map);

//I have no idea :<
// if(!navigator.geolocation){
//     console.log("browser not support");
// } else{
//     //navigator.geolocation.getCurrentPosition(getPosition);
// }

// function getPosition(position){
//     console.log(position);
// }