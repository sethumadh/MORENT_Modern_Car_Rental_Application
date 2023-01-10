import styled from "styled-components";

export const PopularCarSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
    margin: 0 40px;
  }
  @media (min-width: 1024px) {
  }
`;

export const PopularCarDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 1.3rem;
  padding-right: 1.3rem;
  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
    padding: 3rem 20px 20px;
  }
  @media (min-width: 1024px) {
  }
`;

export const RecommendedCarDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 1.3rem;
  padding-right: 1.3rem;
  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
    padding: 2rem 3.5rem 0px;
  }
  @media (min-width: 1024px) {
  }
`;

export const PopularCarHorizontal = styled.section`
  display: flex;
  flex-direction: row;
  position: relative;
  max-width: 1416px;
  /* max-width:1536px; */
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const PopularCarCardsWrapper = styled.div`
  display: grid;
  position: relative;
  z-index: 5;
  flex: 0 0 auto;
  min-width: 51rem;
  width: 100%;
  height: fit-content;
  grid-template-columns: repeat(2, 1fr);
  place-content: center;
  gap: 0 var(--spacing-veritical);
  padding: 2.25% 3.5%;
`;

export const PopularCarTitle = styled.div`
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  color: #90a3bf;
  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
    font-size: 16px;
  }
  @media (min-width: 1024px) {
  }
`;

export const PopularCarViewAll = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  display: flex;
  align-items: center;
  text-align: right;
  color: #3563e9;
  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
    font-size: 14px;
  }
  @media (min-width: 1024px) {
  }
`;
export const CarsListWrapper = styled.section`
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 3rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  @media (min-width: 1024px) {
  }
`;

export const CarsListItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -0.25rem;
  margin-right: -0.25rem;
  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }
  @media (min-width: 1024px) {
    /* margin-left: -1rem;
    margin-right: -1rem; */
  }
`;

// export const CarsListWrapper = styled.section`
//   display: grid;
//   gap: 30px;
//   place-content: center;
//     grid-template-columns: repeat(1,1fr);
//   /* grid-template-columns: repeat(auto-fill, 450px); */
//   width: 100%;
//   padding: var(--spacing-veritical) 0;
//   @media (min-width: 640px) {
//   }
//   @media (min-width: 768px) {
//     grid-template-columns: repeat(3,1fr);
//   }
//   @media (min-width: 1024px) {
//     grid-template-columns: repeat(4,1fr);
//   }
// `;
