import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from "react-loader-spinner"
import styled from 'styled-components';

const WrapLoad = styled.div`
    width: 100vw;
    display:flex;
    justify-content: center;
    margin: 1.2rem 0;
`;

export const LoaderElement = () => {
        return (
                <WrapLoad>
                    <Loader
                    type="Grid"
                    color="#81BD60"
                    height={80}
                    width={80}
                    timeout={3000} //3 secs
                    />
                </WrapLoad>);
}