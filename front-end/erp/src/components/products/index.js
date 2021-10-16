import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import AddProduct from "./add-product.component";
import Product from "./product.component";
import ProductList from "./product-list.component";

export default class Products extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/products" component={ProductList} />
                    <Route exact path="/products/add" component={AddProduct} />
                    <Route path="/products/:id" component={Product} />
                </Switch>      
            </div>
        );
    }
}