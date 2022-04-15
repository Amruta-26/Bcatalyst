import Typography from "@mui/material/Typography";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Input } from "@mui/material";
import { useState, forwardRef } from "react";
import MaterialTable from "material-table";
import XLSX from "xlsx";
import axios from "axios";
import { useContext } from "react";
import uuid from "react-uuid";
import { ToastContainer, toast } from "react-toastify";
import AddBox from "@mui/icons-material/AddBox";
import ArrowDownward from "@mui/icons-material/ArrowDownward";
import Check from "@mui/icons-material/Check";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";
import Clear from "@mui/icons-material/Clear";
import DeleteOutline from "@mui/icons-material/DeleteOutline";
import Edit from "@mui/icons-material/Edit";
import FilterList from "@mui/icons-material/FilterList";
import FirstPage from "@mui/icons-material/FirstPage";
import LastPage from "@mui/icons-material/LastPage";
import Remove from "@mui/icons-material/Remove";
import SaveAlt from "@mui/icons-material/SaveAlt";
import Search from "@mui/icons-material/Search";
import ViewColumn from "@mui/icons-material/ViewColumn";

export default function Home() {
    return (
        <>
            <ToastContainer />

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
                        style={{ fontSize: "20px" }}
                    >
                        File:
                    </label>
                    <div className="col-md-8" style={{ paddingBottom: "20px" }}>
                        {/* <input
                            style={{ height: "45px", fontSize: "16px" }}
                            type="file"
                            name="csv_file"
                            id="csv_file"
                            required="True"
                            className="form-control"
                        /> */}
                        <UploadExcel />
                    </div>
                </div>
                <div className="form-group">
                    <div
                        className="col-md-3 col-sm-3 col-xs-12 col-md-offset-3"
                        style={{ marginBottom: "10px" }}
                    ></div>
                </div>
            </form>

            <Button
                variant="outlined"
                href="/export_product_csv"
                sx={{ my: 2, mr: 2, px: 2, py: 1 }}
            >
                <i className="fas fa-download fa-sm text-white-50"></i>&nbsp;
                Product All Data
            </Button>

            <Button
                variant="outlined"
                href="/export_product_csv_day"
                sx={{ my: 2, mr: 2, px: 2, py: 1 }}
            >
                <i className="fas fa-download fa-sm text-white-50"></i>&nbsp;
                Product One Day Data
            </Button>

            <Button
                variant="outlined"
                href="/export_product_csv_week"
                sx={{ my: 2, mr: 2, px: 2, py: 1 }}
            >
                <i className="fas fa-download fa-sm text-white-50"></i>&nbsp;
                Product Week Data
            </Button>

            <Button
                variant="outlined"
                href="/export_product_csv_month"
                sx={{ my: 2, mr: 2, px: 2, py: 1 }}
            >
                <i className="fas fa-download fa-sm text-white-50"></i>&nbsp;
                Product Month Data
            </Button>
        </>
    );
}

const EXTENSIONS = ["xlsx", "xls", "csv"];

