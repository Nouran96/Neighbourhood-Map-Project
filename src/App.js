import React, { Component } from 'react';
import Map from './Map'

const locations = [
  {
      latLng: [33.975561111111,28.555830555556],
      name: 'Saint Catherine\'s Monastery',
      urlSearchTerm: 'Saint%20Catherine\'s%20Monastery',
      id: 1
  },
  {
      latLng: [29.909201, 31.208871],
      name: 'Bibliotheca Alexandrina',
      urlSearchTerm: 'Bibliotheca%20Alexandrina',
      id: 2
  },
  {
    latLng: [31.132496, 29.977296],
    name: 'Giza Pyramids',
    urlSearchTerm: 'Giza%20Pyramids',
    id: 3
  },
  {
    latLng: [32.65727, 25.718835],
    name: 'Karnak Temple',
    urlSearchTerm: 'Karnak%20Temple',
    id: 4
  },
  {
    latLng: [32.87754, 23.97058],
    name: 'Aswan Dam',
    urlSearchTerm: 'Aswan%20Dam',
    id: 5
  },
  {
    latLng: [34.537311, 28.572268],
    name: 'Aswan Dam',
    urlSearchTerm: 'Aswan%20Dam',
    id: 6
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
