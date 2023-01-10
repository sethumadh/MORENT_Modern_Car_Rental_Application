import styled from 'styled-components';

const Icon = styled.svg`
  cursor: pointer;

  @media (${({ theme }) => theme.queries.smallMediumAndDown}) {
    display: none;
  }
`;

const LikeIcon = () => {
  return (
    <Icon width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" >
      <path d="M26.44 13.1C24.63 13.1 23.01 13.98 22 15.33C20.99 13.98 19.37 13.1 17.56 13.1C14.49 13.1 12 15.6 12 18.69C12 19.88 12.19 20.98 12.52 22C14.1 27 18.97 29.99 21.38 30.81C21.72 30.93 22.28 30.93 22.62 30.81C25.03 29.99 29.9 27 31.48 22C31.81 20.98 32 19.88 32 18.69C32 15.6 29.51 13.1 26.44 13.1Z" fill="#3D5278" />
        <rect
          opacity="0.8"
          x="0.5"
          y="0.5"
          width="43"
          height="43"
          rx="21.5"
          stroke="#C3D4E9"
          stroke-opacity="0.4"
        />
    </Icon>
  )
}
export default LikeIcon;