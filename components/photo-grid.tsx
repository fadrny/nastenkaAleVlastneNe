import React, { Fragment, useState } from 'react'
import { Router, useRouter } from 'next/router'
import styled from 'styled-components';
import {LoaderElement} from './atomic/loading-element';
import { usePhotosQuery } from '../__generated__/lib/photo.graphql';

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
type folder = {
    idnt: string
}

export function PhotoGrid(prop : folder){
    const [currentFolder, setCurrentFolder] = React.useState(prop.idnt);
    const [folders, setFolders] = React.useState(<LoaderElement/>);
    const { data, loading, error } = usePhotosQuery({variables:{folder:currentFolder}});

    const router = useRouter()

    const fldr = router.query.folder || [];

    React.useEffect(() => {
        if(loading){
            console.log(data);
        }
        else if(error){
            setFolders(<h1>error</h1>);
            console.log(error);
        }
        else {
            setFolders(<h1>nacteno</h1>);
            console.log(data);
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