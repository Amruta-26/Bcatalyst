import Image from "next/image";

export default function Review() {
    return (
        <>
            <link
                rel="stylesheet"
                href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                crossOrigin="anonymous"
            />
            <br />
            <table id="gallery" className="table table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th style={{ textAlign: "left", fontSize: "14px" }}>
                            Customer Name
                        </th>
                        <th style={{ textAlign: "left", fontSize: "14px" }}>
                            Product Name
                        </th>
                        <th style={{ textAlign: "left", fontSize: "14px" }}>
                            Review
                        </th>
                        <th style={{ textAlign: "left", fontSize: "14px" }}>
                            Picture
                        </th>
                        <th style={{ textAlign: "left", fontSize: "14px" }}>
                            Rating
                        </th>
                        <th style={{ textAlign: "left", fontSize: "14px" }}>
                            Action
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
                                src=""
                                alt="Product image"
                                className="product-image"
                                height="100px"
                                width="100px"
                            />
                        </td>
                        <td></td>
                        <td>
                            <a
                                href="/destoyreview/"
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
