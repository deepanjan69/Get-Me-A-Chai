"use client"
import React from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"
import { useState } from 'react'

const Navbar = () => {
  const { data: session } = useSession()
  const [showdropdown, setshowdropdown] = useState(false)
  // if(session) {
  //   return <>
  //     Signed in as {session.user.email} <br/>
  //     <button onClick={() => signOut()}>Sign out</button>
  //   </>
  // }
  return (
    <nav className='bg-gray-900 text-white flex justify-between sm:px-4 w-full md:h-13 flex-col md:flex-row items-center'>
      <Link href={"/"} className="logo font-bold text-lg flex justify-center items-center">
        <img src="/tea.gif" width={44} alt="" />
        <span>GetMeaCHAI!</span>
      </Link>
      {/* <ul className="flex justify-between gap-4">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Projects</li>
        <li>Login</li>
      </ul> */}

      <div className="flex gap-3 relative">
        {session && <> <button onClick={()=>setshowdropdown(!showdropdown)} onBlur={()=> {setTimeout(() => {setshowdropdown(false)}, 300);}} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="inline-flex items-center justify-center text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-300 shadow-md font-medium text-sm px-4 py-2.5 rounded-xl cursor-pointer" type="button">Welcome, {session.user.email}<svg className="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7"/></svg></button>

        <div id="dropdown" className={`z-10 ${showdropdown?"":"hidden"} absolute left-[120px] top-[45px] bg-gray-800 border border-gray-700 rounded-xl shadow-lg w-44`}>
          <ul className="p-2 text-sm text-body font-medium" aria-labelledby="dropdownDefaultButton">
            <li>
              <Link href={"/dashboard"} className="inline-flex items-center w-full p-2 hover:bg-gray-700 hover:text-heading rounded">Dashboard</Link>
            </li>
            <li>
              <Link href={`/${session.user.name}`} className="inline-flex items-center w-full p-2 hover:bg-gray-700 hover:text-heading rounded">Your Page</Link>
            </li>
            <li>
              <Link href="#" className="inline-flex items-center w-full p-2 hover:bg-gray-700 hover:text-heading rounded">Earnings</Link>
            </li>
            <li>
              <Link href="#" className="inline-flex items-center w-full p-2 hover:bg-gray-700 hover:text-heading rounded" onClick={signOut}>Logout</Link>
            </li>
          </ul>
        </div> </>
        }
        
        {session && <button type="button" className="text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 rounded-xl cursor-pointer" onClick={signOut}>Logout</button>}

        {!session && <Link href={"/login"}>
          <button type="button" className="text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 rounded-xl cursor-pointer">Login</button>
        </Link>}
      </div>

    </nav>
  )
}

export default Navbar