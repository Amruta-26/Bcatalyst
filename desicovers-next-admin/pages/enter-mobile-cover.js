import Typography from "@mui/material/Typography";
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from '@mui/material/OutlinedInput';
import TextField from '@mui/material/TextField';
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

export default function EnterMobileCover() {
  return (
    <>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />

      <Typography variant="h4" gutterBottom component="div">
        <center>Add Cover Name</center></Typography>

      <form method='POST' id="personForm" data-cities-url="" className="form-horizontal">
        <div className="form-group">
          <label className="col-md-3 col-sm-3 col-xs-12 control-label" style={{ fontSize: "18px" }}>Company Name </label>
          <div className="col-md-8">
            form
          </div>
        </div>

        <div className="form-group">
          <label className="col-md-3 col-sm-3 col-xs-12 control-label" style={{ fontSize: "18px" }}  >Model Name </label>
          <div className="col-md-8">
            xyz
          </div>
        </div>



        <div className="form-group">
          <div className="col-md-3 col-sm-3 col-xs-12 col-md-offset-3" style={{ marginBottom: "10px" }}>
            <Button variant="contained">Upload </Button>
          </div>
        </div>
      </form>

      <br />
      <br />

      <table id="gallery" className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th style={{ textAlign: "left", fontSize: "14px" }}>Company Name</th>
            <th style={{ textAlign: "left", fontSize: "14px" }}>Model Name</th>
            <th style={{ textAlign: "left", fontSize: "14px" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr id="users">
            <td className="Company userData"></td>
            <td className="Model userData"></td>
            <td><button className="btn btn-success" onClick="editUser()" data-toggle="modal" data-target="#myModal">Edit</button>
              <a href="/mobiledestroy/" className='btn btn-danger ml-2 text-light'>Delete</a></td>
          </tr>
        </tbody>
      </table >


      <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="myModalLabel" >Update Cover Name</h4>
            </div>
            <form method="POST" action="/updatemobile/">
              <div className="modal-body">
                <input className="form-control" id="form-id" type="hidden" name="id" />
                <label htmlFor="name">Company Name</label>
                <input className="form-control" id="form-Review" type="text" name="company" />
                <label htmlFor="address">Model Name</label>
                <input className="form-control" id="form-rating" type="text" name="name" />

              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary" >Save changes</button>
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </>
  );
}
