import styled from "styled-components";
export const Style = styled.div`
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  /* display: flex; */
  flex-wrap: wrap;
  padding: 100px 300px;
  color: #FF8A00;
  text-align: center;
  margin-right: 30px;
  .subHeader{
    color: #FF8A00;
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
`;

export const SummaryStyle = styled.div`
  padding-bottom: 40vw;
  width: 20vw;
  .subHeader{
    /* margin-bottom: 30px; */
  }
  p[id="total"]{
    color: #FF8A00;
    font-size: 30px;
    font-weight: bold;
  }
  p[id="totalnumber"]{
    color: #FF8A00;
    font-size: 30px;
    font-weight: bold;
  }
  p[id="tit"]{
    color: grey;
  }
  p[id="content"]{
    color: black;
    font-weight: bold;
  }
  .wrap{
    display: flex;
    justify-content: space-between;
  }
  .wraptwo{
    display: flex;
    justify-content: space-between;
  }
  p[id="tit"]{
    color: black;
  }
  p[id="content"]{
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