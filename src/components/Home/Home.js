import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import ProductPage from '../ProductPage/ProductPage';

import NavBar from '../NavBar/NavBar';

class Home extends Component{
    constructor(props) {
        super(props)
        this.state = {
            newApparel : {},
            productCategory: 'all'
        }
    }

    changeCategory = (category) => {
        this.setState(prevState => {
            return {
                ...prevState,
                productCategory: category
            }
        })
    }

    render() {
        return (
            <div>
                <NavBar changeCategory={this.changeCategory}/>
                <ProductPage category={this.state.productCategory}/>
                <Router>
                    <Switch>
                        <Route exact path="ProductPage">
                            <ProductPage category={this.state.productCategory}/>
                        </Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}






export default Home


