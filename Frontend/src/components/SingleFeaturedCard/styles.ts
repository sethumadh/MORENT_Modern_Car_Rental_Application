import styled from 'styled-components';

import { PickupBG,DropoffBG } from '../../assets/background';

export const FeaturedWrapper = styled.div`
  background-image: url(${PickupBG});
  background-size: cover;
  height: clamp(232px, 400px, 500px);
  width: 100%;
  min-width: 327px;
  border-radius: var(--border-radius-general);

  position: relative;
  z-index: 10;

  justify-self: center;
  overflow: hidden;

  :nth-of-type(1) {
    background-color: var(--color-blue-secondary);

    @media (${({ theme }) => theme.queries.smallAndDown}) {
     height: clamp(250px, 350px, 400px);
   }

    @media (${({ theme }) => theme.queries.verySmallAndDown}) {
     height: 300px;
   }
  }
  
  :nth-of-type(2) {
    background-color: var(--color-blue-primary);

   @media (${({ theme }) => theme.queries.smallMediumAndDown}) {
     display: none;
   }
  }
`;


export const FeaturedWrapper2 = styled.div`
  background-image: url(${DropoffBG});
  background-size: cover;
  height: clamp(232px, 400px, 500px);
  width: 100%;
  min-width: 327px;
  border-radius: var(--border-radius-general);

  position: relative;
  z-index: 10;

  justify-self: center;
  overflow: hidden;

  :nth-of-type(1) {
    background-color: var(--color-blue-secondary);

    @media (${({ theme }) => theme.queries.smallAndDown}) {
     height: clamp(250px, 350px, 400px);
   }

    @media (${({ theme }) => theme.queries.verySmallAndDown}) {
     height: 300px;
   }
  }
  
  :nth-of-type(2) {
    background-color: var(--color-blue-primary);

   @media (${({ theme }) => theme.queries.smallMediumAndDown}) {
     display: none;
   }
  }
`;

export const FeaturedContent = styled.div`
  position: relative;
  z-index: 20;

  width: 100%;
  height: 100%;
  padding: 25px;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FeaturedContentTitle = styled.div`
  width: 52.5%;

  display: flex;
  align-items: center;

  color: var(--color-white);
  letter-spacing: -0.01em;

  h1 {
    font-style: normal;
    font-weight: var(--font-weight-semi-bold);
    font-size: 2rem;
    line-height: 120%;
  }

  @media (${({ theme }) => theme.queries.largeAndDown}) {
    width: 80%;
  }

  @media (${({ theme }) => theme.queries.mediumLargeAndDown}) {
    width: 80%;
  }

  @media (${({ theme }) => theme.queries.mediumAndDown}) {
    width: 80%;

    h1 {
      font-size: 1.75rem;
    }
  }

  @media (${({ theme }) => theme.queries.mediumSmallAndDown}) {
    width: 90%;

    h1 {
      font-size: 1.5rem;
    }
  }

  @media (${({ theme }) => theme.queries.smallAndDown}) {
    width: 90%;

    h1 {
      font-size: 1.2rem;
    }
  }

  @media (${({ theme }) => theme.queries.verySmallAndDown}) {
    width: 100%;

    h1 {
      font-size: 1rem;
    }
  }
`; 

export const FeaturedContentDesc = styled.div`
  width: 50%;

  display: flex;
  align-items: center;
  letter-spacing: 0.02em;
  color: var(--color-white);

  h3 {
    font-size: 1rem;
    font-style: normal;
    font-weight: var(--font-weight-medium);
    font-style: normal;
    line-height: 160%;
  }


  @media (${({ theme }) => theme.queries.largeAndDown}) {
    width: 60%;
  }

  @media (${({ theme }) => theme.queries.mediumLargeAndDown}) {
    width: 70%;
  }

  @media (${({ theme }) => theme.queries.mediumAndDown}) {
    width: 80%;

    h3 {
      font-size: 0.85rem;
    }
  }

  @media (${({ theme }) => theme.queries.mediumSmallAndDown}) {
    width: 90%;
  }
`;

export const FeaturedContentImage = styled.div`
  position: absolute;
  
  bottom: 0;
  left: 25%;

  @media (${({ theme }) => theme.queries.mediumLargeAndDown}) {
    width: 70%;
    left: 15%;
  }
`;

export const FeaturedImage = styled.img`
  width: 100%
`;

export const RentNowButton = styled.span`
  width: fit-content;
  padding: 15px 30px;
  background: #3563E9;
  border-radius: 4px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #FFFFFF;
  cursor: pointer;
  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
  }
`;


export const RentNowButton2 = styled.span`
  width: fit-content;
  padding: 15px 30px;
  background: #5CAFFC;
  border-radius: 4px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #FFFFFF;
  cursor: pointer;
  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
  }
`;