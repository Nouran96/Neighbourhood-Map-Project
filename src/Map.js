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

class Map extends Component {

    componentDidMount() {
        mapboxgl.accessToken = 'pk.eyJ1Ijoibm91cmFucyIsImEiOiJjamwxenJ3Z20xbGMxM3FxazlqbHdoYW80In0.d42qV9z_Se6BiYI32ZREIQ';
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v9',
            center: [31.200092, 28.318739],
            zoom: 5.5
        });

        this.createMarkersWithPopups(map);
    }

    // Creates the markers specific for each location with corresponding popup
    createMarkersWithPopups(map) {
        const locations = this.props.mapLocations;

        locations.forEach(location => {
            var popup = new mapboxgl.Popup({offset: popupOffsets, className: 'pop-up'})
                .setText(location.name);
        
            var marker = new mapboxgl.Marker()
                .setLngLat(location.latLng)
                .setPopup(popup)
                .addTo(map);
        });
    }

    render() {
        return (
            <div id="map" style={{width: '100%', height: '100vh'}}></div>
        )
    }
}

export default Map;