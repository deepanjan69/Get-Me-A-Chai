"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { useSession, signIn, signOut } from "next-auth/react"
import { useEffect } from 'react'
import { fetchuser, updateProfile } from '@/actions/useractions'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

const Dashboard = () => {
  const { data: session, update } = useSession()
  const router = useRouter()
  const [form, setform] = useState({})

  useEffect(() => {
    document.title = "Dashboard - Get Me A Chai"
    if (!session) {
      router.push("/login");
      return;
    }

    getData(session.user.name);
  }, [session]);

  const getData = async (username) => {
    let u = await fetchuser(username);
    setform(u);
  }

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await updateProfile(form, session.user.name);

    if (res?.error) {
      alert(res.error);
      return;
    }

    await update();

    toast('Profile updated !! 🎉', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    })
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <form className='px-7' action={handleSubmit}>
        <h1 className='font-bold text-xl sm:text-3xl text-center m-16'>Welcome to Your Dashboard</h1>

        <div className="flex flex-col mx-auto gap-2 max-w-2xl">

          <div className=''>
            <label htmlFor="" className='mx-2'>Name</label>
            <input name='name' value={form.name || ""} onChange={handleChange} className='w-full bg-slate-800 rounded-2xl my-2 px-2 py-1' type="text" />
          </div>

          <div className=''>
            <label htmlFor="" className='mx-2'>Email</label>
            <input name='email' value={form.email || ""} onChange={handleChange} className='w-full bg-slate-800 rounded-2xl my-2 px-2 py-1' type="text" />
          </div>

          <div className=''>
            <label htmlFor="" className='mx-2'>Username</label>
            <input name='username' value={form.username || ""} onChange={handleChange} className='w-full bg-slate-800 rounded-2xl my-2 px-2 py-1' type="text" />
          </div>

          <div className=''>
            <label htmlFor="" className='mx-2'>Profile Pic</label>
            <input name='profilepic' value={form.profilepic || ""} onChange={handleChange} className='w-full bg-slate-800 rounded-2xl my-2 px-2 py-1' type="text" />
          </div>

          <div className=''>
            <label htmlFor="" className='mx-2'>Cover Picture</label>
            <input name='coverpic' value={form.coverpic || ""} onChange={handleChange} className='w-full bg-slate-800 rounded-2xl my-2 px-2 py-1' type="text" />
          </div>

          <div className=''>
            <label htmlFor="" className='mx-2'>Razorpay ID</label>
            <input name='razorpayid' value={form.razorpayid || ""} onChange={handleChange} className='w-full bg-slate-800 rounded-2xl my-2 px-2 py-1' type="text" />
          </div>

          <div className=''>
            <label htmlFor="" className='mx-2'>Razorpay Secret</label>
            <input name='razorpaysecret' value={form.razorpaysecret || ""} onChange={handleChange} className='w-full bg-slate-800 rounded-2xl my-2 px-2 py-1' type="text" />
          </div>

          <button type="submit" className="text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 rounded-xl cursor-pointer my-3 mb-10" onClick={handleSubmit}>Save</button>

        </div>
      </form>
    </>
  )
}

export default Dashboard
