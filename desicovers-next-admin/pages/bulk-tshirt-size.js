import Button from '@mui/material/Button';

export default function Home() {
    return (

        <table className="table table-striped table-bordered table-sm">
            <tbody>
                <tr>
                    <td>
                        <form action="/bulkadminsize/" method="POST" encType="multipart/form-data" className="form-horizontal">
                            <div className="form-group">
                                <div className="col-md-8" style={{fontSize: "16px"}}>
                                    <input type="checkbox" id="small" value="Small" name="small" /> Small  <label htmlFor="small" />&nbsp;
                                    <input type="checkbox" id="medium" value="Medium" name="medium" /> Medium <label htmlFor="medium" />&nbsp;
                                    <input type="checkbox" id="large" value="Large" name="large" /> Large  <label htmlFor="large" />&nbsp;
                                    <input type="checkbox" id="XL" value="XL" name="XL" />    XL     <label htmlFor="large" />&nbsp;
                                    <input type="checkbox" id="XXL" value="XXL" name="XXL" />   XXL    <label htmlFor="large" />&nbsp;
                                </div>
                            </div>
<br/>
                            <div className="form-group">
                            <Button variant="contained">Approve</Button>
                                {/* <button className="btn btn-primary"> <span className="glyphicon glyphicon-upload" style={{marginRight:"5px"}}></span>Approve</button> */}
                            </div>
                        </form>
                    </td>
                </tr>
            </tbody>
        </table>

    );
}
