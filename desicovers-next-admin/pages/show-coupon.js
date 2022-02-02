export default function PaymentRecieve() {
    return (
        <>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />


            <table className="table table-striped table-bordered table-sm">
                <thead className="thead-dark">
                    <tr>


                        <th>COUPON CODE </th>
                        <th>COUPON DESCRIPTION</th>
                        <th>COUPON DISCOUNT</th>
                        <th>USER LIMIT</th>
                        <th>PRICE/PERCENTAGE</th>
                        <th>START DATE</th>
                        <th>END DATE</th>
                        <th>ACTION</th>

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
                        <td>
                            <a href="/editcoupon/"><span className='btn btn-info' >Edit Coupon</span></a>
                            <a href="/deletecoupon/"><span className='btn btn-danger' >Delete Coupon</span></a>
                        </td>
                    </tr>
                </tbody>
            </table>
            <br />
            <br />
            <center><a href="/coupon" className="btn btn-primary">Add New Coupon</a></center>

        </>
    );
}