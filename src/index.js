import React from "react";
import { render } from "react-dom";
import "./styles.css";

import {MainHeader} from "./components/MainHeader";
import {Content} from "./components/Content";

import { IconPlus } from "./assets/Icons"

import styled, {css} from 'styled-components';
import { Input, Checkbox, TextArea, Dropdown } from 'semantic-ui-react'

const theme = {
  primary: "#00a1b5",
  accent1: "#21BA45",
  accent2: "#FA9507",
  accent3: "#E61E17",
  black: "#242424",
  inputBase: `
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-family: inherit;
    padding: 0.438rem 0.5rem;
    border: 0;
    width: 100%;
    border: 1px solid transparent;
    transition: border-color 0.3s ease-out;
    outline: none;
  `
}

const TextInput = styled(Input)`
  margin-bottom: 1rem;
  >.ui.label{
    font-size: 0.75rem;
    color: #242424;
    opacity: 0.5;
    margin-bottom: 0.313rem;
  }
  > input {
    max-width: 18.75rem;
    ${theme.inputBase}
  }
    > input:hover{
      border-color: #C9C9C9;
      transition-duration: 0.15s;
    }
    > input:focus{
      border-color: ${theme.primary};
    }
    ${props => props.icon && css`
      position: relative;
      svg{
        height: 1.5rem;
        width: 1.5rem;
        position absolute;
        left: 0.5rem;
        bottom: 0.438rem;
        color: #C9C9C9;
        transition: color 0.3s ease-out;
      }
      > input:focus ~ svg{
        color: ${theme.primary};
      }
      > input {
        padding-left: 2.5rem;
      }
    `}
    ${props => props.invalid && css`
      > input {
        border-color: ${theme.accent3} !important;
      }
    `}
  `

const TextAreaInput = styled(TextArea)`
  resize: vertical;
  font-family: inherit;
  font-size: 0.875rem;
  border: 1px solid transparent;
  width: 100%;
  max-width: 24rem;
  ${theme.inputBase}
  :hover{
    border-color: #C9C9C9;
    transition-duration: 0.15s;
  }
  :focus{
    border-color: ${theme.primary};
  }
  ${props => props.invalid && css`
    > input {
      border-color: ${theme.accent3} !important;
    }
  `}
`;


const CheckboxInput = styled(Checkbox)`
  position: relative;
  padding-bottom: 0.5rem;
  > input{
    position: absolute;
    opacity: 0;
    left: -10000rem;
  }
  > label{
    cursor: pointer;
    display: block;
    line-height: 1.5rem;
    padding-left: 2rem;
    outline: none !important;
  }
  > label::before{
    content: "";
    height: 1.25rem;
    position: absolute;
    width: 1.25rem;
    left: 0.125rem;
    top: 0.125rem;
    border-radius: 0.125rem;
    background-color: #C9C9C9;
    cursor: pointer;
    display: block;
    transition: background-color 0.25s ease-out;
    ${props => props.radio && css`
      box-sizing: border-box;
      background-color: transparent;
      border-radius: 50%;
      border: 2px solid ${theme.primary};
    `}
  }
  > label::after{
    content: "";
    height: 1rem;
    position: absolute;
    width: 1rem;
    left: 0.25rem;
    top: 0.25rem;
    cursor: pointer;
    display: block;
    background-color: #ffffff;
    transition: transform 0.25s ease-out;
    ${props => props.radio && css`
      box-sizing: border-box;
      background-color: ${theme.primary};
      border-radius: 50%;
      transform: scale(0);
    `}
  }
  > input:focus + label::before{
    outline: 2px solid #0091FF;
  }
  > label:hover::before {
    outline: none !important;
  }
  > label:hover::before, > label:focus::before{
    ${props => !props.radio && css`
      background-color: ${theme.black};
    `}
    ${props => !props.radio && css`
      border-color: ${theme.black};
    `}
  }
  &&.checked > label::after{
    transform: ${props => props.radio ? 'scale(0.5)' : 'scale(0.375, 0.125) rotate(180deg)'};
    transition-timing-function: ease-in;
  }
  &&.checked > label::before{
    ${props => !props.radio && css`
      background-color: ${theme.primary};
    `}
    ${props => !props.radio && css`
      border-color: ${theme.primary};
    `}
  }
`


const friendOptions = [
  {
    text: 'Eager Beaver',
    value: 'Eager Beaver',
  },
  {
    text: 'Jenny Hess',
    value: 'Jenny Hess',
  },
  {
    text: 'Miss Ferdinand',
    value: 'Miss Ferdinand',
  },
  {
    text: 'Has to be',
    value: 'Has to be',
  }
]

const DropdownBox = styled(Dropdown)`
  position: relative;
  outline: none !important;
  > .text{
    ${theme.inputBase};
    background-color: #fff;
    padding-right: 2.5em;
  }
  ::after{
    content: "";
    border-top: 0.35rem solid ${theme.black};
    border-left: 0.35rem solid transparent;
    border-right: 0.35rem solid transparent;
    position: absolute;
    right: 0.85rem;
    top: 1rem;
  }
  > .text.default{
    color: #C9C9C9;
  }
  > .menu{
    position: absolute;
    opacity: 0;
    visibility: hidden;
    transition: transform 0.3s ease-in-out, opacity 0.3s ease;
    transform: translateY(-2rem);
    background-color: #ffffff;
    width: 100%;
    z-index: 100;
    padding: 0.25rem;
  }
  > .menu .item{
    ${theme.inputBase};
    cursor: pointer;
  }
  > .menu .item:hover, .menu .item.selected{
    background-color: #F7F7F7;
  }
  > .menu.visible{
    opacity: 1;
    transform: none;
    visibility: visible;
  }
`


function App() {
   return (
     <div className="App">
       <div className="style-guide">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3 className="subheader"><strong>Text fields</strong></h3>
              <TextInput type="text" placeholder="Placeholder..." />
              <TextInput type="text" icon={IconPlus} placeholder="Placeholder with icon..." />
              <TextInput type="text" placeholder="Placeholder..." invalid value="Invalid input" />
            </div>
            <div className="col-md-6">
              <h3 className="subheader"><strong>With Labels</strong></h3>
              <TextInput label='Field Label' type="text" placeholder="Placeholder..." />
              <TextInput label='Field Label' type="text" placeholder="Placeholder..." invalid />
              <TextAreaInput placeholder="Text Area"/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <h3 className="subheader"><strong>Form Inputs</strong></h3>
              <CheckboxInput label="Checkbox"/>
              <CheckboxInput label="Radio" radio/>
              <h3 className="subheader"><strong>Drop Down Fields</strong></h3>
              <DropdownBox placeholder='Select Friend' fluid selection options={friendOptions} />
            </div>
          </div>
        </div>
       </div>
      <div className="wrapper">
        <MainHeader></MainHeader>
        <Content></Content>
        <footer>
          Powered by Plan&times;beta
        </footer>
      </div>
     </div>
   );
}

render(<App />, document.getElementById("root"));
