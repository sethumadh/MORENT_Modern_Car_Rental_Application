import styled from "styled-components"

import { VoidFunction } from "../../types";

const Icon = styled.div`
  cursor: pointer;
`;

type Props = { handleClick?: VoidFunction }

const DownArrow = ({ handleClick }: Props) => {
    return (
     <Icon onClick={handleClick}>
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" pointerEvents='none'>
          <path pointerEvents="auto" d="M7.00013 9.79969C6.5918 9.79969 6.18347 9.64219 5.8743 9.33303L2.07097 5.52969C1.9018 5.36053 1.9018 5.08053 2.07097 4.91136C2.24013 4.74219 2.52013 4.74219 2.6893 4.91136L6.49263 8.71469C6.77263 8.99469 7.22763 8.99469 7.50763 8.71469L11.311 4.91136C11.4801 4.74219 11.7601 4.74219 11.9293 4.91136C12.0985 5.08053 12.0985 5.36053 11.9293 5.52969L8.12597 9.33303C7.8168 9.64219 7.40847 9.79969 7.00013 9.79969Z" fill="#1A202C" stroke="#1A202C" stroke-width="0.5" />
      </svg>
     </Icon>
    )
}

export default DownArrow