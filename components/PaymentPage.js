"use client"

import React, { useEffect } from 'react'
import Script from 'next/script'
import { fetchpayments, initiate } from '@/actions/useractions'
import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { fetchuser } from '@/actions/useractions'
import { useSearchParams } from 'next/navigation'
import { SearchParamsContext } from 'next/dist/shared/lib/hooks-client-context.shared-runtime'
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/navigation'

const PaymentPage = ({ username }) => {

    const { data: session } = useSession()
    const [paymentform, setpaymentform] = useState({
        name: "",
        message: "",
        amount: ""
    })
    const [currentuser, setcurrentuser] = useState({})
    const [payments, setpayments] = useState([])
    const searchParams = useSearchParams()
    const router = useRouter()

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        if (searchParams.get("paymentdone") == "true") {
            toast('Thanks for your donation ❤️', {
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
        router.push(`/${username}`)

    }, [])



    const handleChange = (e) => {
        setpaymentform({ ...paymentform, [e.target.name]: e.target.value })
    }

    const getData = async (params) => {
        let u = await fetchuser(username)
        setcurrentuser(u)
        let dbpayments = await fetchpayments(username)
        setpayments(dbpayments)
    }

    const pay = async (amount) => {
        //get the order id
        let a = await initiate(amount, username, paymentform)
        let orderId = a.id

        var options = {
            "key": process.env.NEXT_PUBLIC_KEY_ID, // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits. 
            "currency": "INR",
            "name": "Get Me A Chai", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId, // This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Gaurav Kumar", //your customer's name
                "email": "gaurav.kumar@example.com",
                "contact": "+919876543210" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };

        var rzp1 = new Razorpay(options);
        rzp1.open();

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
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

            <div className="cover relative">
                <img className="w-full" src={currentuser.coverpic} alt="" />
                <div className="absolute -bottom-14 right-[38%] sm:right-[46%] border-2 border-black rounded-full">
                    <img className="rounded-full" width={109} src={currentuser.profilepic} alt="" />
                </div>
            </div>
            <div className="info flex flex-col justify-center items-center my-18 gap-1">
                <div className="font-bold text-3xl">
                    @{username}
                </div>
                <div className="text-slate-400">
                    Creating Animated art for VTT's
                </div>
                <div>
                    <ol className="flex gap-8 list-disc text-slate-400">
                        <li className="list-none">{payments.length} Payments</li>
                        <li>₹{payments.reduce((a,b)=> a + b.amount, 0)} raised</li>
                        {/* <li>$17,000/release</li> */}
                    </ol>
                </div>

                <div className="payment flex gap-4 w-[80%] mt-11 sm:max-h-[57vh] flex-col md:flex-row">
                    <div className="supporters w-full md:w-1/2 bg-slate-900 rounded-lg p-10 overflow-y-auto overflow-x-hidden">
                        {/* show list if all the supporters as a leaderboard */}
                        <h2 className="text-2xl font-bold">Supporters</h2>

                        <ul className="mx-4 text-lg">
                            {payments.length == 0 && <li className='text-sm text-gray-500 mt-5'>No Payments Yet</li>}
                            {payments.map((p, i) => {
                                return <li key={i} className="my-4 flex gap-2 items-start">
                                    <img className="border rounded-full" width={30} src="user.gif" alt="user" />
                                    <span>
                                        {p.name} donated <span className="font-bold">₹{p.amount}</span> with a message"{p.message}"
                                    </span>
                                </li>
                            })}

                        </ul>

                    </div>

                    <div className="makePayment w-full md:w-1/2 bg-slate-900 rounded-lg">
                        <h2 className="font-bold text-2xl m-5">Make a Payment</h2>
                        <div className="flex flex-col gap-2 p-4">
                            {/* input for messsage */}
                            <input onChange={handleChange} value={paymentform.name} type="text" name="name" className="w-full p-3 rounded-lg bg-slate-800" placeholder="Enter Name" />
                            <input onChange={handleChange} value={paymentform.message} type="text" name='message' className="w-full p-3 rounded-lg bg-slate-800" placeholder="Enter Message" />
                            <input onChange={handleChange} value={paymentform.amount} type="text" name='amount' className="w-full p-3 rounded-lg bg-slate-800" placeholder="Enter Amount" />
                            <button type="button" className="text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 rounded-xl cursor-pointer disabled:bg-slate-600 disabled:from-purple-300" disabled={paymentform.name?.length < 3 || paymentform.message?.length < 4 || paymentform.amount?.length < 1} onClick={() => { pay(paymentform.amount) }}>Pay</button>
                        </div>
                        {/* or choose from this amounts */}
                        <div className="flex gap-3 m-4">
                            <button className="bg-slate-800 p-3 rounded-lg cursor-pointer hover:bg-slate-700" onClick={() => { pay(5) }}>₹5</button>
                            <button className="bg-slate-800 p-3 rounded-lg cursor-pointer hover:bg-slate-700" onClick={() => { pay(10) }}>₹10</button>
                            <button className="bg-slate-800 p-3 rounded-lg cursor-pointer hover:bg-slate-700" onClick={() => { pay(20) }}>₹20</button>
                            <button className="bg-slate-800 p-3 rounded-lg cursor-pointer hover:bg-slate-700" onClick={() => { pay(30) }}>₹30</button>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default PaymentPage
