import React from 'react'
import {Menu} from '../components/menu'
import {FolderArray} from '../components/mainFolders'
import { useUser } from '@auth0/nextjs-auth0';
import {LoginScreen} from '../components/login-screen'

export default function Gallery() {

    const { user, error, isLoading } = useUser();
    if (isLoading) return <div>Loading...</div>;
    else if (error) return <div>{error.message}</div>;


    else if (user) {
        return (
            <div>
                <Menu/>
                <FolderArray idnt=""/>
            </div>
        )
    }

    return <LoginScreen/>   
}