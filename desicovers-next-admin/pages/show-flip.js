import Button from '@mui/material/Button';
import Image from "next/image";

export default function ShowFlip() {
    return (
        <>
            <link
                rel="stylesheet"
                href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                crossOrigin="anonymous"
            />
            <table className="table table-striped table-bordered table-sm">
                <thead className="thead-dark">
                    <tr>
                        <th style={{ fontSize: "14px", padding: "10px 5px" }}>
                            PRODUCT ID
                        </th>
                        <th style={{ fontSize: "14px", padding: "10px 5px" }}>
                            PRODUCT NAME
                        </th>
                        <th style={{ fontSize: "14px", padding: "10px 5px" }}>
                            PRODUCT DESCRIPTION
                        </th>
                        <th style={{ fontSize: "14px", padding: "10px 5px" }}>
                            PRODUCT IMAGE
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
                                alt="Some text"
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}
