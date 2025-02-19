document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.getElementById("startButton");
    const mapContainer = document.getElementById("map-container");
    const mainSection = document.getElementById("main");
    const modal = document.getElementById("mapModal");
    const closeModal = document.getElementById("closeModal");

    let mapLoaded = false;
    mapContainer.style.display = "none";

    startButton.addEventListener("click", () => {
        mainSection.classList.add("hidden");
        mapContainer.style.display = "flex";
        mapContainer.classList.remove("hidden", "opacity-0", "pointer-events-none");

        if (!mapLoaded) {
            initializeMap();
            mapLoaded = true;
        }

        modal.classList.remove("hidden");
    });

    closeModal.addEventListener("click", () => {
        modal.classList.add("hidden");
        mapContainer.style.display = "none";
    });

    const initializeMap = () => {
        if (typeof L === "undefined") {
            console.error("Leaflet is not loaded!");
            return;
        }
        console.log(L);

        const mapElement = document.getElementById("map");
        if (!mapElement) {
            console.error("Error: #map element is missing!");
            return;
        }
        console.log(mapElement);
        
        console.log(map);

        L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        const customIcon = L.icon({
            iconUrl: "images/starred.png",
            iconSize: [32, 32],
            iconAnchor: [16, 32],
        });

        const locations = [
            { coords: [-33.8688, 151.2093], label: "Sydney" },
            { coords: [23.1291, 113.2644], label: "Guangzhou, China" },
            { coords: [22.3193, 114.1694], label: "I was born here! (in Hong Kong) but my cantonese is really bad" },
            { coords: [37.5665, 126.9780], label: "Fun fact: I really like learning languages so when I was younger I would try to learn korean (I am still learning the alphabet)" },
            { coords: [35.6895, 139.6917], label: "Tokyo is one of" },
            { coords: [13.7563, 100.5018], label: "One of my visions on my 2025 vision board is to visit Thailand (I really want to try the 7/11 thai tea)" }
        ];

        locations.forEach(location => {
            let marker = L.marker(location.coords, { icon: customIcon }).addTo(map);
            marker.bindPopup(`<h3>${location.label}</h3>`);
        });
    };
});