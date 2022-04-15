import Button from "@mui/material/Button";
import { useState } from "react";
import axios from "axios";

PaymentRecieve.getInitialProps = async function () {
    const res = await axios.get(
        "https://desicover.herokuapp.com/get-all-coupons"
    );
    // const data = await res.data;
    // TODO: TEMP FOR NOW
    const data = {
        id: "",
        couponCode: "",
        couponDescription: "",
        couponUserLimit: "",
        couponUsedTimes: "",
        couponDiscountType: "",
        couponDiscountValue: "",
    };

    console.log(`Show data fetched. Count: ${data.length}`);

    return {
        data: data,
    };
};

export default function PaymentRecieve(props) {
    return (
        <>
            <table className="table table-striped table-bordered table-sm">
                <thead className="thead-dark">
                    <tr>
                        <th style={{ fontSize: "14px", padding: "10px 5px" }}>
                            COUPON CODE{" "}
                        </th>
                        <th style={{ fontSize: "14px", padding: "10px 5px" }}>
                            COUPON DESCRIPTION
                        </th>
                        <th style={{ fontSize: "14px", padding: "10px 5px" }}>
                            COUPON DISCOUNT
                        </th>
                        <th style={{ fontSize: "14px", padding: "10px 5px" }}>
                            USER LIMIT
                        </th>
                        <th style={{ fontSize: "14px", padding: "10px 5px" }}>
                            PRICE/PERCENTAGE
                        </th>
                        <th style={{ fontSize: "14px", padding: "10px 5px" }}>
                            START DATE
                        </th>
                        <th style={{ fontSize: "14px", padding: "10px 5px" }}>
                            END DATE
                        </th>
                        <th style={{ fontSize: "14px", padding: "10px 5px" }}>
                            ACTION
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((coupon, index) => (
                        <tr key={index}>
                            <td>{coupon.couponCode}</td>
                            <td>{coupon.couponDescription}</td>
                            <td>{coupon.couponUserLimit}</td>
                            <td>{coupon.couponUsedTimes}</td>
                            <td>{coupon.couponDiscountType}</td>
                            <td>{coupon.couponDiscountValue}</td>
                            <td>
                                <Button
                                    variant="contained"
                                    href="/editcoupon/"
                                    style={{
                                        color: "#fff",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Edit Coupon
                                </Button>
                                <Button
                                    variant="contained"
                                    href="/deletecoupon/"
                                    style={{
                                        color: "#fff",
                                        fontWeight: "bold",
                                    }}
                                    color="error"
                                >
                                    {" "}
                                    Delete Coupon
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br />
            <br />
            <center>
                {" "}
                <Button
                    variant="contained"
                    href="/coupon"
                    style={{ color: "#fff", fontWeight: "bold" }}
                    color="success"
                >
                    Add New Coupon
                </Button>
            </center>
        </>
    );
}
