import { useState, useHistory } from "react";
import { useForm } from "react-hook-form";
import { Shipment } from "../steptwo";
import { Style, SummaryStyle, WrapperStyle } from "./styles";

function App() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  const [isDropShipper, setIsDropShipper] = useState(false);
  const [count, setCount] = useState(0);
  const[number, setNumber] = useState(0);
  const[error, setError] = useState(false);
  // const history = useHistory();

  const handleOnChange = () => {
    setIsDropShipper(!isDropShipper);
  };

  const recalculte = (e) => {
    setCount(e.target.value.length);
  };

  const handleNumber = (e) => {
    setNumber(e.target.value.length);
  }

  function isEmailValid(email){
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = event => {
    if (!isEmailValid(event.target.value)) {
      setError(true);
    } else {
      setError(false);
    }
  };

  function passProps() {
    setIsDropShipper(isDropShipper);
  };

  // function routePage() {
  //   history.push('/shipment')
  // };

  return (
    <div>
<WrapperStyle>
<div>
    <Style>
        <div>
            <div className="subHeader">
                <h1>Delivery Details</h1>
            </div>
            <form onSubmit={handleSubmit((e) => setData(JSON.stringify(e)))}>
              <div className="isDS">
                <input {...register("isDropShipper")} type="checkbox" checked={isDropShipper} onChange={handleOnChange}/>
                Send as dropshipper
              </div>
              <input style={{color: error ? "#FF8A00" : "green"}} onChange={handleChange} id="email" {...register("email")} placeholder="Email" />
              <input style={{color: number.length > 5 ? "green" : "#FF8A00"}}
              type="text" maxLength="20" pattern="\d" onChange={handleNumber} id="phone" {...register("phoneNumber")} placeholder="Phone Number"/>
              <input disabled={!isDropShipper} id="dn" {...register("dropshipperName")} placeholder="Dropshipper Name" />
              <input disabled={!isDropShipper} id="dpno" {...register("dropshipperPhoneNo")} placeholder="Dropshipper phone number" />
              <textarea maxLength="120" onChange={recalculte} {...register("deliveryAddress")} placeholder="Delivery Address" />
              {/* <p>{count}</p>
              <p>{data}</p> */}
              <input type="submit" value="continue to payment"/>
            </form><a href="/shipment">continue</a>
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
            <div className="wrap">
                <p id="tit">Cost of Good Sold</p>
                <p id="content">500,000</p>
            </div>
            <div className="wraptwo">
                <p id="tit">Drop Shipping Fee</p>
                <p id="content">{isDropShipper ? "5,900" : "0"}</p>
            </div>
            <div className="wrapthree">
              <p id="total">Total</p>
              <p id="totalnumber">{isDropShipper ? "505,000" : "500,000"}</p>
            </div>
            {/* <Shipment dsfee={isDropShipper} /> */}
        </div>
    </SummaryStyle>
</div>
</WrapperStyle>
</div>
  );
};

export default App;


