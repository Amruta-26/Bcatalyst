import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Home() {
    return (
        <>
             <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />

            <Typography variant="h4" gutterBottom component="div">
                <center>Add Pincode</center></Typography>

            <form action="/pincode/" method="POST" encType="multipart/form-data" className="form-horizontal">

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

            <table id="gallery" className="table table-striped table-bordered table-sm" style={{ marginLeft: "10px", width: "98%"}}>
            <thead className="thead-dark">
                    <tr >
                        <th style={{textAlign:"left", fontSize:"14px"}}>Pincode</th>
                        <th style={{textAlign:"left", fontSize:"14px"}}>Action</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td></td>
                        <td><Button variant="contained" className="text-light font-weight-bold" color="error" href="/destroypincode/">Delete</Button></td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}
