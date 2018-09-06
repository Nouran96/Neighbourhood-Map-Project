import React, { Component } from 'react'
import mapboxgl from 'mapbox-gl';

class Map extends Component {

    componentDidMount() {
        mapboxgl.accessToken = 'pk.eyJ1Ijoibm91cmFucyIsImEiOiJjamwxenJ3Z20xbGMxM3FxazlqbHdoYW80In0.d42qV9z_Se6BiYI32ZREIQ';
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v9',
            center: [31.200092, 28.318739],
            zoom: 5.5
        });
    }

    render() {
        return (
            <div id="map" style={{width: '100%', height: '100vh'}}></div>
        )
    }
}

export default Map;