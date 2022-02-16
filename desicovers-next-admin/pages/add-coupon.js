import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function AddCoupon() {
    return (
        <>
            <Typography variant="h4" gutterBottom component="div">
                <center>Coupon Registration</center>
            </Typography>
            <br />
            <form method="POST" action="/coupon/">
                <table align="center">
                    <tr style={{ padding: "15px", margin: "15px" }}>
                        <td>
                            <label
                                style={{
                                    marginTop: "5px",
                                    fontSize: "16px",
                                    color: "#000",
                                }}
                            >
                                Coupon Code:
                            </label>
                        </td>
                        {/* <td><input type="text" name="ccode" /></td> */}
                        <td>
                            <TextField
                                required
                                name="ccode"
                                id="outlined-required"
                            />
                        </td>
                    </tr>

                    <tr style={{ padding: "15px" }}>
                        <td>
                            <label
                                style={{
                                    marginTop: "5px",
                                    fontSize: "16px",
                                    color: "#000",
                                }}
                            >
                                Coupon Description:
                            </label>
                        </td>
                        {/* <td><input type="text" name="description" /></td> */}
                        <td>
                            <TextField name="description" id="outlined" />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <label
                                style={{
                                    marginTop: "5px",
                                    fontSize: "16px",
                                    color: "#000",
                                }}
                            >
                                Coupon Limit(User Limit):
                            </label>
                        </td>
                        {/* <td><input type="text" name="Userlimit" /></td> */}
                        <td>
                            <TextField name="UserLimit" id="outlined" />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <label
                                style={{
                                    marginTop: "5px",
                                    fontSize: "16px",
                                    color: "#000",
                                }}
                            >
                                Price/Percentage:
                            </label>
                        </td>
                        {/* <td><label>Price:</label><input type="radio" id="male" name="percentage" value="price" />
                            <label>Percentage:</label><input type="radio" id="female" name="percentage" value="percent" />
                        </td> */}
                        <td>
                            <FormControl>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                >
                                    <FormControlLabel
                                        value="price"
                                        control={<Radio />}
                                        label="Price "
                                    />
                                    <FormControlLabel
                                        value="percent"
                                        control={<Radio />}
                                        label="Percentage "
                                    />
                                </RadioGroup>
                            </FormControl>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label
                                style={{
                                    marginTop: "5px",
                                    fontSize: "16px",
                                    color: "#000",
                                }}
                            >
                                Coupon Discount(in %) :
                            </label>
                        </td>
                        {/* <td><input type="number" name="discount" /></td> */}
                        <td>
                            <TextField
                                id="outlined-number"
                                type="number"
                                name="discount"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <label
                                style={{
                                    marginTop: "5px",
                                    fontSize: "16px",
                                    color: "#000",
                                }}
                            >
                                Start Date:
                            </label>
                        </td>
                        <td>
                            <input
                                type="date"
                                id="today2"
                                name="add_date"
                                style={{
                                    padding: "10px 20px",
                                    fontSize: "14px",
                                }}
                            />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <label
                                style={{
                                    marginTop: "5px",
                                    fontSize: "16px",
                                    color: "#000",
                                }}
                            >
                                End Date:
                            </label>
                        </td>
                        <td>
                            <input
                                type="date"
                                id="today2"
                                name="end_date"
                                style={{
                                    padding: "10px 20px",
                                    fontSize: "14px",
                                }}
                            />
                        </td>
                    </tr>

                    <br />
                    <tr style={{ textAlign: "right" }}>
                        <td>
                            {" "}
                            <Button
                                sx={{
                                    mt: 1,
                                    mr: 1,
                                    fontWeight: "bolder",
                                    border: "3px solid",
                                }}
                                type="submit"
                                variant="outlined"
                            >
                                Submit
                            </Button>
                        </td>
                    </tr>
                </table>
            </form>

            {/* <script type="text/javascript">


                let today = new Date().toISOString().substr(0, 10);


            </script> */}
        </>
    );
}
