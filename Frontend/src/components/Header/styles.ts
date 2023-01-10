import styled from "styled-components";

export const HeaderWrapper = styled.header`
  --padding-top-bottom: 4.169%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 8.62%;
  max-height: 124px;

  padding: 0 var(--spacing-horizontal);
  background-color: var(--color-white);

  h1 {
    font-size: 2rem;
    font-weight: var(--font-weight-heavy);
    line-height: 120%;
    letter-spacing: 1px;
    color: var(--color-blue-primary);
  }

  @media (${({ theme }) => theme.queries.smallMediumAndDown}) {
    padding: 0 var(--small-spacing-horizontal);
  }
`;

export const HeaderFeaturesContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  padding: var(--padding-top-bottom) 0;
`;

export const Avatar = styled.img`
  cursor: pointer;
  border-radius: 50%;
  width: 44px;
  height: 44px;
`;

export const Icon = styled.img`
  cursor: pointer;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  @media (${({ theme }) => theme.queries.smallMediumAndDown}) {
    display: none;
  }
`;
export const AppLogo = styled.img`
  cursor: pointer;
  height: 30px;

  @media (${({ theme }) => theme.queries.smallMediumAndDown}) {
    height: 19px;
  }
`;
