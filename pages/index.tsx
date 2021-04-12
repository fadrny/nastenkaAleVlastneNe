import React from 'react'
import styled from 'styled-components';
import {Menu} from './../components/menu'
import { useUser } from '@auth0/nextjs-auth0';


const IndexElement = styled.div`
    padding: 5px;
    width: 200px;
    height: 150px;
    margin: 1em;
    line-height: 150px;
    font-family: Roboto, sans-serif;
    font-size: 1.5em;
    text-align: center;
    border-radius: 12px;
    transform-origin: center center;
    transition: transform ease-in-out 0.3s;
    background-color: #81BD60;
    display: block;
`;

const Container = styled.div`
    padding: 0;
    margin: 5em 0 0;
    list-style: none;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    justify-content: center;
    align-content: center;
`;

const P = styled.p`
    line-height: 150px;
    font-family: 'skautbold', Roboto, sans-serif;
    font-size: 1.5em;
    text-align: center;
    color: #FFFFFF;

    display: inline-block;
    vertical-align: middle;
    line-height: normal;
`;

const Wrap = styled.div`
    width: 360px;
    padding: 8% 0 0;
    margin: auto;
    `;

const Bgr = styled.div`
    background: linear-gradient(to left, #76b852, #8DC26F);
    height: 100vh;
    `;

const Content = styled.div`
        position: relative;
        z-index: 1;
        background: #FFFFFF;
        max-width: 360px;
        margin: 0 auto 100px;
        padding: 25px 45px 45px;
        text-align: center;
        box-shadow: 0 0 20px 0 rgb(0 0 0 / 20%), 0 5px 5px 0 rgb(0 0 0 / 24%);

        h1{
            color: #78a160;
        }

        p{
            font-family: "Roboto", sans-serif;
            color: #7e7e7e;
        }

        button{
            font-family: "Roboto", sans-serif;
            text-transform: uppercase;
            outline: 0;
            background: #4CAF50;
            width: 100%;
            border: 0;
            padding: 15px;
            color: #FFFFFF;
            font-size: 14px;
            -webkit-transition: all 0.3 ease;
            transition: all 0.3 ease;
            cursor: pointer;
        }

    `;

const Index = () => {

    const { user, error, isLoading } = useUser();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

    if (user) {
        return (
            <div>
                <Menu/>
                <Container className="flex-container">
                    <a href="#"><IndexElement id="calendar"><P>Kalendář</P></IndexElement></a>
                    <a href="/gallery"><IndexElement id="galerie"><P>Galerie</P></IndexElement></a>
                    <a href="#"><IndexElement id="kontakt"><P>Kontakt</P></IndexElement></a>
                </Container>
            </div>
        )
    }

    return(
        <Bgr>
            <Wrap>
                <Content>
                    <h1>NÁSTĚNKA</h1>
                    <br></br>
                    <p>
                        Vítej v systému Nástěnka,
                        pro pokračování do uzavřené
                        části webu je nutné se nejprve
                        přihlásit.
                    </p>
                    <br></br>
                    <a href="/api/auth/login">
                        <button>přihlásit se</button>
                    </a>
                </Content>
            </Wrap>
        </Bgr>
    );
}

export default Index
