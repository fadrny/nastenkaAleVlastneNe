import * as React from 'react';

type Crumb = {
    FolderName: string,
    ID: string
}


export function MenuElement(props: Array<Crumb>){

    return(
        <button Important={props.Important}><i className={props.ClassOfIcon}></i><a href={props.AnchorTarget}>{props.DisplayText}</a></button>
    );
}