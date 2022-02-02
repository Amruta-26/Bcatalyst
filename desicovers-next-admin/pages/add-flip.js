export default function AddFlip() {
    return (
        <>
            <h1><center>Add Product</center></h1>

            <form action="" method="POST" encType="multipart/form-data" className="form-horizontal">


                <div className='form-group'>
                    <ul className="messages">
                        <div className="alert alert-error" style={{color: "red"}}></div>
                    </ul>
                </div>
                <div className="form-group">
                    <label htmlFor="name" className="col-md-3 col-sm-3 col-xs-12 control-label">File: </label>
                    <div className="col-md-8">
                        <input type="file" name="csv_file" id="csv_file" required="True" className="form-control" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-md-3 col-sm-3 col-xs-12 col-md-offset-3" style={{ marginBottom: "10px" }}>
                        <button className="btn btn-primary"> <span className="glyphicon glyphicon-upload" style={{ marginRight: "5px" }}></span>Upload </button>
                    </div>
                </div>
            </form >
        </>

    );
}
