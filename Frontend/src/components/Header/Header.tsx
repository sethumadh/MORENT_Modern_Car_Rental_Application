import { FC, useContext } from "react"

import { Link } from "react-router-dom";

import { HeaderWrapper, HeaderFeaturesContainer, Icon, AppLogo, Avatar } from "./styles";
import LogoutIconButton from "../../assets/LogoutIconButton";
import { NavIcon } from "../../assets"
import { Favorite, Logo, Notification, Settings } from "../../assets/icon";
import MainSearchBar from "../MainSearchBar"
import { UserContextObj } from "../../contexts/UserContext";
import GoogleIconBtn from "../../assets/GoogleIconBtn";

const Header: FC = () => {
  const ServerLink = "http://localhost:9090";
  const userObject = useContext(UserContextObj);
  // console.log("Data:", userObject);

  const login = () => {
    // The link below will change to the deployed server endpoint in the future, currently it is using the server running on localhost
    window.open(`${ServerLink}/auth/google/login`, "_self")
  }

  const logout = () => {
    window.open(`${ServerLink}/auth/google/logout`, "_self")
  }

  return (
    <HeaderWrapper>
      <Link to="/">
        <AppLogo src={Logo} />
      </Link>
      <HeaderFeaturesContainer>
        <MainSearchBar />
        <Icon src={Favorite} />
        {userObject?.googleId ? (
          <Link to="/profile">
            <Avatar src={userObject?.image} width={43.99} height={43.99} />
          </Link>
        ) : (
          <GoogleIconBtn onClick={login} />
        )}
        {userObject?.googleId && <LogoutIconButton onClick={logout} />}
      </HeaderFeaturesContainer>
    </HeaderWrapper>
  );
};

export default Header;
