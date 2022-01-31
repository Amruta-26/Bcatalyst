import Head from "next/head";
import Link from "next/link";
import Sidebar from "./components/sidebar";

export default function Home() {
    return (
        <>
        <main className="main">

            <nav aria-label="breadcrumb" className="breadcrumb-nav mb-2">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/home">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Shop</a></li>
                    </ol>
                </div>
            </nav>

            <div className="page-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="toolbox">

                                <div className="toolbox-left">
                                    <div className="toolbox-sort">
                                        <label htmlFor="sortby">Filter:</label>
                                        <form method="get">
                                            <div className="row">
                                                <div className="form-group col-sm-4 col-md-3">

                                                </div>
                                                <div className="product-details-quantity">
                                                    <p>Value: <span id="demo"></span></p>
                                                </div>
                                            </div>

                                            <button type="submit" className="btn btn-primary">
                                                <span className="glyphicon glyphicon-search"></span> Search
                                            </button>
                                        </form>
                                    </div>


                                </div>

                            </div>


                            <div className="toolbox-right">
                                <div className="toolbox-sort">
                                    <label htmlFor="sortby">Sort by:</label>
                                    <div className="select-custom">
                                        <select name="sortby" id="sortby" className="form-control">
                                            <option value="popularity" selected="selected">Most Popular</option>
                                            <option value="rating">Most Rated</option>
                                            <option value="date">Date</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="products mb-3">
                            <div className="row justify-content-center">
                                <div className="col-6 col-md-4 col-lg-4">
                                    <div className="product product-7 text-center">
                                        <figure className="product-media" style={{width:"100%", height:"300px"}}>
                                            <span className="product-label label-new">New</span>
                                            <a href="">
                                                <img src="" alt="Product image" className="product-image"/>
                                            </a>

                                        </figure>

                                        <div className="product-body">

                                            <h3 className="product-title"><a href="/product"></a></h3>
                                            <div className="product-price">
                                                &#x20b9
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>



                    </div>

                </div>
            </div >
        </main >



        <script>
            var slider = document.getElementById("id_price");
            var output = document.getElementById("demo");
            output.innerHTML = slider.value;

            slider.oninput = function() {
                output.innerHTML = this.value;}
        </script>
   
</>
    );
}
