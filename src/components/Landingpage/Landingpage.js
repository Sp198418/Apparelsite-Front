import React, { Component } from 'react';
import './Landingpage.css'


class LandingPage extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }



    componentDidMount() {
        // return fetch(`http://3.83.45.247:3030/products`)
        return fetch(`http://localhost:3030/products`)
            .then(res => res.json())
            .then(res => this.setState({products: res}))
            .catch(err => console.log(err))
    }


    render() {

        return (

            <div>{this.state.products ? this.state.products.map(product =>{ {
                
                return (
                    <div>
                        <img src={product.imgurl} />
                        <h1>{product.name}</h1>
                    </div>)
            }}
            ) : 'Did not fetch'}</div>
            
        )
    }
}

export default LandingPage;