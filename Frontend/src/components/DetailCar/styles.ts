import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin:20px;
  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
    margin:40px;
    flex-direction: row;
  }
  @media (min-width: 1024px) {
  }
`;
export const InnerDiv = styled.section`
  width:100%;
  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
  width:50%;
  }
  @media (min-width: 1024px) {
  }
`;

export const CarDetailImages = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  margin: 10px 0;

  div{
    width: 115px;
    height: 90px;
    border: 2px solid #3563E9;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img{
    width: 90%;
    height: auto;
  }

  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {

    div{
      width: 180px;
      height: 145px;
    }
    img{
      width: 90%;
      height: auto;
    }
  }
  @media (min-width: 1024px) {
  }
`;

export const CarInfo = styled.div`
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  border-radius: 10px;
  padding: 24px;
  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
  }
`;

export const CarDescription = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  div{
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 140%;
    display: flex;
    align-items: center;
    color: #1A202C;
  }
  img{
    width: 24px;
    height: 24px;
  }

  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
  }
`;

export const CarRating = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
  gap: 0.5rem;
  div{
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    color: #3D5278;
  }
  img{
    width: 20px;
    height: 20px;
  }

  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
  }
`;

export const CarInfoContent = styled.div`
 font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 200%;
  margin-top: 30px;
  margin-bottom: 4rem;
  letter-spacing: -0.02em;
  color: #3D5278;

  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
  font-size: 20px;
  }
  @media (min-width: 1024px) {
  }
`;

export const CarPrice = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: space-between;
  div{
    div{
      font-style: normal;
      font-weight: 700;
      font-size: 28px;
      line-height: 35px;
      align-items: center;
      color: #1A202C;
      span{
        font-size: 16px;
        line-height: 20px;
        color: #90A3BF;
      }
    }
  }
  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
  }
`;

export const CarPriceAmt = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
  text-decoration-line: line-through;
  color: #90A3BF;
  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
  }
`;

export const ActionButton = styled.div`
  display: flex;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  color: #fff;
  background: #3563E9;
  border-radius: 4px;
  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
  }
`;

export const CarSpec = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 0px;
  gap: 44px;
  margin-bottom: 15px;
  div{
    width: 50%;
    div{
      float: left;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 25px;
      display: flex;
      align-items: center;
      letter-spacing: -0.02em;
      color: #90A3BF;
    }
    span{
      float: right;
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 25px;
      display: flex;
      align-items: center;
      text-align: right;
      letter-spacing: -0.02em;
      color: #3D5278;
    }
  }

  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
  div{
    width: 50%;
    div{
      font-size: 20px;
    }
    span{
      font-size: 20px;
    }
  }
  }
  @media (min-width: 1024px) {
  }
`;