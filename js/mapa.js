(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', function () {

        

        var map = L.map('mapa').setView([19.967974, -99.39743], 17);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([19.967974, -99.39743]).addTo(map)
            .bindPopup('Visitanos !')
            .openPopup();





    });//DOMContentLoaded
}());