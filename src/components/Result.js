import React from "react";
import styled, {css} from 'styled-components';

const Result = styled.div`
  padding: 2rem 1rem;
  @media (min-width: 37.5rem){
    padding: 3rem;
  }
  @media (min-width: 62rem){
    padding: 5rem;
  }
  border-top: 1rem solid;
  ${props => props.edgeCase && css`border-color: #FA9507;`}
  ${props => props.likelyRefusal && css`border-color: #e61e17;`}
`;

export default Result;
