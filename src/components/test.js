import React, { Component } from 'react';


class Test extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }



    componentDidMount() {
        return fetch(`http://localhost:5000/products`)
            .then(res => res.json())
            .then(res => this.setState({products: res}))
            .catch(err => console.log(err))
    }


    render() {
       console.log('test');
        return (

            <div>{this.state.products ? this.state.products.map(product => <h1>{product.name}</h1>) : 'Did not fetch'}</div>
            
        )
    }
}

export default Test;