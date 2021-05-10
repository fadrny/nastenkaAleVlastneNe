import { Router, useRouter } from 'next/router'
import Link from 'next/link'
import {Menu} from '../../components/menu'
import {LoginScreen} from '../../components/login-screen'
import { useUser } from '@auth0/nextjs-auth0'
import {FolderArray} from '../../components/mainFolders'
import { fromPromise } from '@apollo/client'


const Gallery = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  const router = useRouter()

  if (user) {
    const folder = router.query.folder || []
  
    return (
      <>
        <Menu/>
        {/* <h1>Folder: {folder.join('/')}</h1>
        <Link href={
          folder.join('/') + "/" + "aha"}>
          <a>protahni</a>
        </Link> */}
        <FolderArray idnt={folder[folder.length - 1]}/>
      </>
    )
  }

  return <LoginScreen/> 
}

export default Gallery