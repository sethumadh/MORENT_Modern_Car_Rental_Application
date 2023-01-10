import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
  }
`;

export const LeftSide = styled.aside`
  /* width: 20%; */
  min-width: 260px;
  height: 100%;
  left: 0px;
  top: 0px;
  background: white;
  display: none;
  padding: 32px;
  h3 {
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 150%;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    color: #94a7cb;
  }
  div {
    display: flex;
    position: relative;
    margin-bottom: 70px;
  }
  svg {
    width: 20px;
    height: 20px;
  }
  input {
    width: 100%;
    height: 44px;
    background: #ffffff;
    border: 1px solid rgba(195, 212, 233, 0.4);
    border-radius: 70px;
    padding-left: 45px;
    margin-top: 28px;
    &::placeholder {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 150%;
      display: flex;
      align-items: center;
      text-align: justify;
      letter-spacing: -0.02em;

      color: #3d5278;
    }
  }
  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
    margin: 0rem;
  display: block;
  }
  @media (min-width: 1024px) {
  }
`;

export const Label = styled.label`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 150%;

  display: flex;
  align-items: center;
  text-align: justify;
  letter-spacing: -0.02em;

  color: #3d5278;

  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
  }
`;

export const FilterSection = styled.div`
  
  span{
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 150%;
  display: flex;
  align-items: center;
  text-align: justify;
  letter-spacing: -0.02em;
  color: #3D5278;
  }

  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
  }
`;
