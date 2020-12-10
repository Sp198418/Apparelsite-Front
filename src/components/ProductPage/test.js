import React, { Component } from 'react';


class Test extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }



    componentDidMount() {
        return fetch(`http://3.83.45.247:3030/products`)
            .then(res => res.json())
            .then(res => this.setState({products: res}))
            .catch(err => console.log(err))
    }


    render() {

        return (

            <div>{this.state.products ? this.state.products.map(product => <h1>{product.name}</h1>) : 'Did not fetch'}</div>
            
        )
    }
}

export default Test;