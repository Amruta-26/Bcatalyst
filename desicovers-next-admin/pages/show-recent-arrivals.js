import Image from "next/image";

export default function ShowRecentArrivals() {
    return (
        <>
            <table className="table table-striped table-bordered table-sm">
                <thead className="thead-dark">
                    <tr>
                        <th style={{ textAlign: "center", fontSize: "14px" }}>
                            ID
                        </th>
                        <th style={{ textAlign: "center", fontSize: "14px" }}>
                            PRODUCT NAME
                        </th>
                        <th style={{ textAlign: "center", fontSize: "14px" }}>
                            PRODUCT DESCRIPTION
                        </th>
                        <th style={{ textAlign: "center", fontSize: "14px" }}>
                            PRODUCT IMAGE
                        </th>
                        <th style={{ textAlign: "center", fontSize: "14px" }}>
                            PRODUCT PRICE
                        </th>
                        <th style={{ textAlign: "center", fontSize: "14px" }}>
                            ACTION
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <Image
                                src="/productImage"
                                height="100"
                                width="100"
                                alt="Some Product"
                            />
                        </td>

                        <td></td>
                        <td>
                            <a
                                href="/deletrecent/"
                                className="btn btn-danger text-light"
                            >
                                Delete
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}
