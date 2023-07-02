import React from 'react'

type Props = {}
import { Tab } from '@headlessui/react'
import { useAuthState } from 'react-firebase-hooks/auth'
import {auth} from '../../utils/firebase'
const Dashboard = (props: Props) => {
    //lets see who is logged in
    const [user, loading, error] = useAuthState(auth)
    if (!user) return <div className=''>
        
    </div>
  return (
      <div className="sticky snap-y snap-mandatory h-screen w-screen overflow-scroll scroll-m-1 scroll-p-1">
        <p>User Dashboard</p>
    </div>
  )
}

export default Dashboard