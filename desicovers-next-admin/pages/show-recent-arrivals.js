export default function ShowRecentArrivals() {
  return (
    <table className="table table-striped table-bordered table-sm">
      <thead className="thead-dark">
        <tr>
          <th>ID</th>
          <th>PRODUCT NAME</th>
          <th>PRODUCT DESCRIPTION</th>
          <th>PRODUCT IMAGE</th>
          <th>PRODUCT PRICE</th>
          <th>ACTION</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <img src="" height="100" width="100" />
          </td>

          <td></td>
          <td>
            <a href="/deletrecent/" className="btn btn-danger">
              Delete
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
