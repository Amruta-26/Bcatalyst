import React from 'react';

export default function HomePageCarouselImage() {
    return (
        <>

            <h1>Add Carousel</h1>
            <form action="/adminhomeimage/" method="POST" encType="multipart/form-data" className="form-horizontal">
                <div className='form-group'>
                    <ul className="messages">
                        <div className="alert alert-error" style={{color: "red"}}></div>
                    </ul>
                </div>
                <div className="form-group">
                    <label htmlFor="name" className="col-md-3 col-sm-3 col-xs-12 control-label">SKU ID: </label>
                    <div className="col-md-8">
                        <input type="text" name="sku" />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="name" className="col-md-3 col-sm-3 col-xs-12 control-label">Name: </label>
                    <div className="col-md-8">
                        <select id="cars" name="name">
                            <option value="tshirt">Tshirt</option>
                            <option value="mobile">MobileCover</option>
                            <option value="pop">Popsocket</option>
                            <option value="mug">Mug</option>
                        </select>
                    </div>
                </div>


                <div className="form-group">
                    <div className="col-md-3 col-sm-3 col-xs-12 col-md-offset-3" style={{ marginBottom: "10px" }}>
                        <button className="btn btn-primary"> <span className="glyphicon glyphicon-upload" style={{ marginRight: "5px" }}></span>Upload </button>
                    </div>
                </div>
            </form>

            <br />
            <br />

            <table id="gallery" className="table table-bordered">
                <thead>
                    <tr>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src="" alt="Product image" className="product-image" height="100px" width="100px" /></td>
                        <td></td>
                        <td><a href="/adminhomeimagedestroy/" className='btn btn-danger'>Delete</a></td>
                    </tr>
                </tbody>
            </table>


        </>
    );
}
