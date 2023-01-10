import styled from 'styled-components';

type Open = { open?: boolean};

export const DropDownWrapper = styled.div<Open>`
  position: relative;
  
  display: ${props => props.open ? `revert` : `none`};

  width: 100%;
  height: 100%;
  
  z-index: 10;
`;

export const DropDownList = styled.ul`
  position: absolute;
  top: 0%;
   
  max-height: 300px;
  width: 100%;
  
  overflow: auto;
  background-color: white;

  list-style: none;
`;

export const Item = styled.li`
  padding: 8px 16px;
  cursor: pointer;

  p {
    font-size: 1.25rem;
  }

  @media(pointer: fine) {
    &:hover {
      background-color: hsl(216deg 27% 66% / 0.25);
    }
  }
`;