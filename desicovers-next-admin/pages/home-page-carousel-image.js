import Typography from "@mui/material/Typography";
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from '@mui/material/OutlinedInput';
import TextField from '@mui/material/TextField';
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Image from "next/image";

export default function HomePageCarouselImage() {
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
        action="/adminhomeimage/"
        method="POST"
        encType="multipart/form-data"
        className="form-horizontal"
      >
        <div className="form-group">
          <label
            htmlFor="name"
            className="col-md-3 col-sm-3 col-xs-12 control-label"
            name="sku"
            style={{ fontSize: "20px" }}
          >
           SKU ID:
          </label>
          <br/>
          <TextField id="outlined-basic" style={{ padding:"12px 5px"}} label="" variant="outlined" />

        </div>

        <div className="form-group">
        <label
          htmlFor="name"
          className="col-md-3 col-sm-3 col-xs-12 control-label"
          style={{ fontSize: "20px" }}
        >
          Name:{" "}
        </label>
        <div className="col-md-8">
        {/* <select id="cars" name="name">
                            <option value="tshirt">Tshirt</option>
                            <option value="mobile">MobileCover</option>
                            <option value="pop">Popsocket</option>
                            <option value="mug">Mug</option>
                        </select> */}
          <Select
            displayEmpty
            value="tshirt"
            id="cars" name="name"
            input={<OutlinedInput label="" />}
          >
            <MenuItem value={"tshirt"}>Tshirt</MenuItem>
            <MenuItem value={"mobile"}>MobileCover</MenuItem>
            <MenuItem value={"pop"}>Popsocket</MenuItem>
            <MenuItem value={"mug"}>Mug</MenuItem>
        </Select>
        </div>
        </div>

        <div className="form-group">
                    <div className="col-md-3 col-sm-3 col-xs-12 col-md-offset-3" style={{ marginTop: "20px" }}>
                        <Button variant="contained">Upload </Button>
                    </div>
                </div>
      </form>
      <br />

      <table id="gallery" className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th style={{ textAlign: "left", fontSize: "14px" }}>Photo</th>
            <th style={{ textAlign: "left", fontSize: "14px" }}>Name</th>
            <th style={{ textAlign: "left", fontSize: "14px" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
              <td>
              <Image
                src=""
                alt="Product image"
                className="product-image"
                height="100px"
                width="100px"
              />
            </td>

            <td></td>
            <td>
              <a href="/destroyhomeimg/" className="btn btn-danger text-light">
                Delete
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
