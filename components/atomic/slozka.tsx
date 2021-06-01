import * as React from 'react';
import styled from 'styled-components';

/*
import Shape1 from '../../assests/13.svg';
import Shape2 from '../../assests/52.svg';
import Shape3 from '../../assests/53.svg';
import Shape4 from '../../assests/54.svg';
import Shape5 from '../../assests/61.svg';
*/

type FolderType = {
    DisplayText: string,
    FolderID: string,
    Shape?: number,
    Image?: string
}

const Fldr = styled.div`
    height: 2.5em;
    display: flex;
    font-family: Roboto, sans-serif;
    font-weight: 500;
    font-size:1.3em;
    place-items:center;
    margin: 0.5em;
    padding: 0 1em;
    border: 3px solid #81BD60;
    min-width:3em;
    max-width:12em;
    a{
        color: #525252;
        text-decoration: none;
        margin: auto
    }
`;

export function Slozka(props: FolderType){

    return(
        <Fldr><a href='#'>{props.DisplayText}</a></Fldr>
    );
}