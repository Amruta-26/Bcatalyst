import Button from '@mui/material/Button';
import Image from 'next/image';

export default function CustomerAccount() {
    return (
        <>
            <Button
                variant="outlined"
                href="/export_users_csv"
                sx={{ my: 2, mr: 2, px: 2, py: 1 }}
            >
                <i className="fas fa-download fa-sm "></i>&nbsp; Customer All
                Data
            </Button>

            <Button
                variant="outlined"
                href="/export_users_csv_day"
                sx={{ my: 2, mr: 2, px: 2, py: 1 }}
            >
                <i className="fas fa-download fa-sm "></i>&nbsp; Customer One
                Day Data
            </Button>

            <Button
                variant="outlined"
                href="/export_users_csv_week"
                sx={{ my: 2, mr: 2, px: 2, py: 1 }}
            >
                <i className="fas fa-download fa-sm"></i>&nbsp; Customer Week
                Data
            </Button>

            <Button
                variant="outlined"
                href="/export_users_csv_month"
                sx={{ my: 2, mr: 2, px: 2, py: 1 }}
            >
                <i className="fas fa-download fa-sm"></i>&nbsp; Customer Month
                Data
            </Button>

            <form method="get">
                <Button variant="contained">Search</Button>
            </form>

            <br />
            <table
                style={{ marginLeft: "10px", width: "98%" }}
                className="table table-striped table-bordered table-sm"
            >
                <thead className="thead-dark">
                    <tr>
                        <th style={{ textAlign: "center", fontSize: "14px" }}>
                            User Picture
                        </th>
                        <th style={{ textAlign: "center", fontSize: "14px" }}>
                            Name
                        </th>
                        <th style={{ textAlign: "center", fontSize: "14px" }}>
                            Mobile No
                        </th>
                        <th style={{ textAlign: "center", fontSize: "14px" }}>
                            Email
                        </th>
                        <th style={{ textAlign: "center", fontSize: "14px" }}>
                            City
                        </th>
                        <th style={{ textAlign: "center", fontSize: "14px" }}>
                            Joining Date
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>
                            <Image
                                src="/productImage1"
                                height="100"
                                width="100"
                                alt="cool"
                            />
                        </td>
                        <td>
                            <Image
                                src="/productImage2"
                                alt="Snow"
                                height="100"
                                width="100"
                            />
                        </td>
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