import React from "react";

import styled from "styled-components";
import LogoImg from "../armory.webp";
import ArmorImgLink from "../armorsvg.png";
import WowtubeImgLink from "../wowtube.png";
import SupportImgLink from "../support.png";
import LoginImgLink from "../loginImg.png";

const Container = styled.div`
  @import url("http://fonts.cdnfonts.com/css/warcraft");
  font-family: warcraft;
  width: 100%;
  height: 10vh;

  background-image: linear-gradient(
    180deg,
    #658594 0%,
    rgba(12, 32, 72, 0.9) 100%
  );

  display: flex;
  justify-content: space-between;
  box-shadow: 0 2px 10px -2px rgba(0, 0, 0, 0.2);
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ArmorImg = styled.img`
  width: 30px;
  height: 30px;
`;

const WowtubeImg = styled.img`
  width: 30px;
  height: 30px;
`;

const SupportImg = styled.img`
  width: 30px;
  height: 30px;
`;

const LoginImg = styled.img`
  width: 30px;
  height: 30px;
`;

const Logo = styled.img`
  height: 80px;
  margin-left: 1rem;
`;

const Menu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12rem;
  list-style-type: none;

  transition: all 0.5s;
`;

const MenuItem = styled.li`
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.2s;
  border: none;
  margin-left: 1rem;

  &:hover {
    transform: scale(1.1);
  }
`;

const Login = styled.button`
  background-color: transparent;
  border: none;
  justify-content: center;
  align-self: center;
  margin-right: 2rem;
  font-size: 2.5rem;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.2);
  }
`;

export default function Navbar() {
  return (
    <Container>
      <Logo src={LogoImg}></Logo>
      <Menu>
        <MenuItem>
          <IconWrapper>
            <ArmorImg src={ArmorImgLink}></ArmorImg>
          </IconWrapper>
          <span>Armory</span>
        </MenuItem>
        <MenuItem>
          <IconWrapper>
            <WowtubeImg src={WowtubeImgLink}></WowtubeImg>
          </IconWrapper>

          <span>WoWTube</span>
        </MenuItem>
        <MenuItem>
          <IconWrapper>
            <SupportImg src={SupportImgLink}></SupportImg>
          </IconWrapper>
          <span>Forums</span>
        </MenuItem>
      </Menu>
      <Login>
        <IconWrapper>
          <LoginImg src={LoginImgLink}></LoginImg>
        </IconWrapper>
        <span>Login</span>
      </Login>
    </Container>
  );
}
