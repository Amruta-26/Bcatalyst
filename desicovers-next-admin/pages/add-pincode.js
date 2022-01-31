import Head from "next/head";
import Link from "next/link";
import Sidebar from "./components/sidebar";

export default function Home() {
    return (
        <>
            <h1><center>Add Pincode</center></h1>

            <form action="/pincode/" method="POST" encType="multipart/form-data" className="form-horizontal">


                <div className='form-group'>

                    <ul className="messages">

                        <div className="alert alert-error" style={{color: "red"}}></div>
                    </ul>

                </div>

                <div className="form-group">
                    <label htmlFor="name" className="col-md-3 col-sm-3 col-xs-12 control-label">File: </label>
                    <div className="col-md-8">
                        <input style={{height: "45px"}} type="file" name="csv_file" id="csv_file" required="True" className="form-control" />
                    </div>
                </div>

                <div className="form-group">
                    <div className="col-md-3 col-sm-3 col-xs-12 col-md-offset-3" style={{marginBottom:"10px"}}>
                        <button className="btn btn-primary"> <span className="glyphicon glyphicon-upload" style={{marginRight: "5px"}}></span>Upload </button>
                    </div>
                </div>
            </form>

            <table id="gallery" className="table table-bordered" style={{marginLeft:"10px", width: "98%"}}>
                <thead>
                    <tr>
                        <th>Pincode</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>


                    <tr>
                        <td></td>
                        <td><a href="/destroypincode/" className='btn btn-danger'>Delete</a></td>
                    </tr>

                </tbody>
            </table>
        </>
    );
}
