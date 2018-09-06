import React, { Component } from 'react'
import mapboxgl from 'mapbox-gl';

// Offsets of the Popups from documentation: https://www.mapbox.com/mapbox-gl-js/api/#popup
var markerHeight = 50, markerRadius = 10, linearOffset = 25;
var popupOffsets = {
    'top': [0, 0],
    'top-left': [0,0],
    'top-right': [0,0],
    'bottom': [0, -markerHeight],
    'bottom-left': [linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
    'bottom-right': [-linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
    'left': [markerRadius, (markerHeight - markerRadius) * -1],
    'right': [-markerRadius, (markerHeight - markerRadius) * -1]
};

let descriptionResults = [],
    markers = [],
    popups = [],
    map;

class Map extends Component {

    state = {
        chosenLocation: this.props.clickedLocation
    }

    componentDidMount() {
        mapboxgl.accessToken = 'pk.eyJ1Ijoibm91cmFucyIsImEiOiJjamwxenJ3Z20xbGMxM3FxazlqbHdoYW80In0.d42qV9z_Se6BiYI32ZREIQ';
        map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v9',
            center: [33.200092, 27.318739],
            zoom: 5.5
        });

        // Fetch locations description from wikimedia API
        this.getLocationsDescription();

        this.createMarkersWithPopups();
    }

    // Creates the markers specific for each location with corresponding popup
    createMarkersWithPopups() {
        const locations = this.props.mapLocations;

        locations.forEach(location => {
            const popup = new mapboxgl.Popup({offset: popupOffsets, className: 'pop-up'})

            this.addTextToPopup(popup, location)

            popups.push({id: location.name, popup: popup})
        
            const marker = new mapboxgl.Marker({color: '#f44250'})
                .setLngLat(location.latLng)
                .setPopup(popup)
                .addTo(map);

            markers.push({id: location.name, marker: marker})
        });
    }

    addTextToPopup(popup, location) {
        // Make sure that all asynchronous fetching is finished to access the data
        Promise.all(descriptionResults).then(results => {
            results.forEach(data => {
                // Take only the description that has the same id as the location
                if(data.id === location.id) {
                    popup.setHTML(`
                    <div class="popup-container">
                        <img class="popup-image" src=${location.imageSrc} />
                        <h3>${location.name}</h3>
                        <p id="description">${data.description}</p>
                    </div>
                    `)
                }
            })
        })
    }

    showClickedLocationPopup(locationName) {
        popups.map(popupData => {
            popupData.popup.remove()
            if(popupData.id === locationName) {
                popupData.popup.addTo(map)
            }
        })
    }

    getLocationsDescription() {
        const locations = this.props.mapLocations;

        locations.forEach((location, index) => {
            let site = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${location.urlSearchTerm}&limit=1&namespace=0&format=json&origin=*`;

            // Store an id property for every location to match its description
            location.id = index

            descriptionResults.push(this.fetchAsync(site, location))
        })
        
        return descriptionResults
    }

    // https://gist.github.com/msmfsd/fca50ab095b795eb39739e8c4357a808
    async fetchAsync(site, location) {
        // await response of fetch call
        let response = await fetch(site);
        // only proceed once promise is resolved
        let data = await response.json();
        // only proceed once second promise is resolved
        let result = {id: location.id, description: data[2][0]}

        return result;
    }

    render() {
        this.showClickedLocationPopup(this.props.clickedLocation)
        return (
            <div id="map" style={{width: '100%', height: '100vh'}}></div>
        )
    }
}

export default Map;