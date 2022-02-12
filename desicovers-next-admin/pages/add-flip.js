import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function AddFlip() {
    return (
        <>

            <Typography variant="h4" gutterBottom component="div">
                <center>Add Flip</center>
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
                        style={{ fontSize: "20px" }}
                    >
                        File:
                    </label>
                    <div className="col-md-8" style={{ paddingBottom: "20px" }}>
                        <input
                            style={{ height: "45px", fontSize: "16px" }}
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

                        <Button variant="contained">Upload</Button>

                    </div>
                </div>
            </form>



        </>

    );
}
