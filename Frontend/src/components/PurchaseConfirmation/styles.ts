import Modal from 'styled-react-modal';
import styled from 'styled-components';

export const StyledModal = Modal.styled`
  position: absolute;
  inset: 0;
  margin: auto;
  width: 40%;
  aspect-ratio : 1 / 1;
  background: white;

  display: flex;
  align-items: center;
  box-shadow: 0px 0px 41px 23px rgba(0,0,0,0.75);
  flex-direction: column;

  @media(${props => props.theme.queries.mediumLargeAndDown}) {
    width: 55%;
    aspect-ratio : 1 / 1;
  }

  @media(${props => props.theme.queries.mediumAndDown}) {
    width: 70%;
    aspect-ratio : 1 / 1;
  }

  @media(${props => props.theme.queries.smallAndDown}) {
    width: 90%;
    height: 60%;
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 100%;
  padding: 20px;
`;
  
export const Confirmation = styled.h1`
  align-self: center;

  font-size: clamp(
    2rem,
    2vw + 1rem,
    3rem
  );
  color: var(--color-blue-primary);
`

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 40px;

  padding: 20px;
`;

type ButtonColor = { proceed: boolean };

export const Button = styled.button`
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 4px;

  color: var(--color-white);
  background-color: ${(props: ButtonColor) => props.proceed ? `var(--color-confirm)` : `var(--color-cancel)`};
  cursor: pointer;
`;