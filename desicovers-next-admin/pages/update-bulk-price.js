export default function UpdateBulkPrice() {
    return (
        <>

            <h1>Update Model Names<p></p></h1>
            <form action="/bulkupdate/" method="POST" encType="multipart/form-data" className="form-horizontal">
                <div className="form-group">
                    <label className="col-md-3 col-sm-3 col-xs-12 control-label">Company Name </label>
                    <div className="col-md-8">
                        <select name="company_id" id="empid">

                            <option value="" className="col-md-12"></option>

                        </select>
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-md-3 col-sm-3 col-xs-12 control-label">Price</label>
                    <div className="col-md-4">
                        <input type="text" className="form-control" name='price' required />
                    </div>
                </div>



                <div className="form-group">
                    <div className="col-md-3 col-sm-3 col-xs-12 col-md-offset-3" style={{ marginBottom: "10px" }}>
                        <button className="btn btn-primary"> < span className="glyphicon glyphicon-upload" style={{ marginRight: "5px" }}></span>Upload </button>
                    </div>
                </div>
            </form >

        </>
    );
}
