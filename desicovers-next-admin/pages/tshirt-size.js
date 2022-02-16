import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Image from 'next/image';

export default function Home() {
    return (
        <>
            <main className="main">

                <nav aria-label="breadcrumb" className="breadcrumb-nav mb-2">
                    <div className="container">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item" style={{ fontSize: "15px" }}><a href="/home">Home</a></li>
                            <li className="breadcrumb-item" style={{ fontSize: "15px" }}><a href="#">Shop</a></li>
                        </ol>
                    </div>
                </nav>

                <div className="page-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="toolbox">

                                    <div className="toolbox-left">
                                        <div className="toolbox-sort">
                                            <label htmlFor="sortby" style={{ color: "#000", fontSize: "15px" }}>Filter:</label><br /><br />
                                            <form method="get">
                                                <div className="row">
                                                    <div className="form-group col-sm-4 col-md-3">

                                                    </div>
                                                    <div className="product-details-quantity">
                                                        <p style={{ color: "#000", fontSize: "15px" }}>Value: <span id="demo"></span></p>
                                                    </div>
                                                </div>
                                                <br />
                                                <Button variant="contained">Search
                                                </Button>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                <br />
                                <div className="toolbox-right">
                                    <div className="toolbox-sort">
                                        <InputLabel id="sortby">Sort by:</InputLabel>
                                        <Select labelId="sortby" id="sortby" value="popular" className="form-control">
                                            <MenuItem value="popular">Most Popular</MenuItem>
                                            <MenuItem value="rated">Most Rated</MenuItem>
                                            <MenuItem value="date">Date</MenuItem>
                                        </Select>
                                    </div>
                                </div>
                            </div>

                            <br/>
                            <div className="products mb-3">
                                <div className="row justify-content-center">
                                    <div className="col-6 col-md-4 col-lg-4">
                                        <div className="product product-7 text-center">
                                            <figure className="product-media" style={{ width: "100%", height: "300px" }}>
                                                <span className="product-label label-new">New</span>
                                                <a href="">
                                                    <Image src="" alt="Product image" className="product-image" />
                                                </a>
                                            </figure>
                                            <div className="product-body">
                                                <h3 className="product-title"><a href="/product"></a></h3>
                                                <div className="product-price">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </main >
        </>
    );
}
