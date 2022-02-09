import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function PaymentRecieve() {
    return (
        <table className="table table-striped table-bordered table-sm" style={{ marginLeft: "10px", width: "98%" }}>
            <thead className="thead-dark">
                <tr>
                    <th style={{ textAlign: "center", fontSize: "14px" }}>Wallet Id</th>
                    <th style={{ textAlign: "center", fontSize: "14px" }}>Customer Name</th>
                    <th style={{ textAlign: "center", fontSize: "14px" }}>Amount</th>
                    <th style={{ textAlign: "center", fontSize: "14px" }}>Add Money</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                        <form
                            action="/adminaddwallet/"
                            method="POST"
                            encType="multipart/form-data"
                            className="form-horizontal"
                        >
                            <div className="form-group">
                                <label className="col-md-3 col-sm-3 col-xs-12 control-label"
                                    style={{ color: "#000", fontSize: "15px", margin: "5px" }}>Money</label
                                >
                                <br /><br />
                                <div className="col-md-8">
                                    <TextField
                                        type="number"
                                        name="addmoney" required
                                        InputProps={{
                                            inputProps: {
                                                max: 100000, min: 10
                                            }
                                        }}
                                        label="Add"
                                        sx={{ px: "5px", py: "5px" }} />
                                    <br /><br />
                                    <input
                                        type="hidden"
                                        name="Id"
                                        value=""
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <Button variant="contained">Add Wallet </Button>
                            </div>
                        </form>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}
