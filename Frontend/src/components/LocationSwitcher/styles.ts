import styled from "styled-components";

export const LocationSwitcherWrapper = styled.div`
    display: flex;
    grid-area: updown-button;
    width: clamp(40px, 60px, 80px);
    height: clamp(40px, 60px, 80px);
    background-color: var(--color-blue-primary);
    border-radius: var(--border-radius-general);
    align-self: center;
    justify-self: center;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    @media (min-width: 768px) {
    position: relative;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
  }

    cursor: pointer;
`;
