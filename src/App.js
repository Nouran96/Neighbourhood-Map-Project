import React, { Component } from 'react';
import Map from './Map'
import styleApp from './App.css'

const locations = [
  {
      latLng: [33.975561111111,28.555830555556],
      name: 'Saint Catherine\'s Monastery',
      urlSearchTerm: 'Saint%20Catherine\'s%20Monastery',
  },
  {
      latLng: [29.909201, 31.208871],
      name: 'Bibliotheca Alexandrina',
      urlSearchTerm: 'Bibliotheca%20Alexandrina',
  },
  {
    latLng: [31.132496, 29.977296],
    name: 'Giza Pyramids',
    urlSearchTerm: 'Giza%20Pyramids',
  },
  {
    latLng: [32.65727, 25.718835],
    name: 'Karnak Temple',
    urlSearchTerm: 'Karnak',
  },
  {
    latLng: [32.87754, 23.97058],
    name: 'Aswan Dam',
    urlSearchTerm: 'Aswan%20Dam',
  },
  {
    latLng: [34.537311, 28.572268],
    name: 'Dahab Blue Hole',
    urlSearchTerm: 'Blue%20Hole%20(%20Red%20Sea%20)',
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
