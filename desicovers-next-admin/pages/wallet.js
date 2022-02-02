export default function PaymentRecieve() {
    return (
        <table className="table table-striped table-bordered table-sm">
            <thead className="thead-dark">
                <tr>
                    <th>Wallet Id</th>
                    <th>Customer Name</th>
                    <th>Amount</th>
                    <th>Add Money</th>
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
                                >Money</label
                                >
                                <div className="col-md-8">
                                    <input type="number" name="addmoney" required />
                                    <input
                                        type="hidden"
                                        name="Id"
                                        value=""
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <button className="btn btn-primary">
                                    <span
                                        className="glyphicon glyphicon-upload"
                                        style={{ marginRight: "5px" }}
                                    ></span
                                    >Add Wallet
                                </button>
                            </div>
                        </form>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}
