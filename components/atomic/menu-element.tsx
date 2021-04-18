import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled, { css } from 'styled-components';
import { useRouter } from 'next/router'

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
  cursor: pointer;
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
  const router = useRouter()

    return(
        <Btn Important={props.Important} onClick={()=>router.push(props.AnchorTarget)}><i className={props.ClassOfIcon}></i><a>{props.DisplayText}</a></Btn>
    );
}