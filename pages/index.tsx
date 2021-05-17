import React from 'react'
import styled from 'styled-components';
import {Menu} from './../components/menu'
import {LoginScreen} from '../components/login-screen'
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

const Index = () => {

    const { user, error, isLoading } = useUser();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

    if (user) {
        return (
            <div>
                <Menu/>
                <Container className="flex-container">
                    <a href="/calendar"><IndexElement id="calendar"><P>Kalendář</P></IndexElement></a>
                    <a href="/gallery"><IndexElement id="galerie"><P>Galerie</P></IndexElement></a>
                </Container>
            </div>
        )
    }

    return <LoginScreen/>
    
}

export default Index
