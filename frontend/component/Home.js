import React, { Component } from 'react'
cc
import Favlist from './Favlist';

export class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            title:"",
            descreption:"",
            image:""
        }
    }
    render() {
        return (
            <div>
                <Favlist/>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{this.state.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                        <Card.Text>
                         {this.state.descreption}
                         {this.state.image}
                        </Card.Text>
                        {/* <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link> */}
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Home

