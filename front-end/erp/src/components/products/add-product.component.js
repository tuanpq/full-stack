import React, { Component } from "react";
import { Button, TextField, Container } from '@material-ui/core';
import ProductDataService from "../../services/product.service";

export default class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.saveProduct = this.saveProduct.bind(this);
        this.newProduct = this.newProduct.bind(this);
        this.onChangeImage1 = this.onChangeImage1.bind(this);
        this.onChangeImage2 = this.onChangeImage2.bind(this);
        this.onChangeImage3 = this.onChangeImage3.bind(this);

        this.state = {
            id: null,
            name: "",
            price: 0.0,
            images: ["", "", ""]
        };
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangePrice(e) {
        this.setState({
            price: e.target.value
        });
    }

    onChangeImage1(e) {
        var newImages = [e.target.value, this.state.images[1], this.state.images[2]];

        this.setState({
            images: newImages
        });
    }

    onChangeImage2(e) {
        var newImages = [this.state.images[0], e.target.value, this.state.images[2]];

        this.setState({
            images: newImages
        });
    }

    onChangeImage3(e) {
        var newImages = [this.state.images[0], this.state.images[1], e.target.value];

        this.setState({
            images: newImages
        });
    }

    saveProduct() {
        var data = {
            name: this.state.name,
            price: this.state.price,
            images: this.state.images
        };

        ProductDataService.create(data)
            .then(response => {
                this.newProduct();
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    }

    newProduct() {
        this.setState({
            id: null,
            name: "",
            price: 0.0,
            images: ["", "", ""]
        });
    }

    render() {
        return (
            <div>
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
                            value={this.state.name}
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
                            value={this.state.price}
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
                            value={this.state.images[0]}
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
                            value={this.state.images[1]}
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
                            value={this.state.images[2]}
                            onChange={this.onChangeImage3}
                        />

                        <Button variant="contained" color="primary" style={{ margin: 8 }} onClick={this.saveProduct}>
                            Submit
                        </Button>
                        
                    </form>
                </Container>
            </div>
        );
    }
}