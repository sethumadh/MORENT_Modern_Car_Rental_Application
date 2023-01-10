import styled from "styled-components";

export const AddCarWrapper = styled.main`
  --spacing-1: 2.25%;
  --spacing-2: 4.45%;

  height: 100%;
  min-height: 100%;
  width: 100%;
`;

export const FormSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin: 1rem;
  justify-content: center;
  align-items: center;
  padding: 3rem 0;
  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
  margin: 0rem;
  }
  @media (min-width: 1024px) {
  }
`;
