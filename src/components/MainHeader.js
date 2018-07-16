import React from "react";
import {IconPlus, IconSearch } from "../assets/Icons"
import styled from "styled-components"
import LogoImg from "../img/Logo.png"
import AvatarImg from "../img/Avatar.png"



const Header = styled.header`
  background-color: #00a1b5;
  color: #fff;
  > .pre-header{
    padding: 1rem 1rem 0;
    @media (min-width: 62rem){
      padding: 2rem 2rem 0; 
    }
  }
`

const HeaderLogo = styled.div`
  width: 5.625rem;
  height: 3.75rem;
  @media (min-width: 37.5rem){
    width: 7.5rem;
    height: 5rem;
  }
  > img{
    max-width: 100%;
    max-height: 100%:
  }
`

const Avatar = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  overflow: hidden;
  border-radius: 50%;
  > img{
    max-width: 100%;
    max-height: 100%:
  }
`

const ProfileNav = () => {
  return (
    <div className="profile-navigation">
      <ul>
        <li>
          <IconPlus></IconPlus>
        </li>
        <li>
          <IconSearch></IconSearch>
        </li>
        <li>
          <Avatar><img src={AvatarImg} alt=""/></Avatar>
        </li>
      </ul>
    </div>
  )
}

export function MainHeader() {
  return (
    <Header>
      <div className="pre-header">
        <HeaderLogo><img src={LogoImg} alt="Logo"/></HeaderLogo>
        <ProfileNav></ProfileNav>
      </div>
      <div className="container">
        <div className="page-title">Front Extension 42 Willow Way SE15</div>
        <ol className="breadcrumbs">
          <li>Project Details</li>
          <li className="is-active">Advice</li>
          <li>Next Step</li>
        </ol>
      </div>
    </Header>
  )
}
