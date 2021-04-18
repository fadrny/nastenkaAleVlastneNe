import { emitKeypressEvents } from 'node:readline';
import React, { Fragment, useState } from 'react'
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
    webViewLink?: string,
    prevState: null
}

export function FolderArray(){
    const [currentFolder, setCurrentFolder] = React.useState("");
    const [folders, setFolders] = React.useState();
    const { data, loading, error } = useFoldersQuery({variables:{id:currentFolder}});

    React.useEffect(() => {
        if(loading){
            setFolders(<Fragment/>);
            console.log(data);
        }
        else if(error){
            console.log(error);
        }
        else {
            console.log(data);
            const a = (data?.folders.map((x) => {
                return <Btn 
                        onClick={()=>{location.assign("gallery/" + x.id)}}>
                            <Slozka DisplayText={x.name} key={x.id} FolderID={x.id}/>
                        </Btn>
            }));
            setFolders(a);

        }
    }, [data, currentFolder])

    return(
        <Fragment>
            <FldrArr>
                {folders}
            </FldrArr>
        </Fragment>
    );
}
  