import styled from "styled-components";

export const FeaturedHorizontal = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  flex-wrap: nowrap;
  overflow-x: auto;

  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const FeaturedCardsWrapper = styled.div`
  --sides-padding: calc(
    var(--spacing-horizontal) - var(--border-radius-general)
  );
  --small-sides-padding: calc(
    var(--small-spacing-horizontal) - var(--border-radius-general)
  );

  display: grid;
  position: relative;
  width: 100%;
  z-index: 5;
  grid-template-columns: repeat(2, 1fr);
  place-content: center;
  gap: 0 var(--spacing-veritical);
  padding: var(--spacing-veritical) var(--sides-padding);

  @media (${({ theme }) => theme.queries.smallMediumAndDown}) {
    grid-template-columns: 1fr;

    padding: var(--small-spacing-veritical) var(--small-sides-padding);
  }
`;



export const SearchIconElement = styled.img` 
  width:24px; height:24px;
  position: absolute;
  left: 1rem;
  bottom: 12px;
  @media (${({ theme }) => theme.queries.smallMediumAndDown}) {

  }
`;

export const SearchSettings = styled.div`
  display: none;

  @media (${({ theme }) => theme.queries.smallMediumAndDown}) {
    display: flex;
    max-height: 64px;
    height: 100%;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;
  }
`;

export const SearchSettingsContainer = styled.div`
  position: relative;
  display: flex;
  flex: 0.25;
`;

export const Input = styled.input`
  width: 100%;
  height: 48px;
  border: 1px solid rgba(195, 212, 233, 0.4);
  border-radius: 10px;
  display: flex;
  min-width: 270px;
  padding-left: 3rem;
  ::placeholder {
    color: #3d5278;
  }
`;
