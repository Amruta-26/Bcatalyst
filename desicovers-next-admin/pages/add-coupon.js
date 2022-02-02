import React from 'react';

export default function AddCoupon() {
    return (
        <>
            <h1>
                <center>Coupon Registration</center>
            </h1>

            <form method='POST' action="/coupon/">
                <table align='center'>


                    <tr>
                        <td><label style={{ marginTop: "5px" }}>Coupon Code:</label></td>
                        <td><input type="text" name="ccode" /></td>

                    </tr>

                    <tr>
                        <td><label style={{ marginTop: "5px" }}>Coupon Description:</label></td>
                        <td><input type="text" name="description" /></td>

                    </tr>

                    <tr>
                        <td><label style={{ marginTop: "5px" }}>Coupon Limit(User Limit):</label></td>
                        <td><input type="text" name="Userlimit" /></td>

                    </tr>

                    <tr>
                        <td><label style={{ marginTop: "5px" }}>Price/Percentage:</label></td>
                        <td><label>Price:</label><input type="radio" id="male" name="percentage" value="price" />
                            <label>Percentage:</label><input type="radio" id="female" name="percentage" value="percent" />
                        </td>

                    </tr>
                    <tr>
                        <td><label style={{ marginTop: "5px" }}>Coupon Discount :</label></td>
                        <td><input type="number" name="discount" /></td>

                    </tr>

                    <tr>
                        <td><label style={{ marginTop: "5px" }}>Start Date:</label></td>
                        <td><input type="date" id='today2' name="add_date" /></td>

                    </tr>

                    <tr>
                        <td><label style={{ marginTop: "5px" }}>End Date:</label></td>
                        <td><input type="date" id="today2" name="end_date" /></td>

                    </tr>

                    <br />
                        <tr>
                            <td><button type="submit" name="Submit"style={{marginLeft: "100%", backgroundColor: "transparent", border: "1px solid #c96", color: "#c96", marginTop: "20px",borderRadius: "5px"}}>Submit</button></td>
                        </tr>

                </table>
            </form>

            <script type="text/javascript">


                let today = new Date().toISOString().substr(0, 10);
                document.querySelector("#today").value = today;

                document.querySelector("#today2").valueAsDate = new Date();


            </script>
        </>
    );
}