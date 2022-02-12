import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from '@mui/material/OutlinedInput';
import TextField from '@mui/material/TextField';
import Select from "@mui/material/Select";

export default function UpdateBulkPrice() {
    return (
        <>

<Typography variant="h4" gutterBottom component="div">
        <center>Update Model Names</center></Typography>


      <form action="/bulkupdate/" method="POST" encType="multipart/form-data" className="form-horizontal">
        <div className="form-group">
          <label className="col-md-3 col-sm-3 col-xs-12 control-label" style={{ fontSize: "18px" }}>Company Name </label>
          <div className="col-md-8">

            {/* <option value="" className="col-md-12"></option> */}

            <Select
              value="1"
              name="company_id" id="empid"
              input={<OutlinedInput label="" />}
            >
              <MenuItem value={1}>Company_1</MenuItem>
              <MenuItem value={2}>Company_2</MenuItem>
              <MenuItem value={3}>Company_3</MenuItem>
              <MenuItem value={4}>Company_4</MenuItem>
            </Select>
          </div>
        </div>
        <br />
        <div className="form-group">
          <label className="col-md-3 col-sm-3 col-xs-12 control-label" style={{ fontSize: "18px" }}>Price</label>
          <div className="col-md-4 ">
          <TextField
                      type="number"
                      name="addmoney"
                      required
                      InputProps={{
                        inputProps: {
                          max: 100000,
                          min: 10,
                        },
                      }}
                      label="Add"
                      sx={{ px: "5px", py: "5px", mt: "10px"}}
                    />
          </div>
        </div>
    <br/>
        <div className="form-group">
                    <div className="col-md-3 col-sm-3 col-xs-12 col-md-offset-3" style={{ marginBottom: "10px" }}>
                        <Button variant="contained">Upload </Button>
                    </div>
                </div>
      </form>


        </>
    );
}
