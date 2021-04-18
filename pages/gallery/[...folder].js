import { Router, useRouter } from 'next/router'
import Link from 'next/link'
import {Menu} from '../../components/menu'
import { useUser } from '@auth0/nextjs-auth0'


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
        <h1>Folder: {folder.join('/')}</h1>
        <Link href={
          folder.join('/') + "/" + "aha"}>
          <a>protahni</a>
        </Link>
      </>
    )
  }

  return <a href="/api/auth/login">Login</a>; 
}

export default Gallery