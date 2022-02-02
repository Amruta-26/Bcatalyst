import Head from "next/head";
import Link from "next/link";
import Sidebar from "./components/sidebar";

export default function Home() {
    return (
        <>

            <Head>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
            </Head>


            <table className="table table-striped table-bordered table-sm">
                <thead className="thead-dark">
                    <tr>
                        <th>PRODUCT ID</th>
                        <th>PRODUCT NAME</th>
                        <th>DESCRIPTION</th>
                        <th>PRICE</th>
                        <th>CATEGORY</th>
                        <th>WEIGHT</th>
                        <th>SIZE</th>
                        <th>THEME</th>
                        <th>COMPANY</th>
                        <th>MODEL NO</th>
                        <th>ACTION</th>
                        <th>IMAGE 1</th>
                        <th>IMAGE 2</th>
                        <th>IMAGE 3</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><img src="" alt="img1" height="100" width="100"/></td>
                        <td><img src="" alt="img2" height="100" width="100"/></td>
                        <td><img src="" alt="img3" height="100" width="100"/></td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}
