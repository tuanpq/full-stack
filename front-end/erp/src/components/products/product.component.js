import React, { Component } from "react";
import { Button, TextField, Container } from '@material-ui/core';
import ProductDataService from "../../services/product.service";

export default class Product extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeImage1 = this.onChangeImage1.bind(this);
        this.onChangeImage2 = this.onChangeImage2.bind(this);
        this.onChangeImage3 = this.onChangeImage3.bind(this);
        this.getProduct = this.getProduct.bind(this);
        this.updateProduct = this.updateProduct.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);

        this.state = {
            currentProduct: {
                id: null,
                name: "",
                price: 0.0,
                images: ["", "", ""]
            },
            message: ""
        };
    }

    componentDidMount() {
        this.getProduct(this.props.match.params.id);
    }

    onChangeName(e) {
        const name = e.target.value;

        this.setState(function(prevState) {
            return {
                currentProduct: {
                    ...prevState.currentProduct,
                    name: name
                }
            };
        });
    }

    onChangePrice(e) {
        const price = e.target.value;
        
        this.setState(prevState => ({
            currentProduct: {
                ...prevState.currentProduct,
                price: price
            }
        }));
    }

    onChangeImage1(e) {
        var newImages = [e.target.value, this.state.currentProduct.images[1], this.state.currentProduct.images[2]];
        
        this.setState(function(prevState) {
            return {
                currentProduct: {
                    ...prevState.currentProduct,
                    images: newImages
                }
            };
        });
    }

    onChangeImage2(e) {
        var newImages = [this.state.currentProduct.images[0], e.target.value, this.state.currentProduct.images[2]];
        
        this.setState(function(prevState) {
            return {
                currentProduct: {
                    ...prevState.currentProduct,
                    images: newImages
                }
            };
        });
    }

    onChangeImage3(e) {
        var newImages = [this.state.currentProduct.images[0], this.state.currentProduct.images[1], e.target.value];
        
        this.setState(function(prevState) {
            return {
                currentProduct: {
                    ...prevState.currentProduct,
                    images: newImages
                }
            };
        });
    }

    getProduct(id) {
        ProductDataService.get(id)
            .then(response => {
                this.setState({
                    currentProduct: response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    updateProduct() {
        ProductDataService.update(
            this.state.currentProduct.id,
            this.state.currentProduct
        )
        .then(response => {
            console.log(response.data);
            this.setState({
                message: "The product was updated successfully!"
            });
        })
        .catch(e => {
            console.log(e);
        });
    }

    deleteProduct() {    
        ProductDataService.delete(this.state.currentProduct.id)
        .then(response => {
            console.log(response.data);
            this.props.history.push('/products')
        })
        .catch(e => {
            console.log(e);
        });
    }

    render() {
        const { currentProduct } = this.state;

        return (
        <div>
            {currentProduct ? (
            <Container maxWidth="sm">
                <form>
                    <TextField
                        id="name"
                        name="name"
                        label="Name"
                        style={{ margin: 8 }}
                        placeholder="Product's name"
                        helperText=""
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={currentProduct.name}
                        onChange={this.onChangeName}
                    />
                    <TextField
                        id="price"
                        name="price"
                        label="Price"
                        style={{ margin: 8 }}
                        placeholder="Product's price"
                        helperText=""
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={currentProduct.price}
                        onChange={this.onChangePrice}
                    />

                    <TextField
                        id="image1"
                        name="image1"
                        label="Image 1"
                        style={{ margin: 8 }}
                        placeholder="Product's image 1"
                        helperText=""
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={currentProduct.images[0]}
                        onChange={this.onChangeImage1}
                    />

                    <TextField
                        id="image2"
                        name="image2"
                        label="Image 2"
                        style={{ margin: 8 }}
                        placeholder="Product's image 2"
                        helperText=""
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={currentProduct.images[1]}
                        onChange={this.onChangeImage2}
                    />

                    <TextField
                        id="image3"
                        name="image3"
                        label="Image 3"
                        style={{ margin: 8 }}
                        placeholder="Product's image 3"
                        helperText=""
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={currentProduct.images[2]}
                        onChange={this.onChangeImage3}
                    />
                </form>

                <Button variant="contained" color="primary" style={{ margin: 8 }} onClick={this.deleteProduct}>
                    Delete
                </Button>

                <Button variant="contained" color="primary" style={{ margin: 8 }} onClick={this.updateProduct}>
                    Update
                </Button>
                
                <p>{this.state.message}</p>
            </Container>
            ) : (
            <div />
            )}
        </div>
        );
    }
}