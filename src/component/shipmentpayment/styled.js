import styled from "styled-components";


export const GameBoxStyle = styled.div`
  @media screen and (max-width: 767px) {
  .box-outside {
    width: 200px;
    height: 150px;
    background: #8648ba;
    border: 3px solid #000000;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 0.32vw  ;
    flex-wrap: wrap;
    margin: 25px;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 576px) {
     margin: 10px;
     width: 35vw; 
     height: calc(0.75 * 35vw);
    }
    &:hover {
      background: rgba(3, 191, 103, 1);
    }
    .box-inside {
      height: 80%;
      width: 80%;
      /* width:100%; */
      background: #2e1145;
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px 35px;
      &:hover {
        cursor: pointer;
        background: #028F4D;
      }
      img {
        width: auto;
        height: 100%;
      }
      @media only screen and (max-width: 576px) {
        padding: 16px 20px;
      }
    }
  }
}
  @media screen and (min-width: 768px) {
  .box-outside {
    width: 200px;
    height: 150px;
    background: #8648ba;
    border: 3px solid #000000;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 04px  ;
    flex-wrap: wrap;
    margin-right: 50px;
    margin-bottom: 25px;
    margin-left: 0px;
    &:hover {
      background: rgba(3, 191, 103, 1);
    }
    .box-inside {
      height: 70%;
      width: 62%;
      /* width:100%; */
      background: #2e1145;
      border-radius: 8px;
      /* display: flex; */
      justify-content: center;
      align-items: center;
      padding: 20px 35px;
      &:hover {
        cursor: pointer;
        background: #028F4D;
      }
      img {
        width: auto;
        height: 100%;
      }
    }
  }
  @media screen and (min-width: 2500px) {
  .box-outside {
    width: 300px;
    height: 250px;
    background: #8648ba;
    border: 3px solid #000000;
    box-sizing: border-box;
    border-radius: 10px;
    padding: 04px  ;
    flex-wrap: wrap;
    margin-right: 50px;
    margin-bottom: 25px;
    margin-left: 0px;
    &:hover {
      background: rgba(3, 191, 103, 1);
    }
    .box-inside {
      height: 100%;
      width: 100%;
      /* width:100%; */
      background: #2e1145;
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px 35px;
      &:hover {
        cursor: pointer;
        background: #028F4D;
      } 
      img {
        width: auto;
        height: 100%;
      }
    }
  }
}}
`;

export const HeadingStyle = styled.div`
  .Header {
    width: 10vw;
    margin-left: 50px;
    margin-bottom: 50px;
    flex-wrap: wrap;
    display: flex;
  }
  .Individu {
    margin-left: 50px;
  }
`

export const GamesIndividuStyle = styled.div`
  .Individu {
    margin-bottom:10px;
    flex-wrap: wrap;
    margin-left: 50px;
  }
`

export const GamesTimStyle = styled.div`
  .Gamestim {
    margin-top: 25px;
    margin-left: 4vw;
    flex-wrap: wrap;
  }
`
export const HeaderStyleFix = styled.div`
  .Headerder {
    margin-left: 50px;
    margin-bottom:250px;
  }
`
