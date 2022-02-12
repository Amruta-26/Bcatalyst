import Typography from "@mui/material/Typography";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

export default function carousel() {
    return (
        <>
            <link
                rel="stylesheet"
                href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                crossOrigin="anonymous"
            />

            <Typography variant="h4" gutterBottom component="div">
                <center>Add Carousel</center>
            </Typography>

            <form
                action=""
                method="POST"
                encType="multipart/form-data"
                className="form-horizontal"
            >
                <div className="form-group">
                    <label
                        htmlFor="name"
                        className="col-md-3 col-sm-3 col-xs-12 control-label"
                        style={{ fontSize: "20px" }}
                    >
                        File:
                    </label>

                    <input
                        style={{ height: "45px", fontSize: "16px" }}
                        type="file"
                        name="csv_file"
                        id="csv_file"
                        required="True"
                        className="form-control"
                    />
                    <br />

                    <InputLabel id="model_name" style={{ fontSize: "18px"}} >Enter Model Name :</InputLabel>
                    <Select
                        labelId="model_name"
                        id="model_name"
                        value="1"
                        name="model_name"
                        input={<OutlinedInput label="" />}

                    >
                        <MenuItem value="1">Model_1</MenuItem>
                        <MenuItem value="2">Model_2</MenuItem>
                        <MenuItem value="3">Model_3</MenuItem>
                    </Select>
                </div>
        
                <br/>
                <div className="form-group">
                    <div className="col-md-3 col-sm-3 col-xs-12 col-md-offset-3" style={{ marginBottom: "10px" }}>
                        <Button variant="contained">Upload </Button>
                    </div>
                </div>
            </form>

            <br />
     

            <table id="gallery" className="table table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th style={{ textAlign: "center", fontSize: "14px" }}>Id</th>
                        <th style={{ textAlign: "center", fontSize: "14px" }}>Photo</th>
                        <th style={{ textAlign: "center", fontSize: "14px" }}>Model Name</th>
                        <th style={{ textAlign: "center", fontSize: "14px" }}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>

                        <td>
                            <img
                                src=""
                                alt="Product image"
                                className="product-image"
                                height="100px"
                                width="100px"
                            />
                        </td>
                        <td></td>
                        <td>
                            <a href="/destroycarousel/" className="btn btn-danger text-light">
                                Delete
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}
