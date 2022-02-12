import Button from '@mui/material/Button';

export default function CustomerAccount() {
    return (
        <>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />

           
                <Button variant="outlined" href="/export_users_csv" sx={{ my: 2, mr: 2, px: 2, py: 1 }}>
                    <i className="fas fa-download fa-sm "></i>&nbsp; Customer All Data</Button>

                <Button variant="outlined" href="/export_users_csv_day" sx={{ my: 2, mr: 2, px: 2, py: 1 }}>
                    <i className="fas fa-download fa-sm "></i>&nbsp; Customer One Day Data</Button>

                <Button variant="outlined" href="/export_users_csv_week" sx={{ my: 2, mr: 2, px: 2, py: 1 }}>
                    <i className="fas fa-download fa-sm"></i>&nbsp; Customer Week Data</Button>

                <Button variant="outlined" href="/export_users_csv_month" sx={{ my: 2, mr: 2, px: 2, py: 1 }}>
                    <i className="fas fa-download fa-sm"></i>&nbsp; Customer Month Data</Button>


                <form method="get">
                    <Button variant="contained">Search</Button>
                </form>

                <br />
                <table style={{ marginLeft: "10px", width: "98%" }} className="table table-striped table-bordered table-sm">
                    <thead className="thead-dark">
                        <tr>
                            <th style={{ textAlign: "center", fontSize: "14px" }}>User Picture</th>
                            <th style={{ textAlign: "center", fontSize: "14px" }}>Name</th>
                            <th style={{ textAlign: "center", fontSize: "14px" }}>Mobile No</th>
                            <th style={{ textAlign: "center", fontSize: "14px" }}>Email</th>
                            <th style={{ textAlign: "center", fontSize: "14px" }}>City</th>
                            <th style={{ textAlign: "center", fontSize: "14px" }}>Joining Date</th>
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
                        </tr>
                    </tbody>
                </table>

        </>

    );
}