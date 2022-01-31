import Head from "next/head";
import Link from "next/link";
import Sidebar from "./components/sidebar";

export default function Home() {
    return (

        <table className="table table-striped table-bordered table-sm">
            <tbody>
                <tr>
                    <td>
                        <form action="/bulkadminsize/" method="POST" encType="multipart/form-data" className="form-horizontal">
                            <div className="form-group">
                                <div className="col-md-8">
                                    <input type="checkbox" id="small" value="Small" name="small"> Small  <label htmlFor="small" />
                                        <input type="checkbox" id="medium" value="Medium" name="medium">Medium <label htmlFor="medium" />
                                            <input type="checkbox" id="large" value="Large" name="large"> Large  <label htmlFor="large" />
                                                <input type="checkbox" id="XL" value="XL" name="XL">    XL     <label htmlFor="large" />
                                                    <input type="checkbox" id="XXL" value="XXL" name="XXL">   XXL    <label htmlFor="large" />
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <button className="btn btn-primary"> <span class="glyphicon glyphicon-upload" style="margin-right:5px;"></span>Approve</button>
                                                </div>
                                            </form>
                                        </td>
                                    </tr>
                                </tbody>
        </table>

                            );
}
