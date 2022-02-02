export default function carousel() {
    return (
        <>
            <h1>Add Carousel</h1>
            <form action="" method="POST" encType="multipart/form-data" className="form-horizontal">
                <div className="form-group">
                    <label htmlFor="name" className="col-md-3 col-sm-3 col-xs-12 control-label">File: </label>
                    <div className="col-md-8">
                        <input type="file" name="images" />
                        Enter Model Name:
                        <select name="model_name">

                            <option value=""></option>

                        </select>
                    </div>
                </div>


                <div className="form-group">
                    <div className="col-md-3 col-sm-3 col-xs-12 col-md-offset-3" style={{ marginBottom: "10px" }}>
                        <button className="btn btn-primary"> <span className="glyphicon glyphicon-upload" style={{marginRight:"5px"}}></span>Upload </button>
                    </div>
                </div>
            </form>

            <br />
            <br />

            <table id="gallery" className="table table-bordered">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Photo</th>
                        <th>Model Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>

                        <td></td>

                        <td><img src="" alt="Product image" className="product-image" height="100px" width="100px" /></td>
                        <td></td>
                        <td><a href="/destroycarousel/" className='btn btn-danger'>Delete</a></td>
                    </tr>
                </tbody>
            </table>

        </>
    );
}
