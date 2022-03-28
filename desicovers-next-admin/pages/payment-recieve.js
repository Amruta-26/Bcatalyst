import Button from '@mui/material/Button';

export default function PaymentRecieve() {
    return (
        <>
            <div className="table-responsive">
                <div className="card card-body">
                    <h4 style={{ color: "#000", fontSize: "15px" }}>
                        Filter Orders:
                    </h4>

                    <form method="get">
                        <Button variant="contained">Search</Button>
                    </form>
                </div>
                <br />
                <br />
                <table
                    style={{ marginLeft: "20px", width: "95%" }}
                    className="table table-striped table-bordered table-sm"
                >
                    <thead className="thead-dark">
                        <tr>
                            <th
                                style={{
                                    textAlign: "center",
                                    fontSize: "14px",
                                }}
                            >
                                Order Id
                            </th>
                            <th
                                style={{
                                    textAlign: "center",
                                    fontSize: "14px",
                                }}
                            >
                                Order Date
                            </th>
                            <th
                                style={{
                                    textAlign: "center",
                                    fontSize: "14px",
                                }}
                            >
                                Coupon
                            </th>
                            <th
                                style={{
                                    textAlign: "center",
                                    fontSize: "14px",
                                }}
                            >
                                Payment Mode
                            </th>
                            <th
                                style={{
                                    textAlign: "center",
                                    fontSize: "14px",
                                }}
                            >
                                Bank Name
                            </th>
                            <th
                                style={{
                                    textAlign: "center",
                                    fontSize: "14px",
                                }}
                            >
                                Payment Mode
                            </th>
                            <th
                                style={{
                                    textAlign: "center",
                                    fontSize: "14px",
                                }}
                            >
                                Currency
                            </th>
                            <th
                                style={{
                                    textAlign: "center",
                                    fontSize: "14px",
                                }}
                            >
                                TotalAmount
                            </th>
                            <th
                                style={{
                                    textAlign: "center",
                                    fontSize: "14px",
                                }}
                            >
                                Address
                            </th>
                            <th
                                style={{
                                    textAlign: "center",
                                    fontSize: "14px",
                                }}
                            >
                                Mobile Number
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}