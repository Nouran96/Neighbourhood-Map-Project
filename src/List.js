import React, { Component } from 'react'

class List extends Component {

    state = {
        value: 'all'
    }

    // Keep the select menu value updated with the selected option through state
    changeValue(e) {
        this.setState({ value: e.target.value })
    }

    filterLocations(e) {
        e.preventDefault()

        const listItems = document.getElementsByClassName('list-item')

        // Found this method here: https://stackoverflow.com/questions/222841/most-efficient-way-to-convert-an-htmlcollection-to-an-array
        const listItemsArr = [].slice.call(listItems);

        // If all places is selected, show all locations and return
        if(this.state.value === 'all') {
            listItemsArr.forEach(item => {
                item.style.display = 'block'
            })
            this.props.filterMap('all')
            return true;
        }

        // Find the selected location from the list
        const searchedLocation = listItemsArr.filter(item => item.textContent === this.state.value)

        // Show only the selected location and hide the others
        listItemsArr.forEach(item => {
            if(item !== searchedLocation[0]) {
                item.style.display = 'none'
            }
            else {
                item.style.display = 'block'
            }
        });

        this.props.filterMap(searchedLocation[0].textContent)
    }

    render() {
        return (
            <div className="list-container">
                <h1>Egypt's Locations</h1>
                <form>
                    <select value={this.state.value} onChange={(e) => this.changeValue(e)}>

                        <option value="all">All Places</option>
                        {this.props.listLocations.map(location => (
                            <option key={location.urlSearchTerm} value={location.name}>{location.name}</option>
                        ))}

                    </select>
                    <button id="filter" onClick={(e) => {
                        this.filterLocations(e)
                    }}>Filter</button>
                </form>
                <ul className="locations-list">
                    {this.props.listLocations.map(location => (
                        <li key={location.name} className="list-item" onClick={(e) =>{
                            this.props.togglePopup(location.name)
                        }}>
                            {location.name}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default List;