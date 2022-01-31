export default function PaymentRecieve() {
    return (
        <>

            <div className="table-responsive">
                <div className="card card-body">
                    <h4>Filter Orders:</h4>

                    <form method="get">
                        <button className="btn btn-primary" type="submit">Search</button>
                    </form>
                </div>

                <table style={{marginLeft:"20px", width: "95%"}} className="table table-striped table-bordered table-sm">
                    <thead className="thead-dark">
                        <tr>
                            <th>Order Id</th>
                            <th>Order Date</th>
                            <th>Coupon</th>
                            <th>Payment Mode</th>
                            <th>Bank Name</th>
                            <th>Payment Mode</th>
                            <th>Currency</th>
                            <th>TotalAmount</th>
                            <th>Address</th>
                            <th>Mobile Number</th>
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