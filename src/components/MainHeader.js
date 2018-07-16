import React from "react";
import {IconPlus, IconSearch } from "../assets/Icons"
import styled from "styled-components"
import LogoImg from "../img/Logo.png"
import AvatarImg from "../img/Avatar.png"


const HeaderLogo = styled.div`
  max-width: 7.5rem;
  max-height: 5rem;
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
    <header>
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
    </header>
  )
}
