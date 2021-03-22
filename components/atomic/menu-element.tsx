import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled, { css } from 'styled-components';

type MenuAnchor = {
    DisplayText: string,
    AnchorTarget: string,
    Important?: boolean,
    ClassOfIcon?: string
}

const Btn = styled.div<Pick<MenuAnchor,"Important">>`

  font-size: 1.3em;
  font-family: Roboto, sans-serif;
  margin: 0 1.5em 0 0;

  font-weight: 300;


  a{
    text-decoration: none;
    color: white;
  }


  ${props => props.Important && css`
  
    font-weight: 600;
    
  `}
`;


export function MenuElement(props : MenuAnchor){
    return(
        <Btn Important={props.Important}><i className={props.ClassOfIcon}></i><a href={props.AnchorTarget}>{props.DisplayText}</a></Btn>
    );
}