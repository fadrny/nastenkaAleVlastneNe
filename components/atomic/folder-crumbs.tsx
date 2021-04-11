import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled, { css } from 'styled-components';

type Crumb = {
    FolderName: string,
    ID: string
}


export function MenuElement(props : Array<Crumb>){

    const gen  = props.map(element => {
        return <p><a >{element.FolderName}</a>	&gt;&gt; </p>
    });

    return(
        <Btn Important={props.Important}><i className={props.ClassOfIcon}></i><a href={props.AnchorTarget}>{props.DisplayText}</a></Btn>
    );
}