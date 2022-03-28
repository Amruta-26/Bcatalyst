import Head from "next/head";
import Link from "next/link";
import Sidebar from "./components/sidebar";
import axios from "axios";
import Image from "next/image";

Home.getInitialProps = async function () {
    const res = await axios.get(
        "https://desicover.herokuapp.com/get-all-products"
    );
    const data = await res.data;

    console.log(`Show data fetched. Count: ${data.length}`);

    return {
        data: data,
    };
};

export default function Home(props) {
    return (
        <>
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
                    {props.data.map((ninja) => (
                        <tr key={ninja._id}>
                            <td>{ninja.id}</td>
                            <td>{ninja.productData.name}</td>
                            <td>{ninja.productData.description}</td>
                            <td>{ninja.productData.price}</td>
                            <td>{ninja.productData.category}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                {/* <Image
                                    src={ninja.productData.image}
                                    alt="img1"
                                    height="100"
                                    width="100"
                                /> */}
                            </td>
                            <td>
                                {/* <Image
                                    src=""
                                    alt="img2"
                                    height="100"
                                    width="100"
                                /> */}
                            </td>
                            <td>
                                {/* <Image
                                    src=""
                                    alt="img3"
                                    height="100"
                                    width="100"
                                /> */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
