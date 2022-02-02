export default function Review() {
    return (
        <>
            <br />
            <br />

            <table id="gallery" className="table table-bordered">
                <thead>
                    <tr>
                        <th>Customer Name</th>
                        <th>Product Name</th>
                        <th>Review</th>
                        <th>Picture</th>
                        <th>Rating</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><img src="" alt="Product image" className="product-image" height="100px" width="100px" /></td>
                        <td></td>
                        <td><a href="/destoyreview/" className='btn btn-danger'>Delete</a></td>

                    </tr>
                </tbody>
            </table>

        </>
    );
}
