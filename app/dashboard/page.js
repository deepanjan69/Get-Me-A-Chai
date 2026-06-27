"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { useSession, signIn, signOut } from "next-auth/react"
import { useEffect } from 'react'

const Dashboard = () => {
  const { data: session } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (!session) {
      router.push("/login")
    }
  }, [session, router])

  return (
    <>
      <div className=''>
        <h1 className='font-bold text-3xl text-center m-16'>Welcome to Your Dashboard</h1>

        <div className="flex flex-col mx-auto gap-2 max-w-2xl">

          <div className=''>
            <label htmlFor="" className='mx-2'>Name</label>
            <input className='w-full bg-slate-800 rounded-2xl my-2 px-2 py-1' type="text" />
          </div>

          <div className=''>
            <label htmlFor="" className='mx-2'>Email</label>
            <input className='w-full bg-slate-800 rounded-2xl my-2 px-2 py-1' type="text" />
          </div>

          <div className=''>
            <label htmlFor="" className='mx-2'>Username</label>
            <input className='w-full bg-slate-800 rounded-2xl my-2 px-2 py-1' type="text" />
          </div>

          <div className=''>
            <label htmlFor="" className='mx-2'>Public profile</label>
            <input className='w-full bg-slate-800 rounded-2xl my-2 px-2 py-1' type="text" />
          </div>

          <div className=''>
            <label htmlFor="" className='mx-2'>Cover Picture</label>
            <input className='w-full bg-slate-800 rounded-2xl my-2 px-2 py-1' type="text" />
          </div>

          <div className=''>
            <label htmlFor="" className='mx-2'>Razorpay ID</label>
            <input className='w-full bg-slate-800 rounded-2xl my-2 px-2 py-1' type="text" />
          </div>
          
          <div className=''>
            <label htmlFor="" className='mx-2'>Razorpay Secret</label>
            <input className='w-full bg-slate-800 rounded-2xl my-2 px-2 py-1' type="text" />
          </div>

          <button type="button" className="text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 rounded-xl cursor-pointer my-3 mb-10">Save</button>

        </div>
      </div>
    </>
  )
}

export default Dashboard
