import Typography from '@mui/material/Typography';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@mui/material/Button';

export default function Home() {
    return (
        <>
            <Typography variant="h4" gutterBottom component="div">
                <center>Add Products</center>
            </Typography>

            <form
                method="POST"
                encType="multipart/form-data"
                className="form-horizontal"
            >
                <div className="form-group">
                    <ul className="messages">
                        <div
                            className="alert alert-error"
                            style={{ color: "red" }}
                        ></div>
                    </ul>
                </div>
                <div className="form-group">
                    <label
                        htmlFor="name"
                        className="col-md-3 col-sm-3 col-xs-12 control-label"
                        style={{fontSize: "20px" }}
                    >
                        File:
                    </label>
                    <div className="col-md-8" style={{ paddingBottom: "20px" }}>
                        <input
                            style={{ height: "45px",fontSize: "16px" }}
                            type="file"
                            name="csv_file"
                            id="csv_file"
                            required="True"
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div
                        className="col-md-3 col-sm-3 col-xs-12 col-md-offset-3"
                        style={{ marginBottom: "10px" }}
                    >
                        {/* <button className="btn btn-primary">
                            <span
                                className="glyphicon glyphicon-upload"
                                style={{ marginRight: "5px" }}
                            ></span> */}
                            <Button variant="contained">Upload</Button>
                       {/* </ button> */}
                    </div>
                </div>
            </form>
{/* 
            <a
                style={{ marginLeft: "12px" }}
                href="/export_product_csv"
                className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
            > */}
                <Button variant="outlined" href="/export_product_csv" sx={{my:2, mr:2, px:2, py:1}}>
                <i className="fas fa-download fa-sm text-white-50"></i>&nbsp; Product All Data</Button>
            {/* </a> */}

            {/* <a
                href="/export_product_csv_day"
                className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
            > */}
            <Button variant="outlined" href="/export_product_csv_day" sx={{my:2, mr:2, px:2, py:1}}>
                <i className="fas fa-download fa-sm text-white-50"></i>&nbsp; Product
                One Day Data</Button>
            {/* </a> */}

            {/* <a
                href="/export_product_csv_week"
                className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
            > */}<Button variant="outlined" href="/export_product_csv_week" sx={{my:2, mr:2, px:2, py:1}}>
                <i className="fas fa-download fa-sm text-white-50"></i>&nbsp; Product Week
                Data</Button>
            {/* </a> */}

            {/* <a
                href="/export_product_csv_month"
                className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
            > */}
            <Button variant="outlined" href="/export_product_csv_month" sx={{my:2, mr:2, px:2, py:1}}>
                <i className="fas fa-download fa-sm text-white-50"></i>&nbsp; Product
                Month Data</Button>
            {/* </a> */}
        </>
    );
}
