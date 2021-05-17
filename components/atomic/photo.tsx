import styled from 'styled-components'
import {photoType} from './photo-type'

const ImgWrap = styled.li`
  height: 40vh;
  flex-grow: 1;
  @media (max-aspect-ratio: 1/1) {
    height: 30vh;
  }

  @media (max-height: 480px) {
    height: 80vh;
  }

  @media (max-aspect-ratio: 1/1) and (max-width: 480px) {
      height: auto;
      width: 100%;
  }
`;

const Image = styled.img`
  max-height: 100%;
  min-width: 100%;
  object-fit: cover;
  vertical-align: bottom;

  @media (max-aspect-ratio: 1/1) and (max-width: 480px) {
    width: 100%;
    max-height: 75vh;
    min-width: 0;
  }
`;

export const SinglePhoto = (prop:photoType) => {
    return(
        <ImgWrap>
            <a href={prop.webViewLink} target="popup" >
                <Image loading="lazy" key={prop.name} alt={prop.name} src={`https://drive.google.com/thumbnail?id=${prop.id}&sz=w500`}/>
            </a>
        </ImgWrap>
    )
}