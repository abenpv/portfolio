let map = L.map("leafMap").setView([51.230185, 4.416455], 15);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// Using the default Leaflet marker icon (no custom image needed)
L.marker([51.2292, 4.4175]).addTo(map);
