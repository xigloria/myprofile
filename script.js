document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("startButton");
    const backButton = document.getElementById("backButton");
    const mapContainer = document.getElementById("map-container");
    const mainContainer = document.querySelector(".container");

    let mapLoaded = false;
    mapContainer.style.display = "none";

    startButton.addEventListener("click", function () {
        mainContainer.style.display = "none";
        mapContainer.style.display = "block";

        if (!mapLoaded) {
            initializeMap();
            mapLoaded = true;
        }
    });

    backButton.addEventListener("click", function () {
        mapContainer.style.display = "none";
        mainContainer.style.display = "block";
    });

    function initializeMap() {
        const map = L.map("map").setView([-33.8688, 151.2093], 3);

        L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        const customIcon = L.icon({
            iconUrl: "starred.png",
            iconSize: [32, 32],
            iconAnchor: [16, 32],
        })
        let marker = L.marker([-33.8688, 151.2093], { icon: customIcon }).addTo(map);
    }

})


