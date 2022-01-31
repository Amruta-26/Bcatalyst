import React from 'react';

export default function CancelOrder() {
    return (
        <>
            <head>
                <style>
                    .Container1 {
                        width: 80%;
                    margin-left: 10%;
                    border: 1px solid black;
                    height: auto;
                    margin-bottom: 20px;
        }

                    .Container1 #track {
                        padding: 10px 10px;
                    float: right;
                    border: 1px solid black;
                    width: auto;
                    border-radius: 25px;
                    text-align: center;
                    margin:1%;
        }


                    .Container1 #order {
                        padding: 10px 10px;
                    border: 1px solid black;
                    width: auto;
                    border-radius: 25px;
                    margin:1%;
                    float:left;
                    text-align: center;
        }


                    .Container1 #detail {
                    margin - left: 3%;
                    position:relative;
                    top:25px;
        }

                    .cont1 {
                    border - top: 1px solid black;
                    border-bottom: 1px solid black;
                    margin-top:4%;
                    height:400px;
        
        }

                    .imgg {
                        /* margin-left: 5%; */
                        margin: 7% 0% 12% 5%;
                    }


                    .det {
                        width: 20%;
                    height: auto;
                    margin-left: 25%;
                    margin-top: -18%;
                    margin-bottom: 3%;
        }


                    .delivery {
                        float: right;
                    margin-top: -8%;
                    margin-right: 5%;
        }

                    #cancelorder{

                        min - width: auto;
                    padding: 5px 6px;
                    margin-right: 8%;
                    float: right;
                    margin-top: -10%;

        }


                    @media only screen and (max-width: 1000px) {
                    .Container1 #track {
                        padding: 5px 5px;
                        float: right;
                        border: 1px solid black;
                        width: auto;
                        text-align: center;
                    }

                    .Container1 #order {
                        padding: 5px 5px;
                    border: 1px solid black;
                    width: auto;
                    text-align: center;
                }
        }
                    @media only screen and (max-width: 830px) {#cancelorder{margin - top:-5%;}
}
                    @media only screen and (max-width: 700px) {
 .det {
                        width: 20%;
                    height: auto;
                    position:relative;
                    bottom:130px;
                    left:45%;
                    margin-left: 0;
                    margin-top: 0;
                    margin-bottom: 0;
        }
                    .cont1{margin - top:4%;height:250px;}

                    .delivery {
                        position:relative;
                    bottom:120px;
                    left:85%;
                    float:none;
                    margin-top: 0;
                    margin-right: 0;
        }
                    .Container1 #detail{margin - left:0;}
}

                    @media only screen and (max-width: 600px)   {
            .Container1 #detail{
                        display:flex;
                    width:100%;
                    top:0;
    }
                    .det {
                        width: 20%;
                    height: auto;
                    position:relative;
                    bottom:130px;
                    left:45%;
                    margin-left: 0;
                    margin-top: 0;
                    margin-bottom: 0;
        }
                    .cont1{margin - top:4%;height:250px;}

                    .delivery {
                        position:relative;
                    bottom:120px;
                    left:45%;
                    float:none;
                    margin-top: 0;
                    margin-right: 0;
        }
                    #cancelorder{
                        min - width:auto;
                    padding: 5px 6px;
                    margin-left: 2%;
                    float: none;

    }


}
                </style>

            </head >

            <body>
                <div>
                    <h1 style={{ text- align: "center" }}>Cancellation</h1>
                <div className="Container1">
                    <div className='form-group'>
                        <ul className="messages">
                            <div className="alert alert-error" style={{ color: "red", display: "none" }}></div>
                        </ul>
                    </div>
                    <span id="order"> Order Id: <a href="#"></a></span>
                    <span id="detail">Order placed</span>
                    <div className="cont1">
                        <div className="imgg">
                            <img src="" alt="img1" height="100" width="100" />
                        </div>
                        <div className="det">
                            <h3></h3>
                            <p><span style={{font-weight: "bold "}}>Rs: </span></p>
                            <p><span style={{font-weight: "bold "}}>Payment Mode: Cash On Delivery</span></p>
                            <p><span style={{font-weight: "bold "}}>Payment Mode: Paytm</span></p>
                            <p><span style={{font-weight: "bold "}}>Transaction Status </span></p>
                        </div>
                        <div className="delivery">
                            <p>Delivery Expected By</p>
                            <p><b>17 September 2021</b></p>
                        </div>
                    </div>
                    <form action="/postcancel/" method="POST" className="form-control">
                        <label htmlFor="cars">Reason For Cancellation:</label>
                        <input type="hidden" value="{{order.id}}" name="id" />
                        <select id="cars" name="cars">
                            <option>Choose one</option>
                            <option value="Product is not required anymore.">Product is not required anymore.</option>
                            <option value="Product is being delivered to a wrong address(Customer’s mistake)">Product is being delivered to a wrong address(Customer’s mistake)</option>
                            <option value="Expected delivery date has changed and the product is arriving at a later date">Expected delivery date has changed and the product is arriving at a later date</option>
                            <option value="Cheaper alternative available for lesser price">Cheaper alternative available for lesser price</option>
                            <option value="Bad review from friends/relatives after ordering the product">Bad review from friends/relatives after ordering the product</option>
                        </select>
                        <button type="submit" className="btn btn-danger">Cancel Order</button>
                    </form>
                </div>
            </div>
        </body>
            </>
            );
}
