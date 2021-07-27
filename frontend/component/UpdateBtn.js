import React, { Component } from 'react';
import { Form} from 'react-bootstrap';

export class UpdateBtn extends Component {

    render() {
        return (
            <>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>{this.state.title}</Form.Label>
                    <Form.Control type="file" />
                </Form.Group>
                <Form.Group controlId="formFileMultiple" className="mb-3">
                    <Form.Label>{this.state.description}</Form.Label>
                    <Form.Control type="file" multiple />
                </Form.Group>
                <Form.Group controlId="formFileDisabled" className="mb-3">
                    <Form.Label>{this.state.ingredients}</Form.Label>
                    <Form.Control type="file" disabled />
                    <button onSubmit={this.clickCoffeeList}>UPdate</button>
                    <button onSubmit={this.clickCoffeeList}>Delete</button>
                </Form.Group>
              
           
            </>
        )
    }
}

export default UpdateBtn
