import React, { Component } from 'react';
import Map from './Map'
import List from './List'
import './App.css'

// Locations data
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

let filtered = false; //Checker for clicking filter button

class App extends Component {

  state = {
    popupLocation: '', // Stores the clicked location from the list
    markerLocation: 'all' // Stores the chosen location from select menu
  }

  // Get the location from the list to use it in map
  changeLocation(name) {
    // Show the popup if hidden and hide it if shown
    if(this.state.popupLocation === '' || this.state.popupLocation !== name)
      this.setState({ popupLocation: name})
    else if(this.state.popupLocation === name)
      this.setState({ popupLocation: ''})
  }

  // On filtering, close all the opened popups
  hideAllPopups() {
    this.setState({popupLocation: ''})
    this.doneFiltering()
  }

  // Filter map if filter button is clicked
  filterMap(location) {
    this.setState({markerLocation: location})
    filtered = true
  }

  // Return value of filtered to false after filtering
  doneFiltering() {
    filtered = false
  }

  // Open or Close the menu and adjust focus
  addAllCloseClasses() {
    const list = document.getElementById('list'),
          listIcon = document.querySelector('.list-icon'),
          listContainer = document.querySelector('.list-container')

    // Add classes that hides the menu offscreen
    list.classList.toggle('close-list')
    listIcon.classList.toggle('close-list-icon')

    if(list.classList.contains('close-list')) {
      // Remove focus from select element
      listContainer.children[1][0].setAttribute('tabindex', '-1')

      // Remove focus from filter button
      listContainer.children[1][1].setAttribute('tabindex', '-1')
  
      // Remove focus from each list item
      let listItems = [].slice.call(listContainer.children[2].children)
      listItems.forEach(item => {
        item.setAttribute('tabindex', '-1')
      });
    }
    else {
      // Return focus to select element
      listContainer.children[1][0].setAttribute('tabindex', '0')

      // Return focus to filter button
      listContainer.children[1][1].setAttribute('tabindex', '0')
  
      // Return focus to each list item
      let listItems = [].slice.call(listContainer.children[2].children)
      listItems.forEach(item => {
        item.setAttribute('tabindex', '0')
      });
    }
  }

  render() {
    return (
      <div className="container">
        <List listLocations={locations}
              togglePopup={this.changeLocation.bind(this)}
              filterMap={this.filterMap.bind(this)}
              closeMenu={this.addAllCloseClasses}>
        </List>

        <Map mapLocations={locations}
             clickedLocation={this.state.popupLocation}
            chosenLocation={this.state.markerLocation}
            hideAllPopups={this.hideAllPopups.bind(this)}
            filtered={filtered}
            >
        </Map>
      </div> 
    );
  }
}

export default App;
