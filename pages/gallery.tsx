import React from 'react'
import {Menu} from '../components/menu'
import {FolderArray} from '../components/mainFolders'
import { useUser } from '@auth0/nextjs-auth0';

export default function Gallery() {

    const { user, error, isLoading } = useUser();
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;


    if (user) {
        return (
            <div>
                <Menu/>
                <FolderArray/>
            </div>
        )
    }

    return <a href="/api/auth/login">Login</a>;    
}