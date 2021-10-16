import React, { Component } from "react";
import { Button, TextField, Paper, Table, TableHead, TableBody, TableRow, TableCell, TablePagination, Grid, Box } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import ProductDataService from "../../services/product.service";

const styles = theme => ({
    pageContent: {
        margin: theme.spacing(2),
        padding: theme.spacing(2)
    },
    searchInput: {
        width: '75%'
    },
    paper: {
        padding: theme.spacing(4),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    table: {
        marginTop: theme.spacing(8),
        '& thead th': {
            fontWeight: '600',
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.primary.light,
        },
        '& tbody td': {
            fontWeight: '300',
        },
        '& tbody tr:hover': {
            backgroundColor: '#fffbf2',
            cursor: 'pointer',
        },
    },
});

const headCells = [
    { id: 'name', label: 'Name' },
    { id: 'actions', label: 'Actions', disableSorting: true  },
]

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.onChangeSearchName = this.onChangeSearchName.bind(this);
        this.retrieveProducts = this.retrieveProducts.bind(this);
        this.onHandlePageChange = this.onHandlePageChange.bind(this);
        this.onHandleRowsPerPageChange = this.onHandleRowsPerPageChange.bind(this);
        this.searchName = this.searchName.bind(this);

        this.state = {
            products: [],
            currentProduct: null,
            currentIndex: -1,
            searchName: "",
            totalElements: 0,
            totalPages: 0,
            pageNumber: 0,
            rowsPerPageOptions: [10, 20, 50],
            rowsPerPage: 10,
        };
    }

    componentDidMount() {
        this.retrieveProducts();
    }

    onChangeSearchName(e) {
        const searchName = e.target.value;

        this.setState({
            searchName: searchName
        });
    }

    retrieveProducts() {
        ProductDataService.getProducts(this.state.pageNumber, this.state.rowsPerPage)
        .then(response => {
            this.setState({
                products: response.data.products,
                pageNumber: response.data.pageNumber,
                totalElements: response.data.totalElements,
                totalPages: response.data.totalPages,
            });
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    }

    

    searchName() {
        this.setState({
            currentProduct: null,
            currentIndex: -1
        });

        ProductDataService.findByName(this.state.searchName, 0, this.state.rowsPerPage)
        .then(response => {
            this.setState({
                products: response.data.products,
                pageNumber: response.data.pageNumber,
                totalElements: response.data.totalElements,
                totalPages: response.data.totalPages,
            });
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    }

    onHandlePageChange(event, newPage) {
        ProductDataService.findByName(this.state.searchName, newPage, this.state.rowsPerPage)
        .then(response => {
            this.setState({
                products: response.data.products,
                pageNumber: response.data.pageNumber,
                totalElements: response.data.totalElements,
                totalPages: response.data.totalPages,
            });
        })
        .catch(e => {
            console.log(e);
        });
    }

    onHandleRowsPerPageChange(event) {
        ProductDataService.findByName(this.state.searchName, 0, event.target.value)
        .then(response => {
            this.setState({
                products: response.data.products,
                pageNumber: response.data.pageNumber,
                totalElements: response.data.totalElements,
                totalPages: response.data.totalPages,
            });
        })
        .catch(e => {
            console.log(e);
        });
    }

    render() {
        const { searchName, products } = this.state;
        
        return (
            <div>
                <Grid container spacing={8}>
                    <Grid item xs={6}>
                        <TextField
                            id="name"
                            name="name"
                            className={styles.paper}
                            placeholder="Product's name"
                            helperText=""
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={searchName}
                            onChange={this.onChangeSearchName}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <Button variant="contained" color="primary" className={styles.paper} onClick={this.searchName}>
                            Search Product
                        </Button>
                    </Grid>
                    <Grid item xs={2}>
                        <Button variant="contained" color="primary" className={styles.paper} href="/products/add">
                            Add Product
                        </Button>     
                    </Grid>
                </Grid>

                <Box style={{height: 64}} />
                
                <Paper className={styles.pageContent}>
                
                    <Table className={styles.table}>
                        <TableHead>
                            <TableRow>
                                {headCells.map(headCell => (
                                    <TableCell key={headCell.id}>{headCell.label}</TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                products.map(item =>
                                    (<TableRow key={item.id}>
                                        <TableCell>{item.name}</TableCell>
                                        <TableCell>
                                            <Button variant="contained" color="primary" href={"/products/" + item.id}>
                                                Detail
                                            </Button>    
                                        </TableCell>
                                    </TableRow>)
                                )
                            }
                        </TableBody>
                    </Table>
                    <TablePagination 
                        component="div"
                        page={this.state.pageNumber}
                        rowsPerPageOptions={this.state.rowsPerPageOptions}
                        rowsPerPage={this.state.rowsPerPage}
                        count={this.state.totalElements}
                        onPageChange={this.onHandlePageChange}
                        onRowsPerPageChange={this.onHandleRowsPerPageChange}/>
                    
                </Paper>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(ProductList);