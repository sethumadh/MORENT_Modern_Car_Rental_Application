import styled from "styled-components";

export const FooterWrapper = styled.footer`
  height: auto;
  width: 100%;
  padding: 1.1rem;
  background-color: var(--color-white);
  @media (min-width: 768px) {
    height: 44%;
    padding: 0rem;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 var(calc(--spacing-horizontal + 10px));
  height: 100%;
  width: 100%;
  /* justify-content: space-between; */
  @media (min-width: 640px) {
    padding-left: 2.9rem;
    padding-right: 2.9rem;
  }
  @media (min-width: 1024px) {
    /* padding-left: 2rem;
    padding-right: 2rem; */
  }
`;

export const Box = styled.div`
  /* grid-template-columns: repeat(1, minmax(0, 1fr)); */
  gap: 2rem;
  padding: 45px 0 20px;
  @media (min-width: 640px) {
    flex-direction: column;
  }
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
  @media (min-width: 1024px) {
    /* grid-template-columns: repeat(3, minmax(0, 1fr)); */
  }
`;

export const FooterLogoDiv = styled.div`
  @media (min-width: 640px) {
    width: 100%;
  }
  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const FooterLinkItems = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2rem;
  @media (min-width: 640px) {
    justify-items: flex-start;
    width: 100%;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (min-width: 768px) {
    justify-items: flex-end;
    width: 50%;
  }
  @media (min-width: 1024px) {
    grid-column: span 2 / span 2;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const FooterListTtem = styled.div`
  margin-right: 4px;
`;

export const SpanBlock = styled.span`
  display: block;
  height: 2.5rem;
  width: 8rem;
  border-radius: 0.5rem;
  --tw-bg-opacity: 1;
  background-color: rgba(229, 231, 235, var(--tw-bg-opacity));
`;

export const FooterContent = styled.div`
  margin-top: 1rem;
  margin-bottom: 3rem;
  padding-left: 2px;
  max-width: 20rem;
  font-size: 16px;
  line-height: 1.25rem;

  @media (min-width: 768px) {
    width: 80%;
    font-size: 0.875rem;
    line-height: 2;
  }
`;

export const LogoContainer = styled.div``;

export const FooterTitle = styled.p`
  font-weight: 500;
  font-size: 16px;
  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

export const FooterNav = styled.nav`
  font-size: 16px;
  line-height: 38px;
  font-weight: 400;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  --tw-space-y-reverse: 0;
  margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));
  --tw-text-opacity: 1;
  color: rgba(107, 114, 128, var(--tw-text-opacity));

  @media (min-width: 640px) {
  }
  @media (min-width: 1024px) {
    font-size: 14px;
  }
`;

export const FooterLink = styled.a`
  color: rgba(19, 19, 19, 0.6);
  /* margin-bottom: 20px;
  font-size: 18px; */
  text-decoration: none;

  &:hover {
    /* color: green; */
    opacity: 0.75;
    transition: 200ms ease-in;
  }
`;

export const NavIcon = styled.svg`
  cursor: pointer;
  margin: 0 5px;
  @media (max-width: 768px) {
    margin: 0 2px;
  }
`;

export const hr = styled.hr`
  border-top-color: #bbb;
  opacity: 0.5;
`;

export const FooterBottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  color: #131313;
  font-weight: 600;
  font-size: 14px;
  justify-content: space-between;
  padding: 45px 0 45px;
  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: middle;
    justify-content: space-between;
  }
  @media (min-width: 1024px) {
  }
`;

export const FooterBottomLinkDiv = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4rem;
  @media (min-width: 640px) {
  }
  @media (min-width: 1024px) {
  }
`;

export const AppLogo = styled.img`
  cursor: pointer;
  height: 30px;

  @media (${({ theme }) => theme.queries.smallMediumAndDown}) {
    height: 19px;
  }
`;