function UploadExcel() {
    const { merchantId } = "223839";
    const [colDefs, setColDefs] = useState();
    const [data, setData] = useState();
    const [fileName, setFileName] = useState("");
    const [uploaded, setUploaded] = useState(false);
    const getExtension = (file) => {
        setFileName(file.name);
        const parts = file.name.split(".");
        const extension = parts[parts.length - 1];
        return EXTENSIONS.includes(extension); // return boolean
    };

    const uploadFile = async () => {
        var delayInMilliseconds = 1000; //1 second
        const id = toast.loading("Please wait... Uploading");
        // await data.map(async (item, index) => {
        //add a delay of 500millisecond
        for (let index = 0; index < data.length; index++) {
            // await new Promise((resolve) => {
            setTimeout(() => {
                console.log("hello");
            }, delayInMilliseconds);
            // });
            await axios
                .post("https://desicover.herokuapp.com/bulk-insert-products", {
                    productData: data[index],
                })
                .then((res) => {
                    console.log(res.data);
                    // toast.warn(id, {
                    //     render: "Total Uploaded" + index,
                    //     isLoading: false,
                    //     closeOnClick: true,
                    //     pauseOnHover: true,
                    //     draggable: true,
                    // });
                });
        }
        toast.update(id, {
            render: "Uploaded items",
            type: "success",
            isLoading: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    };
    const convertToJson = (headers, data) => {
        const rows = [];
        data.forEach((row) => {
            let rowData = {};
            row.forEach((element, index) => {
                if (headers[index] !== "tableData") {
                    rowData[headers[index]] = element;
                } else {
                    alert("tabledata spotted");
                }
            });
            rows.push(rowData);
        });
        return rows;
    };

    const importExcel = (e) => {
        const id = toast.loading("Processing file");

        const file = e.target.files[0];

        const reader = new FileReader();
        reader.onload = (event) => {
            //parse data

            const bstr = event.target.result;
            const workBook = XLSX.read(bstr, { type: "binary" });
            //get first sheet
            const workSheetName = workBook.SheetNames[0];
            const workSheet = workBook.Sheets[workSheetName];
            //convert to array
            const fileData = XLSX.utils.sheet_to_json(workSheet, { header: 1 });
            // console.log(fileData)
            const headers = [
                "name",
                "category",
                "model",
                "image",
                "number1",
                "number2",
                "modelName",
                "description",
                "price",
                "number3",
                "model",
            ];
            const heads = headers.map((head) => ({ title: head, field: head }));
            setColDefs(heads);
            //removing header
            fileData.splice(0, 1);

            setData(convertToJson(headers, fileData));
            toast.update(id, {
                render: "Done processing",
                type: "success",
                isLoading: false,
                position: "top-center",
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        };

        if (file) {
            if (getExtension(file)) {
                reader.readAsBinaryString(file);
            } else {
                console.log("Invalid file input, Select Excel, CSV file");
            }
        } else {
            setData([]);
            setColDefs([]);
        }
    };
    const tableIcons = {
        // eslint-disable-next-line react/display-name
        Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
        // eslint-disable-next-line react/display-name
        Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
        // eslint-disable-next-line react/display-name
        Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        // eslint-disable-next-line react/display-name
        Delete: forwardRef((props, ref) => (
            <DeleteOutline {...props} ref={ref} />
        )),
        // eslint-disable-next-line react/display-name
        DetailPanel: forwardRef((props, ref) => (
            <ChevronRight {...props} ref={ref} />
        )),
        // eslint-disable-next-line react/display-name
        Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
        // eslint-disable-next-line react/display-name
        Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
        // eslint-disable-next-line react/display-name
        Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
        // eslint-disable-next-line react/display-name
        FirstPage: forwardRef((props, ref) => (
            <FirstPage {...props} ref={ref} />
        )),
        // eslint-disable-next-line react/display-name
        LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
        // eslint-disable-next-line react/display-name
        NextPage: forwardRef((props, ref) => (
            <ChevronRight {...props} ref={ref} />
        )),
        // eslint-disable-next-line react/display-name
        PreviousPage: forwardRef((props, ref) => (
            <ChevronLeft {...props} ref={ref} />
        )),
        // eslint-disable-next-line react/display-name
        ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        // eslint-disable-next-line react/display-name
        Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
        // eslint-disable-next-line react/display-name
        SortArrow: forwardRef((props, ref) => (
            <ArrowDownward {...props} ref={ref} />
        )),
        // eslint-disable-next-line react/display-name
        ThirdStateCheck: forwardRef((props, ref) => (
            <Remove {...props} ref={ref} />
        )),
        // eslint-disable-next-line react/display-name
        ViewColumn: forwardRef((props, ref) => (
            <ViewColumn {...props} ref={ref} />
        )),
    };

    return (
        <div className="upload-excel">
            <h5>Bulk Upload Products</h5>
            <br />
            <div className="excel-input-container">
                <input
                    type="file"
                    className="excel-input d-flex justify-items-center align-items-center"
                    onChange={importExcel}
                />
            </div>
            {/* FIXME: TABLE VIRTUALIZATION */}
            {data != null ? (
                <>
                    <MaterialTable
                        icons={tableIcons}
                        title="Cover Items"
                        data={data}
                        columns={colDefs}
                    />
                    <h1>File to upload: {fileName}</h1>
                    <br />
                    <br />

                    <Button
                        onClick={(e) => {
                            e.preventDefault();
                            uploadFile();
                        }}
                        color="primary"
                        variant="contained"
                        disabled={uploaded}
                    >
                        Upload File{" "}
                    </Button>
                    <br />
                </>
            ) : (
                ""
            )}
            <div className="p-4"></div>
        </div>
    );
}
