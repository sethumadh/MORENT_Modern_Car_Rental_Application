import styled from "styled-components";

export const CarDetailsWrapper = styled.main`
  --spacing-1: 2.25%;
  --spacing-2: 4.45%;

  height: 100%;
  min-height: 100%;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
    flex-direction: column;
  gap: 1px;
  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
    margin: 0rem;
    flex-direction: row;
  }
  @media (min-width: 1024px) {
  }
`;

export const AsideLeft = styled.aside`
  /* width: 20%; */
  min-width: 360px;
  height: auto;
  left: 0px;
  top: 0px;
  background: white;
  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
    margin: 0rem;
  }
  @media (min-width: 1024px) {
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1245px;
  padding: 0;
  margin: 0;
  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
    margin: 0rem;
  flex-grow: 1;
  }
  @media (min-width: 1024px) {
  }
`;
