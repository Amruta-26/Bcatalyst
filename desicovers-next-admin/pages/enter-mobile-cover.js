export default function EnterMobileCover() {
    return (
      <>
 
        <h1 style={{textAlign: "center"}}>Add Cover Name </h1>
<form method='POST' id="personForm" data-cities-url="" className="form-horizontal">   
  <div className="form-group">
      <label className="col-md-3 col-sm-3 col-xs-12 control-label">Company Name </label>
      <div className="col-md-8">
          form
      </div>                    
  </div>

    <div className="form-group">
      <label className="col-md-3 col-sm-3 col-xs-12 control-label">Model Name </label>
      <div className="col-md-8">
         xyz
      </div>                    
  </div>


  <div className="form-group">                    
      <div className="col-md-3 col-sm-3 col-xs-12 col-md-offset-3" style={{marginBottom:"10px"}}>
           <button className="btn btn-primary"> <span className="glyphicon glyphicon-upload" style={{marginRight:"5px"}}></span>Upload </button>
      </div> 
  </div>
</form>

<br/>
<br/>

  <table id="gallery" className="table table-bordered">
  <thead>
    <tr>
      <th>Company Name</th>
      <th>Model Name</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
      <tr id="users">
        <td className="Company userData"></td>
        <td  className="Model userData"></td>
        <td><button className="btn btn-success" style={{backgroundColor:"#87cefa", borderColor:"#87cefa"}} onClick="editUser()" data-toggle="modal" data-target="#myModal">Edit</button>
        <a href="/mobiledestroy/" className='btn btn-danger'>Delete</a></td>
      </tr>
  </tbody>
</table >


        <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
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
