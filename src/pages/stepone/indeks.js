import { useState } from "react";
import { useForm } from "react-hook-form";
import "./styles.css"

function App() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  const [isDropShipper, setIsDropShipper] = useState(false);
  const [count, setCount] = useState(0);
  const[number, setNumber] = useState(0);
  const[error, setError] = useState(false);

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

  return (
    <div>
      <div>
      <h1 className="title">
        Delivery Details
      </h1>
      <form onSubmit={handleSubmit((e) => setData(JSON.stringify(e)))}>
        {/* <Header /> */}
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
        <p color="black">{count}</p>
        <p>{data}</p>
        <input type="submit" />
      </form>
      <a href="/shipment">continue</a>
      </div>
      {/* <div className="summary">
        <h3>Summary</h3>
        <p>10 items purchased</p>
        <div id="cogs">
          <p style="text-align: left;">Cost of Good Sold</p>
          <p id="def" style="text-align: right;">500,000</p>
        </div>
        <div id="dsfee">
          <p style="text-align: left;">Dropshipping Fee</p>
          <p id="fee"  style="text-align: right;">5,900</p>
        </div>
        <div id="total">
          <p style="text-align: left;">Total</p>
          <p style="text-align: right;">{{}}</p>
        </div>
      </div> */}
    </div>
  );
}

export default App;