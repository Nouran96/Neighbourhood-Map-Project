import React, { Component } from 'react'

class List extends Component {
    render() {
        return (
            <div className="list-container">
                <h1>Egypt's Locations</h1>
                <form>
                    <input type="text" name="search" placeholder="Search for a place in list"/>
                    <button id="filter">Filter</button>
                </form>
                <ul className="locations-list">
                    {this.props.listLocations.map(location => (
                        <li key={location.id} className="list-item">
                            <a href="#">{location.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default List;