import Button from '@mui/material/Button';

export default function PaymentRecieve() {
    return (
        <>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />


            <table className="table table-striped table-bordered table-sm">
                <thead className="thead-dark">
                    <tr>


                        <th style={{ fontSize:"14px",padding:"10px 5px"}}>COUPON CODE </th>
                        <th style={{ fontSize:"14px",padding:"10px 5px"}}>COUPON DESCRIPTION</th>
                        <th style={{ fontSize:"14px",padding:"10px 5px"}}>COUPON DISCOUNT</th>
                        <th style={{ fontSize:"14px",padding:"10px 5px"}}>USER LIMIT</th>
                        <th style={{ fontSize:"14px",padding:"10px 5px"}}>PRICE/PERCENTAGE</th>
                        <th style={{ fontSize:"14px",padding:"10px 5px"}}>START DATE</th>
                        <th style={{ fontSize:"14px",padding:"10px 5px"}}>END DATE</th>
                        <th style={{ fontSize:"14px",padding:"10px 5px"}}>ACTION</th>

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
                        <Button variant="contained" href="/editcoupon/" style={{color:"#fff", fontWeight:"bold"}}>Edit Coupon</Button>
                        <Button variant="contained" href="/deletecoupon/" style={{color:"#fff", fontWeight:"bold"}} color="error"> Delete Coupon</Button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <br />
            <br />
            <center> <Button variant="contained" href="/coupon" style={{color:"#fff", fontWeight:"bold"}} color="success">Add New Coupon</Button></center>

        </>
    );
}