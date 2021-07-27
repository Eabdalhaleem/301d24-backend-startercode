import React, { Component } from 'react'

export class CoffeeCard extends Component {
    constructor(props){
        super(props),
        this.state={
            title:'',
            image:'',
            ingredients:'',

        }
       clickCoffeeList=(e)=>{
           this.setState({
            title: e.target.value,
             image: e.target.value,
             ingredients: e.target.value 

           })
       } 
        
    }
    render() {


        return (
            <div>
                <button onClick={this.clickCoffeeList}></button>
            </div>
        )
    }
}

export default CoffeeCard
