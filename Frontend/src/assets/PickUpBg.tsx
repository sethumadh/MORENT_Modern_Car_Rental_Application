import styled from 'styled-components';

const CardBackground = styled.svg`
  position: absolute;
  z-index: 15;
  bottom: 0;
  top: 0;

  @media (max-width: 1440px) {
    width: 100%;
    height: 100%;
  }
`;

const PickUpBg = () => {
    return (
        <CardBackground viewBox="0 0 628 360" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="230" cy="305" r="25" stroke="white" stroke-opacity="0.06" stroke-width="10" />
            <circle cx="230" cy="305" r="75" stroke="white" stroke-opacity="0.06" stroke-width="20" />
            <circle cx="230.5" cy="304.5" r="137.5" stroke="white" stroke-opacity="0.06" stroke-width="20" />
            <circle cx="230" cy="305" r="200" stroke="white" stroke-opacity="0.06" stroke-width="20" />
            <circle cx="230.5" cy="304.5" r="262.5" stroke="white" stroke-opacity="0.06" stroke-width="20" />
            <circle cx="230" cy="305" r="325" stroke="white" stroke-opacity="0.06" stroke-width="20" />
            <circle cx="230.5" cy="304.5" r="387.5" stroke="white" stroke-opacity="0.06" stroke-width="20" />
        </CardBackground>
    )
}

export default PickUpBg