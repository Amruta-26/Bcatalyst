export default function CustomerAccount() {
    return (

        <div>

            <a style={{ marginLeft: "20px" }} href="/export_users_csv" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i className="fas fa-download fa-sm text-white-50"></i>Customer All Data</a>
            <a href="/export_users_csv_day" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i className="fas fa-download fa-sm text-white-50"></i>Customer Oneday Data</a>
            <a href="/export_users_csv_week" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i className="fas fa-download fa-sm text-white-50"></i>Customer Week Data</a>
            <a href="/export_users_csv_month" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i className="fas fa-download fa-sm text-white-50"></i>Customer Month Data</a>

            <div className="row">
                <div className="col">
                    <div className="card card-body">
                        <form method="get">
                            <button className="btn btn-primary" type="submit">Search</button>
                        </form>
                    </div>
                </div>

                <table style={{ marginLeft: "20px", width: "98%" }} className="table table-striped table-bordered table-sm">
                    <thead className="thead-dark">
                        <tr>
                            <th>User Picture</th>
                            <th>Name</th>
                            <th>Mobile No</th>
                            <th>Email</th>
                            <th>City</th>
                            <th>Joining Date</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td><img src="" height="100" width="100" /></td>
                            <td><img src="" alt="Snow" height="100" width="100" /></td>
                            <td> &nbsp;&nbsp;</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    );
}