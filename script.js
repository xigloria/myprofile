document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.getElementById("startButton");
    const backButton = document.getElementById("backButton");
    const mapContainer = document.getElementById("map-container");
    const mainContainer = document.querySelector(".container");
    const modal = document.getElementById("mapModal");
    const closeModal = document.getElementById("closeModal");

    let mapLoaded = false;
    mapContainer.style.display = "none";

    startButton.addEventListener("click", () => {
        mainContainer.style.display = "none";
        mapContainer.style.display = "block";

        if (!mapLoaded) {
            initializeMap();
            mapLoaded = true;
        }

        modal.classList.remove("hidden");
    });

    backButton.addEventListener("click", () => {
        mapContainer.style.display = "none";
        mainContainer.style.display = "block";

        modal.classList.add("hidden")
    });

    closeModal.addEventListener("click", () => {
        modal.classList.add("hidden")
    })

    const initializeMap = () => {
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
        var marker = L.marker([-33.8688, 151.2093], { icon: customIcon }).addTo(map);
        marker.bindPopup("<h3>I was born here!<h3>");
    }

})


