import { useState, useRef, useEffect } from "react";
import { Style, SummaryStyle, WrapperStyle } from "./styles";

export const Summary  = () => {
    // Generate random alphanumeric with math.random
    function randomString(length, chars) {
        let result = '';
        for (let i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
        return result;
    }
    let rString = randomString(5, '23456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ');
    return (
        <div>
            <WrapperStyle>
            <div>
                <Style>
                    <div>
                        <h1>Thank You</h1>
                    </div>
                    <div>
                        <p>Order ID: {rString}</p>
                        <p>Your order will be delivered {} with {}</p>
                        <a href="/">Go to homepage</a>
                    </div>
                </Style>
            </div>
            <div>
                <SummaryStyle>
                    <div className="subHeader">
                        <h4>Summary</h4>
                        <h6>10 items purchased</h6>
                    </div>
                    <div>
                        <p id="tit">Delivery Estimation</p>
                        <p id="content">{} by {}</p>
                    </div>
                    <div>
                        <p id="tit">Payment Method</p>
                        <p id="content">{}</p>
                    </div>
                    <div className="wrap">
                        <p id="tit">Cost of Good Sold</p>
                        <p id="content">500,000</p>
                    </div>
                    <div className="wraptwo">
                        <p id="tit">Drop Shipping Fee</p>
                    </div>
                    <div className="wrapthree">
                            <p id="total">Total</p>
                    </div>
                </SummaryStyle>
            </div>
            </WrapperStyle>
        </div>
    )
}