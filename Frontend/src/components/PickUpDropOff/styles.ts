import styled from "styled-components";

export const PickUpDropOffWrapper = styled.section`
  width: 100%;
  margin-top: var(--spacing-vertical);
  margin-bottom: var(--spacing-vertical);
  margin: 0 auto;
  padding: 0 1.3rem;
`;

export const PickUpDropContainer = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  margin: 0 -0.25rem;
  gap: 1rem;
  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
    padding-left: 2.3rem;
    padding-right: 2.3rem;
  }
  @media (min-width: 1024px) {
  }
`;
