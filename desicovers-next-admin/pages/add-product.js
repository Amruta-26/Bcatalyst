// import Head from "next/head";
import Sidebar from "./components/sidebar";

export default function Home() {
    return (
        <>
            <h1>
                <center>Add Products</center>
            </h1>

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
                    >
                        File:
                    </label>
                    <div className="col-md-8" style={{ paddingBottom: "20px" }}>
                        <input
                            style={{ height: "45px" }}
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
                        <button className="btn btn-primary">
                            <span
                                className="glyphicon glyphicon-upload"
                                style={{ marginRight: "5px" }}
                            ></span>
                            Upload
                        </button>
                    </div>
                </div>
            </form>

            <a
                style={{ marginLeft: "12px" }}
                href="/export_product_csv"
                className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
            >
                <i className="fas fa-download fa-sm text-white-50"></i> Product All
                Data
            </a>

            <a
                href="/export_product_csv_day"
                className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
            >
                <i className="fas fa-download fa-sm text-white-50"></i> Product
                Oneday Data
            </a>

            <a
                href="/export_product_csv_week"
                className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
            >
                <i className="fas fa-download fa-sm text-white-50"></i> Product Week
                Data
            </a>

            <a
                href="/export_product_csv_month"
                className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
            >
                <i className="fas fa-download fa-sm text-white-50"></i> Product
                Month Data
            </a>
        </>
    );
}
