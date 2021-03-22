import React, { useState } from 'react'
import styled from 'styled-components';
import { useFoldersQuery } from '../lib/folder.graphql';

import {Slozka} from './atomic/slozka';

const FldrArr = styled.div`

    display: inline-flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 1.5em;

`;

const Btn = styled.button`
    background: none;
	color: inherit;
	border: none;
	padding: 0;
	cursor: pointer;
	outline: inherit;
`;


type FetchedFolders = {
    id: string,
    name: string,
    webViewLink?: string
}

export function FolderArray(){
    const [currentFolder, setCurrentFolder] = React.useState("");
    const [folders, setFolders] = React.useState();
    const { data, loading, error } = useFoldersQuery();

    React.useEffect(() => {
        if(loading){
            console.log("nacitani");
        }
        else if(error){
            console.log(error);
        }
        else {
            console.log(data);
            getFolders();
        }
    }, [data, currentFolder])

    const getFolders = () =>{
        if(currentFolder === ""){
            useFolders(data?.folders as Array<FetchedFolders>)
        }
        else{

        }
    }

    const useFolders = (arr : Array<FetchedFolders>) => {
        const a =(arr.map((x) => {
            return <Btn onClick={()=>{setCurrentFolder(x.id)}}><Slozka DisplayText={x.name} FolderID={x.id}/></Btn>
        }));
        setFolders(a);
    }

    return(
        <FldrArr>
            {folders}
        </FldrArr>
    );
}
  