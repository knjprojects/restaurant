'use client'
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
<main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/page.tsx</code>
        </p>
        <p>User Dashboard</p>
    </main>
  )
}

export default Dashboard