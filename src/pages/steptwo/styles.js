import styled from "styled-components";

export const Style = styled.div`
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-wrap: wrap;
  padding: 120px 8vw;
  padding-bottom: 40px;
  @media screen and (min-width: 768px) {
    padding-left: 2vw;
    padding-right: 5vw;
    padding-top: 15px;
  }
  .subHeader{
    color: #FF8A00;
  }

  button{
    width: 200px;
    height: 100px;
    /* background: #8648ba; */
    border: 3px solid #000000;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 0.32vw  ;
    flex-wrap: wrap;
    margin: 25px;
    align-items: center;
    justify-content: center;
  }
  button[id="gosend"],
  button[id="e-wallet"]{
    background: #028F4D;
  }

  h1 {
    white-space: wrap;
    @media screen and (min-width: 768px) {
      font-family: Montserrat;
      font-style: normal;
      font-weight: 900;
      font-size: 40px;
      line-height: 50px;
      /* color: #6a7cc8; */
      /* -webkit-text-fill-color: #6a7cc8; Will override color (regardless of order) */
      -webkit-text-stroke-width: 1.2px;
      -webkit-text-stroke-color: black;
      margin-bottom: 8px;
    }
    @media screen and (min-width: 1339px) {
      font-family: Montserrat;
      font-style: normal;
      font-weight: 900;
      font-size: 40px;
      line-height: 50px;
      /* color: #6a7cc8;
      -webkit-text-fill-color: #6a7cc8; Will override color (regardless of order) */
      -webkit-text-stroke-width: 1.2px;
      -webkit-text-stroke-color: black;
      margin-bottom: 8px;
    }
    @media screen and (max-width: 767px) {
      /* h1 { */
      font-family: Montserrat;
      font-style: normal;
      font-weight: 900;
      font-size: 40px;
      line-height: 50px;
      color: #6a7cc8;
      -webkit-text-fill-color: #6a7cc8; /* Will override color (regardless of order) */
      -webkit-text-stroke-width: 1.2px;
      -webkit-text-stroke-color: black;
      margin-bottom: 8px;
    }
    @media screen and (min-width: 2500px) {
      /* h1 { */
      font-family: Montserrat;
      font-style: normal;
      font-weight: 100000;
      font-size: 40px;
      line-height: 50px;
      color: #6a7cc8;
      -webkit-text-fill-color: #6a7cc8; /* Will override color (regardless of order) */
      -webkit-text-stroke-width: 1.2px;
      -webkit-text-stroke-color: black;
      margin-bottom: 8px;
    }
  }
  h3 {
    @media screen and (max-width: 767px) {
      font-family: MADE Sunflower;
      font-style: normal;
      font-weight: normal;
      font-size: 34px;
      line-height: 36px;
      color: #ffffff;
      -webkit-text-fill-color: #ffffff; /* Will override color (regardless of order) */
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: black;
      margin-bottom: 20px;
      justify-content: center;
      align-items: center;
      display: flex;
      flex-wrap: wrap;
    }
    @media screen and (max-width: 1023px){
      justify-content: center;
      align-items: center;
      display: flex;
      flex-wrap: wrap;
    }
    @media screen and (min-width: 768px) {
      font-family: MADE Sunflower;
      font-style: normal;
      font-weight: normal;
      font-size: 34px;
      line-height: 36px;
      color: #ffffff;
      -webkit-text-fill-color: #ffffff; /* Will override color (regardless of order) */
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: black;
      margin-bottom: 20px;
      justify-content: center;
    }
    @media screen and (min-width: 1023px) {
      font-family: MADE Sunflower;
      font-style: normal;
      font-weight: normal;
      font-size: 34px;
      line-height: 36px;
      color: #ffffff;
      -webkit-text-fill-color: #ffffff; /* Will override color (regardless of order) */
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: black;
      margin-bottom: 40px;
    }
  }
`;
export const BoxGamesStyle = styled.div`
  .Shipment {
    @media screen and (max-width: 767px) {
      margin-bottom: 40px;
    }
    @media screen and (max-width: 1022px) {
      align-items: center;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      margin-bottom: 40px;
    }
    @media screen and (min-width: 1023px) {
      align-items: center;
      display: flex;
      margin-bottom: 40px;
      flex-wrap: wrap;
    }
  }
`;
export const HeadingStyle = styled.div`
  .Header {
    @media screen and (min-width: 100px) {
      /* margin-left: 50px; */
      margin-bottom: 40px;
      justify-content: center;
      align-items: center;
      img {
        width: 95%;
      }
    }
    @media screen and (min-width: 768px) {
      margin-bottom: 40px;
    }
  }
`;
export const SummaryStyle = styled.div`
  padding-bottom: 30vw;
  button{
    width: 200px;
    height: 50px;
    background: #FF8A00;
    border: 3px solid #000000;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 0.32vw  ;
    flex-wrap: wrap;
    margin: 25px;
    align-items: center;
    justify-content: center;
  }
  .subHeader{
    /* margin-bottom: 30px; */
  }
  p[id="estimation"]{
    color: black;
  }
  p[id="service"]{
    color: green;
  }
  h6{
    color: grey;
  }
  h4 {
    white-space: wrap;
    @media screen and (min-width: 768px) {
      font-family: Montserrat;
      font-style: normal;
      /* font-weight: 900; */
      font-size: 30px;
      /* line-height: 50px; */
      color: #FF8A00;
      /* color: #6a7cc8; */
      /* -webkit-text-fill-color: #6a7cc8; Will override color (regardless of order) */
      -webkit-text-stroke-width: 1.2px;
      -webkit-text-stroke-color: black;
    }
    @media screen and (max-width: 767px) {
      /* h1 { */
      font-family: Montserrat;
      font-style: normal;
      font-weight: 900;
      font-size: 40px;
      line-height: 50px;
      color: #FF8A00;
      /* -webkit-text-fill-color: #6a7cc8; Will override color (regardless of order) */
      -webkit-text-stroke-width: 1.2px;
      -webkit-text-stroke-color: black;
      margin-bottom: 8px;
    }
    @media screen and (min-width: 2500px) {
      /* h1 { */
      font-family: Montserrat;
      font-style: normal;
      font-weight: 100000;
      font-size: 40px;
      line-height: 50px;
      color: #FF8A00;
      /* -webkit-text-fill-color: #6a7cc8; Will override color (regardless of order) */
      -webkit-text-stroke-width: 1.2px;
      -webkit-text-stroke-color: black;
      margin-bottom: 8px;
    } 
  }
`;

export const WrapperStyle = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
`;