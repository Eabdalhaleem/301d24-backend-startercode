import React, { Component } from 'react'
import CoffeeCard from './CoffeeCard'

export class Favlist extends Component {
    render() {
        return (
            <div>
                <CoffeeCard title={this.state.title} image={this.state.image_url} ingredients={this.state.ingredients}/>
            </div>
        )
    }
}

export default Favlist
