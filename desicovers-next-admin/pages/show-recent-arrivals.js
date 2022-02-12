export default function ShowRecentArrivals() {
  return (
    <>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
    
            <table className="table table-striped table-bordered table-sm">
      <thead className="thead-dark">
        <tr>
          <th style={{ textAlign:"center", fontSize:"14px"}}>ID</th>
          <th style={{ textAlign:"center", fontSize:"14px"}}>PRODUCT NAME</th>
          <th style={{ textAlign:"center", fontSize:"14px"}}>PRODUCT DESCRIPTION</th>
          <th style={{ textAlign:"center", fontSize:"14px"}}>PRODUCT IMAGE</th>
          <th style={{ textAlign:"center", fontSize:"14px"}}>PRODUCT PRICE</th>
          <th style={{ textAlign:"center", fontSize:"14px"}}>ACTION</th>
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
            <a href="/deletrecent/" className="btn btn-danger text-light">
              Delete
            </a>
          </td>
        </tr>
      </tbody>
    </table>
    </>
   
  );
}
