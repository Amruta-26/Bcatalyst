import React from 'react';

export default function CancelOrder() {
    return (
                <div>
                    <h1 style={{ textAlign: "center" }}>Cancellation</h1>
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
                            <p><span style={{fontWeight: "bold"}}>Rs: </span></p>
                            <p><span style={{fontWeight: "bold"}}>Rs: </span></p>
                            <p><span style={{fontWeight: "bold"}}>Rs: </span></p>
                            <p><span style={{fontWeight: "bold"}}>Payment Mode: Cash On Delivery</span></p>
                            <p><span style={{fontWeight: "bold"}}>Payment Mode: Paytm</span></p>
                            <p><span style={{fontWeight: "bold"}}>Transaction Status </span></p >
                        </div >
        <div className="delivery">
            <p>Delivery Expected By</p>
            <p><b>17 September 2021</b></p>
        </div>
                    </div >
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
                </div >
            </div >
            );
}
