import Typography from '@mui/material/Typography';
import Link from "next/link";
import Button from '@mui/material/Button';

export default function Home() {
    return (
        <>
            <Typography variant="h4" gutterBottom component="div">
                <center>Add Pincode</center></Typography>

            <form action="/pincode/" method="POST" encType="multipart/form-data" className="form-horizontal">


                <div className='form-group'>

                    <ul className="messages">

                        <div className="alert alert-error" style={{ color: "red" }}></div>
                    </ul>

                </div>

                <div className="form-group">
                    <label htmlFor="name" className="col-md-3 col-sm-3 col-xs-12 control-label" style={{ fontSize: "20px" }}>File: </label>
                    <div className="col-md-8">
                        <input style={{ height: "45px", fontSize: "16px" }} type="file" name="csv_file" id="csv_file" required="True" className="form-control" />
                    </div>
                </div>

                <div className="form-group">
                    <div className="col-md-3 col-sm-3 col-xs-12 col-md-offset-3" style={{ marginBottom: "10px" }}>
                        <Button variant="contained">Upload </Button>
                    </div>
                </div>
            </form>
            <br />
            <table id="gallery" className="table table-bordered" style={{ marginLeft: "10px", width: "98%" }}>
                <thead>
                    <tr>
                        <th>Pincode</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>


                    <tr>
                        <td></td>
                        <td><a href="/destroypincode/" className='btn btn-danger'><Button variant="contained">Delete</Button></a></td>
                    </tr>

                </tbody>
            </table>
        </>
    );
}
