"use server"

import Razorpay from "razorpay"
import Payment from "@/models/Payment"
import connectDB from "@/db/connectDb"
import User from "@/models/User"

export const initiate = async (amount, to_username, paymentform) => {
    await connectDB()
    //fetch the secret of the user who s getting the payment
        let user = await User.findOne({username: to_username})
        const secret = user.razorpaysecret
    var instance = new Razorpay({ key_id: user.razorpayid, key_secret: secret })

    let options = {
        amount: Number(amount) * 100,
        currency: "INR"
    }

    let x = await instance.orders.create(options)

    //creating a payment object that shows pending payments
    await Payment.create({
        order_id: x.id,
        amount: amount,
        to_user: to_username,
        name: paymentform.name,
        message: paymentform.message,
    })

    return x

}

export const fetchuser = async(username)=>{
    await connectDB()
    let u = await User.findOne({username: username})
    let user = u.toObject({flattenObjectIds: true})
    return user
}

export const fetchpayments = async(username)=>{
    await connectDB()
    //find all payments sorted by decreasing order of amount and flatten object
    let p = await Payment.find({to_user: username}).sort({amount: -1}).lean()
    return JSON.parse(JSON.stringify(p));
}

export const updateProfile = async (data, oldusername)=>{
    await connectDB()
    let ndata = data

    //if the username is being updated, check if username is available
    if(oldusername !== ndata.username){
        let u = await User.findOne({username: oldusername})
        if(u){
            return {error : "Username already exists"}
        }
    }

    await User.updateOne({email: ndata.email}, ndata)
    
}