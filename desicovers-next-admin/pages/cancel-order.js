import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CancelOrder() {
    return (
        <div>
            <Typography
                variant="h4"
                gutterBottom
                style={{ textAlign: "center" }}
            >
                Cancellation
            </Typography>
            <br />
            <div className="Container1">
                <div className="form-group">
                    <ul className="messages">
                        <div
                            className="alert alert-error"
                            style={{ color: "red", display: "none" }}
                        ></div>
                    </ul>
                </div>
                <span id="order">
                    {/* {" "} */}
                    Order Id: <a href="#"></a>
                </span>
                <span id="detail">Order placed</span>
                <div className="cont1">
                    <div className="imgg">
                        {/* <img src="" alt="img1" height="100" width="100" /> */}
                    </div>
                    <div className="det">
                        <h3></h3>
                        <p>
                            <span style={{ fontWeight: "bold" }}>Rs: </span>
                        </p>
                        <p>
                            <span style={{ fontWeight: "bold" }}>Rs: </span>
                        </p>
                        <p>
                            <span style={{ fontWeight: "bold" }}>Rs: </span>
                        </p>
                        <p>
                            <span style={{ fontWeight: "bold" }}>
                                Payment Mode: Cash On Delivery
                            </span>
                        </p>
                        <p>
                            <span style={{ fontWeight: "bold" }}>
                                Payment Mode: Paytm
                            </span>
                        </p>
                        <p>
                            <span style={{ fontWeight: "bold" }}>
                                Transaction Status{" "}
                            </span>
                        </p>
                    </div>
                    <div className="delivery">
                        <p>Delivery Expected By</p>
                        <p>
                            <b>17 September 2021</b>
                        </p>
                    </div>
                </div>
                <div style={{ padding: "20px" }}>
                    <form
                        action="/postcancel/"
                        method="POST"
                        className="form-control"
                    >
                        {/* <label htmlFor="cars"></label> */}
                        <InputLabel
                            id="cancelReason"
                            style={{ color: "#000", fontSize: "16px" }}
                        >
                            Reason For Cancellation:
                        </InputLabel>
                        <input type="hidden" value="{{order.id}}" name="id" />

                        <Select
                            labelId="cancelReason"
                            id="cars"
                            value="3"
                            className="form-control"
                            name="cars"
                        >
                            <MenuItem value="1">
                                Product is not required anymore.
                            </MenuItem>
                            <MenuItem value="2">
                                Product is being delivered to a wrong
                                address(Customer’s mistake)
                            </MenuItem>
                            <MenuItem value="3">
                                Expected delivery date has changed and the
                                product is arriving at a later date
                            </MenuItem>
                            <MenuItem value="4">
                                Cheaper alternative available for lesser price
                            </MenuItem>
                            <MenuItem value="5">
                                Bad review from friends/relatives after ordering
                                the product
                            </MenuItem>
                        </Select>

                        {/* <select id="cars" name="cars">
                            <option>Choose one</option>
                            <option value="Product is not required anymore.">Product is not required anymore.</option>
                            <option value="Product is being delivered to a wrong address(Customer’s mistake)">Product is being delivered to a wrong address(Customer’s mistake)</option>
                            <option value="Expected delivery date has changed and the product is arriving at a later date">Expected delivery date has changed and the product is arriving at a later date</option>
                            <option value="Cheaper alternative available for lesser price">Cheaper alternative available for lesser price</option>
                            <option value="Bad review from friends/relatives after ordering the product">Bad review from friends/relatives after ordering the product</option>
                        </select> */}
                        <Button variant="contained" sx={{ ml: 3 }}>
                            Cancel Order
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}
