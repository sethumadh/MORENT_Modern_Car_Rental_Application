import styled from "styled-components";

export const DropOffWrapper = styled.div`
  grid-area: DropOff;
  height: 136px;
  background-color: var(--color-white);
  border-radius: var(--border-radius-general);
  padding: 20px 20px;
  width: 100%;
  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
    padding: 24px 48px;
    width: 44%;
  }
  @media (min-width: 1024px) {
  }
`;

export const DropOffContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DropOffHeaderContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const DropOffHeader = styled.input``;

export const DropOffLabel = styled.label`
  font-size: 1rem;
  font-weight: var(--font-weight-semi-bold);
`;

export const DropOffItem = styled.div`
  display: grid;
  width: 100%;
  height: fit-content;
  grid-template-columns: repeat(3, 1fr);
  place-content: center;
  gap: 0;
  padding: 1rem 0;
  @media (min-width: 768px) {
    gap: 0 var(--spacing-veritical);
  }
`;

export const DropOffDiv = styled.div`
  border-right: 1px solid rgba(195, 212, 233, 0.4);

  &:last-child {
    border-right: 0;
  }
`;

export const DropOffDiv2 = styled.div`
  border-right: 0;
  margin: 0;
  &:last-child {
    border-right: 0;
  }

  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
    border-right: 1px solid rgba(195, 212, 233, 0.4);
    margin: 0 10px;
  }
  @media (min-width: 1024px) {
  }
`;

export const SelectDiv = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
  }
`;

export const DropOffTitle = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 120%;
  display: flex;
  align-items: center;
  color: #1a202c;
  @media (min-width: 640px) {
    font-size: 16px;
  }
`;

export const SelectCity = styled.div`
  font-style: normal;
  font-weight: 500;
  display: flex;
  align-items: center;
  letter-spacing: -0.01em;
  color: #90a3bf;
  font-size: 10px;
  line-height: 14px;

  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 200%;
  }
`;

export const DropDownArrow = styled.img`
  height: 14px;
`;