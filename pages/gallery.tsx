import Link from 'next/link'
import React from 'react'
import {Menu} from './../components/menu'
import {FolderArray} from '../components/folders'

export default function Gallery() {
    return (
        <div>
            <Menu/>
            <FolderArray/>
        </div>
      )
}