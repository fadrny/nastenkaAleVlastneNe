import React, { Fragment } from 'react';
import styled from 'styled-components';
import {LoaderElement} from './atomic/loading-element';
import { usePhotosQuery } from '../__generated__/lib/photo.graphql';
import {photoType} from './atomic/photo-type';
import {SinglePhoto} from './atomic/photo'

const ImgArr = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0 3rem;

    @media (max-aspect-ratio: 1/1) and (max-width: 480px) {
        flex-direction: row;
    }
`;

const LastChild = styled.li`
    flex-grow: 10;
`;

type folder = {
    idnt: string
}

export function PhotoGrid(prop: folder){
    const [currentFolder] = React.useState(prop.idnt);
    const [photos, setPhotos] = React.useState(<LoaderElement/>);
    const { data, loading, error } = usePhotosQuery({variables:{folder:currentFolder}});


    //const fldr = router.query.folder || [];

    React.useEffect(() => {
        if(loading){setPhotos(<LoaderElement/>)}
        if(error){
            setPhotos(<h1>error</h1>);
            console.log(error);
        }
        else {
            const a = (data?.photos.map((x: photoType) => {
                return <SinglePhoto key="kliczek" {...x}/>
            }));
            setPhotos(<ImgArr>{a}<LastChild/></ImgArr>);
        }
    }, [data, currentFolder])

    return(
        <Fragment>
                {photos}
        </Fragment>
    );
}