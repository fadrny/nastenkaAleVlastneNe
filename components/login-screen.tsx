import React from 'react'
import styled from 'styled-components';

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


export function LoginScreen(){
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
    )
}