import * as React from 'react';
import styled, { css } from 'styled-components';


import {MenuElement} from './atomic/menu-element'


const StyledMenu = styled.div`
    width:100%;
    background-color: #81BD60;
    display: inline-flex;
    justify-content: space-between;
    height: 4em;
    align-items: center;
    div{
        display: inline-flex;
    }
`;

const Logo = styled.h3`
  font-size: 1.5em;
  font-family: Roboto, sans-serif;
  margin: 0 0 0 1.3em;
  color: white;

  font-weight: 600;
  justify-content: flex-start;
`;

export function Menu(){


    return(
        <div>
            <StyledMenu>
                <Logo>NÁSTĚNKA</Logo>
                <div>
                    <MenuElement DisplayText="domů" AnchorTarget="/" />
                    <MenuElement DisplayText="galerie" AnchorTarget="/gallery" />
                    <MenuElement DisplayText="odhlásit se" AnchorTarget="api/auth/logout" Important/>
                </div>
            </StyledMenu>
        </div>
    )
}
