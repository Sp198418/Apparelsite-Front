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
                    <div className ='landingpageimg'>
                        <img src={product.imgurl} height='20%' width='20%' />
                        <h2>{product.name}</h2>
                        <h3>{product.price}</h3>
                    </div>
                    )
            }}
            ) : 'Did not fetch'}</div>
            
        )
    }
}

export default LandingPage;