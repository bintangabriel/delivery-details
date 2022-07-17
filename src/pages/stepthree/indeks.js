import { useState, useRef, useEffect } from "react";
import { Style, SummaryStyle, WrapperStyle } from "./styles";

export const Summary  = () => {
    return (
        <div>
            <WrapperStyle>
            <div>
                <Style>
                    <div>
                        <h1>Thank You</h1>
                    </div>
                    <div>
                        <p>Order ID: {}</p>
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
                </SummaryStyle>
            </div>
            </WrapperStyle>
        </div>
    )
}