export default function AdminHeading() {
  return(
  <>
    <h1>Add Title</h1>
    <form
      action=""
      method="POST"
      encType="multipart/form-data"
      className="form-horizontal"
    >
      <div className="form-group">
        <label className="col-md-3 col-sm-3 col-xs-12 control-label">
          Company Name
        </label>
        <div className="col-md-8"></div>
      </div>

      <div className="form-group">
        <label className="col-md-3 col-sm-3 col-xs-12 control-label">
          Model Name
        </label>
        <div className="col-md-8"></div>
      </div>

      <div className="form-group">
        <div
          className="col-md-3 col-sm-3 col-xs-12 col-md-offset-3"
          style={{ marginBottom: "10px" }}
        >
          <button className="btn btn-primary">
            
            <span
              className="glyphicon glyphicon-upload"
              style={{ marginRight: "5px" }}
            ></span>
            Upload
          </button>
        </div>
      </div>
    </form>

    <br />
    <br />

    <table id="gallery" className="table table-bordered">
      <thead>
        <tr>
          <th>Id</th>
          <th>Company Name</th>
          <th>Model Name</th>
          <th>Action</th>
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
