import React, { Component } from 'react';
import './ProductPage.css'


class ProductPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newApparel : {}
        }
        this.inputChange = this.inputChange.bind(this)
        this.createNewApparel = this.createNewApparel.bind(this)
    }



    componentDidMount() {
        // return fetch(`http://3.83.45.247:3030/products`)
         fetch(`http://localhost:3030/products`)
            .then(res => res.json())
            .then(res => this.setState({ products: res }))
            .catch(err => console.log(err))
    }

    inputChange(event) {
        let newApparel = this.state.newApparel
        newApparel[event.target.name] = event.target.value
        this.setState({
            newApparel
        })
        console.log(this.state)
    }

    createNewApparel() {
        console.log(this.state.newApparel)
        fetch('http://localhost:3030/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.newApparel)
        })
            .then(res => res.json())
            .then(this.getAllProducts())
            .catch(error => console.log(error))

    }

    showProducts(){
        return this.state.products ? this.state.products.map((product, key) => {

            return (
                
                    <div className='landingpageimg' key={key}>
                    
                        <img src={product.imgurl}  />
                        <p>{product.category}</p>
                        <h2><span>{product.name}</span>
                        
                        <span>{product.price}</span></h2>
                        {/* <button onclick= > Add to cart </button> */}
                        
                    
                    </div>

            )
        }) : 'Did not fetch'
    }
        

    render() {
        return (
            <div className= "Productcontainer">
                {this.showProducts()}
                {console.log(this.props.category)}
                <button onClick = {this.createNewApparel}>Create New Apparel</button>
                <input name="name" placeholder="name" onChange={this.inputChange} />
                <input name="type" placeholder="type" onChange={this.inputChange} />
                <input name="category" placeholder="category" onChange={this.inputChange} />
                <input name="price" placeholder="price" onChange={this.inputChange} />
                <input name="count" placeholder="count" onChange={this.inputChange} />
                <input name="imgurl" placeholder="imgurl" onChange={this.inputChange} />
                <input name="size" placeholder="size" onChange={this.inputChange} />
            </div>
        )
    }
}


export default ProductPage;