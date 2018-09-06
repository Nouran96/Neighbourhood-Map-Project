import React, { Component } from 'react';
import Map from './Map'
import './App.css'

const locations = [
  {
      latLng: [33.975561111111,28.555830555556],
      name: 'Saint Catherine\'s Monastery',
      urlSearchTerm: 'Saint%20Catherine\'s%20Monastery',
      imageSrc: '../images/Saint-Catherine-Monastery.jpg'
  },
  {
      latLng: [29.909201, 31.208871],
      name: 'Bibliotheca Alexandrina',
      urlSearchTerm: 'Bibliotheca%20Alexandrina',
      imageSrc: '../images/Bibliotheca-Alexandrina.jpg'
  },
  {
    latLng: [31.132496, 29.977296],
    name: 'The Great Pyramids Of Giza',
    urlSearchTerm: 'Giza%20Pyramids',
    imageSrc: '../images/Giza-Pyramids.jpg'
  },
  {
    latLng: [32.65727, 25.718835],
    name: 'Karnak Temple',
    urlSearchTerm: 'Karnak',
    imageSrc: '../images/Karnak.jpg'
  },
  {
    latLng: [32.87754, 23.97058],
    name: 'Aswan Dam',
    urlSearchTerm: 'Aswan%20Dam',
    imageSrc: '../images/Aswan-Dam.jpg'
  },
  {
    latLng: [34.537311, 28.572268],
    name: 'Dahab Blue Hole',
    urlSearchTerm: 'Blue%20Hole%20(%20Red%20Sea%20)',
    imageSrc: '../images/Blue-Hole.jpg'
  }
];

class App extends Component {
  render() {
    return (
      <Map mapLocations={locations} />
    );
  }
}

export default App;
