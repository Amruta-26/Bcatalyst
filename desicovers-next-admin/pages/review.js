import Image from "next/image";

export default function Review() {
    return (
        <>
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
                                src="/producimage"
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
