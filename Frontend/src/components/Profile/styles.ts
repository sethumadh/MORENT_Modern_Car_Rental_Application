import styled from "styled-components";

export const ProfileSection = styled.section`
  height: auto;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  max-width: 1536px;
    padding-bottom: 20px;
  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
    margin: 40px 45px;
    height: 300px;
  }
  @media (min-width: 1024px) {
  }
`;
export const DivCover = styled.div`
  height: inherit;
  width: 100%;
  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
  height: 200px;
  }
  @media (min-width: 1024px) {
  }
`;
export const MoreDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 2rem;
  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
  }
`;
export const MoreBtn = styled.div`
  justify-content: center;
  align-items: center;
  padding: 14px 25px;
  background: #3563E9;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  color: white;
  cursor: pointer;
  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
  }
`;
export const Cover = styled.img`
  width: 100%;
  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
  }
`;
export const ProfilePic = styled.img`
  width: 80px;
  height: 80px;
  position: absolute;
  top: 20px;
  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
    position: absolute;
    left: 5rem;
    bottom: 2rem;
    top: auto;
    bottom: 3rem;
    width: 120px;
    height: 120px;
  }
  @media (min-width: 1024px) {
  }
`;
export const Button = styled.div`
  cursor: pointer;
  background: #ffffff;
  color: red;
  opacity: 0.6;
  border-radius: 30px;
  position: absolute;
  right: 10px;
  top: 12px;
  padding:4px 10px;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
  width: 105px;
  height: 40px;
  opacity: 0.4;
  right: 50px;
  font-size: 14px;
    top: 8rem;
  }
  @media (min-width: 1024px) {
  }
`;
export const ProfileDetailsDiv = styled.div`
  display: flex;
  margin: auto;
  justify-content: space-between;
  width: 90%;
  position: relative;
  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
  top: 1rem;
  width: 100%;
  }
  @media (min-width: 1024px) {
  }
`;
export const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 14.5rem;
  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
  margin-left: 14rem;
  }
  @media (min-width: 1024px) {
  }
`;
export const ProfileName = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: #1A202C;
  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
  }
`;
export const ProfileRole = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: #1A202C;
  opacity: 0.5;
  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
  }
`;
export const ProfileEditBtn = styled.div`
  display:none ;
  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
  display: flex;
  padding: 0px 20px;
  margin-right:3rem ;
  background: #3563e9;
  border-radius: 10px;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  align-items: center;
  text-align: center;
  color: #ffffff;
  }
  @media (min-width: 1024px) {
  }
`;
export const ProfileEditBtnIcon = styled.span`
  position: absolute;
  right: 1rem;
  background: #3563e936;
  border-radius: 50%;
  width: 22px;
  height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
  display: none;
  }
  @media (min-width: 1024px) {
  }
`;
