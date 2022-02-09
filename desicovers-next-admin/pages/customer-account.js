import Button from '@mui/material/Button';

export default function CustomerAccount() {
    return (

        <div>
            <Button variant="outlined" href="/export_users_csv" sx={{my:2, mr:2, px:2, py:1}}>
                <i className="fas fa-download fa-sm text-white-50"></i>&nbsp; Customer All Data</Button>

            <Button variant="outlined" href="/export_users_csv_day" sx={{my:2, mr:2, px:2, py:1}}>
                <i className="fas fa-download fa-sm text-white-50"></i>&nbsp; Customer One Day Data</Button>

            <Button variant="outlined" href="/export_users_csv_week" sx={{my:2, mr:2, px:2, py:1}}>
                <i className="fas fa-download fa-sm text-white-50"></i>&nbsp; Customer Week Data</Button>
   
            <Button variant="outlined" href="/export_users_csv_month" sx={{my:2, mr:2, px:2, py:1}}>
                <i className="fas fa-download fa-sm text-white-50"></i>&nbsp; Customer Month Data</Button>

            <div className="row">
                <div className="col">
                    <div className="card card-body">
                        <form method="get">
                        <Button variant="contained">Search</Button>
                        </form>
                    </div>
                </div>

            <br/>
                <table style={{ marginLeft: "10px", width: "98%" }} className="table table-striped table-bordered table-sm">
                    <thead className="thead-dark">
                        <tr>
                            <th style={{ textAlign:"center", fontSize:"14px"}}>User Picture</th>
                            <th style={{ textAlign:"center", fontSize:"14px"}}>Name</th>
                            <th style={{ textAlign:"center", fontSize:"14px"}}>Mobile No</th>
                            <th style={{ textAlign:"center", fontSize:"14px"}}>Email</th>
                            <th style={{ textAlign:"center", fontSize:"14px"}}>City</th>
                            <th style={{ textAlign:"center", fontSize:"14px"}}>Joining Date</th>
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