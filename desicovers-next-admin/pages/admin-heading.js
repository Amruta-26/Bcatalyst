import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function AdminHeading() {
  return (
      <>
          <Typography variant="h4" gutterBottom component="div">
              <center>Add Title</center>
          </Typography>

          <form
              action=""
              method="POST"
              encType="multipart/form-data"
              className="form-horizontal"
          >
              <div className="form-group">
                  <label
                      className="col-md-3 col-sm-3 col-xs-12 control-label"
                      style={{ fontSize: "20px" }}
                  >
                      Company Name
                  </label>
                  <div className="col-md-8"></div>
              </div>

              <div className="form-group">
                  <label
                      className="col-md-3 col-sm-3 col-xs-12 control-label"
                      style={{ fontSize: "20px" }}
                  >
                      Model Name
                  </label>
                  <div className="col-md-8"></div>
              </div>

              <div className="form-group">
                  <div
                      className="col-md-3 col-sm-3 col-xs-12 col-md-offset-3"
                      style={{ marginBottom: "10px" }}
                  >
                      <Button variant="contained">Upload </Button>
                  </div>
              </div>
          </form>

          <br />
          <br />

          <table id="gallery" className="table table-bordered">
              <thead className="thead-dark">
                  <tr>
                      <th style={{ textAlign: "left", fontSize: "14px" }}>
                          Id
                      </th>
                      <th style={{ textAlign: "left", fontSize: "14px" }}>
                          Company Name
                      </th>
                      <th style={{ textAlign: "left", fontSize: "14px" }}>
                          Model Name
                      </th>
                      <th style={{ textAlign: "left", fontSize: "14px" }}>
                          Action
                      </th>
                  </tr>
              </thead>
              <tbody>
                  <tr id="users">
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                  </tr>
              </tbody>
          </table>
      </>
  );
}
