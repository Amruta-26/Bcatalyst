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
                enctype="multipart/form-data"
                class="form-horizontal"
            >
                <div class="form-group">
                    <ul class="messages">
                        <div
                            class="alert alert-error"
                            style={{ color: "red" }}
                        ></div>
                    </ul>
                </div>
                <div class="form-group">
                    <label
                        for="name"
                        class="col-md-3 col-sm-3 col-xs-12 control-label"
                    >
                        File:
                    </label>
                    <div class="col-md-8" style={{ paddingBottom: "20px" }}>
                        <input
                            style={{ height: "45px" }}
                            type="file"
                            name="csv_file"
                            id="csv_file"
                            required="True"
                            class="form-control"
                        />
                    </div>
                </div>
                <div class="form-group">
                    <div
                        class="col-md-3 col-sm-3 col-xs-12 col-md-offset-3"
                        style={{ marginBottom: "10px" }}
                    >
                        <button class="btn btn-primary">
                            <span
                                class="glyphicon glyphicon-upload"
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
                class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
            >
                <i class="fas fa-download fa-sm text-white-50"></i> Product All
                Data
            </a>

            <a
                href="/export_product_csv_day"
                class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
            >
                <i class="fas fa-download fa-sm text-white-50"></i> Product
                Oneday Data
            </a>

            <a
                href="/export_product_csv_week"
                class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
            >
                <i class="fas fa-download fa-sm text-white-50"></i> Product Week
                Data
            </a>

            <a
                href="/export_product_csv_month"
                class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
            >
                <i class="fas fa-download fa-sm text-white-50"></i> Product
                Month Data
            </a>
        </>
    );
}
