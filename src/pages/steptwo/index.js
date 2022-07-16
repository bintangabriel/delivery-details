import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import GameBox from "../../component/shipmentpayment/indeks";
import { BoxGamesStyle, Style, SummaryStyle, WrapperStyle } from "./styles";

export const Shipment = () => {
    const [shipment, setShipment] = useState("");
    const [payment, setPayment] = useState("e-Wallet");
    const [eta, setEta] = useState("")
    const ref = useRef(null);
 
    const goSend = () => {
        setShipment(1);
    }
    useEffect(() => {
        const payment1 = document.getElementById("e-wallet");
        payment1.addEventListener('click', function onClick() {
            payment1.style.backgroundColor = "#028F4D";
            payment2.style.backgroundColor = "white";
            payment3.style.backgroundColor = "white";
            setPayment("e-Wallet");
        });
        const payment2 = document.getElementById("bank");
        payment2.addEventListener('click', function onClick() {
            payment2.style.backgroundColor = "#028F4D";
            payment1.style.backgroundColor = "white";
            payment3.style.backgroundColor = "white";
            setPayment("Bank Transfer");
        });
        const payment3 = document.getElementById("va");
        payment3.addEventListener('click', function onClick() {
            payment3.style.backgroundColor = "#028F4D";
            payment1.style.backgroundColor = "white";
            payment2.style.backgroundColor = "white";
            setPayment("Virtual Account");
        });
        const shipment1 = document.getElementById("gosend");
        shipment1.addEventListener('click', function onClick() {
            shipment1.style.backgroundColor = "#028F4D";
            shipment2.style.backgroundColor = "white";
            shipment3.style.backgroundColor = "white";
            setEta("today");
            setShipment("GO-SEND");
        });
        const shipment2 = document.getElementById("jne");
        shipment2.addEventListener('click', function onClick() {
            shipment2.style.backgroundColor = "#028F4D";
            shipment1.style.backgroundColor = "white";
            shipment3.style.backgroundColor = "white";
            setEta("2 days");
            setShipment("JNE");
        });
        const shipment3 = document.getElementById("courier");
        shipment3.addEventListener('click', function onClick() {
            shipment3.style.backgroundColor = "#028F4D";
            shipment1.style.backgroundColor = "white";
            shipment2.style.backgroundColor = "white";
            setEta("1 day");
            setShipment("Personal Courier");
        });
    })

    // const paymentSet = (e) => {
    //     setPayment(e);
    // }
    
    return(  
        <div>
        <WrapperStyle>
        <div>
            <Style>
                <div>
                    <div className="subHeader">
                        <h1>Shipment</h1>
                    </div>
                    <BoxGamesStyle>
                    <div className="Shipment">
                        <GameBox ref={ref} _id="gosend" onClick={goSend} jenis="GO-SEND" harga="15,000"/>
                        <GameBox jenis="JNE" harga="9,000"/>
                        <GameBox jenis="Personal Courier" harga="29,000"/>
                    </div>
                        <button id="gosend">GO-SEND</button>
                        <button id="jne">JNE</button>
                        <button id="courier">Personal Courier</button>
                    </BoxGamesStyle>
                    <div className="subHeader">
                        <h1>Payment</h1>
                    </div>
                    <BoxGamesStyle>
                    <div className="Shipment">
                        <GameBox jenis="e-Wallet" harga="1,500,000 left"/>
                        <GameBox jenis="Bank Transfer" harga=""/>
                        <GameBox jenis="Virtual Account" harga=""/>
                    </div>
                        <button id="e-wallet" >e-Wallet</button>
                        <button id="bank">Bank Transfer</button>
                        <button id="va">Virtual Account</button>
                    </BoxGamesStyle>
                </div>
            </Style>
        </div>
        <div>
            <SummaryStyle>
                <div>
                    <div className="subHeader">
                        <h4>Summary</h4>
                        <h6>10 items purchased</h6>
                    </div>
                    <div>
                        <p id="estimation">Delivery Estimation</p>
                        <p id="service">{eta} by {shipment}</p>
                    </div>
                    <button>Pay with {payment}</button>
                </div>
            </SummaryStyle>
        </div>
        </WrapperStyle>
        </div>
    )
}