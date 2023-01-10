import styled from "styled-components";

export const CarCardWrapper = styled.div`
  margin-top: 1.25rem;
  margin-bottom: 0.25rem;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  width: 100%;
  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
    width: 50%;
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  @media (min-width: 1024px) {
    width: 33.333333%;
  }
  @media (min-width: 1280px) {
    width: 25%;
  }
`;

export const Article = styled.article`
  display: flex;
  gap: 2rem;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  border-radius: 0.5rem;
  background-color: #ffffff;
  height: 400px;
  padding: 20px;
  --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
  }
`;

export const CardRow1 = styled.div`
  height: 10%;
  display: flex;
  justify-content: space-between;
  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
  }
`;

export const CardRow2 = styled.div`
  height: 60%;
  display: flex;
  flex-direction: column;
  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
  }
`;

export const CardRow3 = styled.div`
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px;
  gap: 16px;
  transform: scale(.95);
  width: 105%;
  left: -3%;
  position: relative;
  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
  }
`;

export const CardRow4 = styled.div`
  height: 20%;
  display: flex;
  justify-content: space-between;
  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
  }
`;

export const CardTitle = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 25px;
  align-items: center;
  color: #1a202c;
  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
  }
`;

export const CardTag = styled.span`
  display: block;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  align-items: center;
  color: #90a3bf;
  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
  }
`;

export const CardSpesificationDiv = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px;
  gap: 2px;
  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
  }
`;

export const CardSpesification = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  color: #90a3bf;
  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
  }
`;

export const Price = styled.span`
  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
  }
`;

export const PricePerDay = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 25px;
  display: flex;
  align-items: center;
  color: #1a202c;
  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
  }
`;

export const PricePerDaySmall = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  color: #90a3bf;
  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
  }
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
  }
`;

export const RentNowButton = styled.button`
  width: 120px;
  height: 44px;
  border: none;
  border-radius: 4px;
  
  font-weight: var(--font-semi-bold);

  color: var(--color-white);
  background-color: var(--color-blue-primary);
  
  cursor: pointer;
`;























// export const CarCardWrapper = styled.div`
//   justify-self: center;
//   height: 380px;
//   width: 90%;
//   border-radius: var(--border-radius-general);
//   background-color: var(--color-white);
//   @media (min-width: 640px) {
//   }
//   @media (min-width: 768px) {
//   }
//   @media (min-width: 1024px) {
//   width: 94%;
//   }
// `;
