export default async function Username({ params }) {
  const { username } = await params;

  return (
    <>
      <div className="cover relative">
        <img className="w-full" src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/20.gif?token-hash=Ea6_VCjkA8gDYUhEyfLeYl-Iv-qdKB_m2EGR2MSTXkg%3D&token-time=1783123200" alt="" />
        <div className="absolute -bottom-14 right-[46%] border-2 border-black rounded-full">
          <img className="rounded-full" width={109} src="https://imgs.search.brave.com/gT-LoUHwEfva-SaqAWffzaUA6jPyZfZZtn4Q3mrg-YA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9qYWNr/LXJ1c3NlbGwtdGVy/cmllci1wdXBweS0y/LW1vbnRocy1vbGQt/MTcwMDA5ODEuanBn" alt="" />
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
            <li className="list-none">26,001 members</li>
            <li>111 posts</li>
            <li>$17,000/release</li>
          </ol>
        </div>

        <div className="payment flex gap-4 w-[80%] mt-11">
          <div className="supporters w-1/2 bg-slate-900 rounded-lg p-10">
            {/* show list if all the supporters as a leaderboard */}
            <h2 className="text-2xl font-bold">Supporters</h2>

            <ul className="mx-4 text-lg">

              <li className="my-4 flex gap-2 items-start">
                <img className="border rounded-full" width={30} src="user.gif" alt="user" />
                <span>
                  Shubham donated <span className="font-bold">$30</span> with a message"I support you bro lots of ❤️"
                </span>
              </li>

              <li className="my-4 flex gap-2 items-start">
                <img className="border rounded-full" width={30} src="user.gif" alt="user" />
                <span>
                  Shubham donated <span className="font-bold">$30</span> with a message"I support you bro lots of ❤️"
                </span>
              </li>

              <li className="my-4 flex gap-2 items-start">
                <img className="border rounded-full" width={30} src="user.gif" alt="user" />
                <span>
                  Shubham donated <span className="font-bold">$30</span> with a message"I support you bro lots of ❤️"
                </span>
              </li>

              <li className="my-4 flex gap-2 items-start">
                <img className="border rounded-full" width={30} src="user.gif" alt="user" />
                <span>
                  Shubham donated <span className="font-bold">$30</span> with a message"I support you bro lots of ❤️"
                </span>
              </li>
              
            </ul>

          </div>

          <div className="makePayment w-1/2 bg-slate-900 rounded-lg">
            <h2 className="font-bold text-2xl m-5">Make a Payment</h2>
            <div className="flex flex-col gap-2 p-4">
              {/* input for messsage */}
              <input type="text" className="w-full p-3 rounded-lg bg-slate-800" placeholder="Enter Name" />
              <input type="text" className="w-full p-3 rounded-lg bg-slate-800" placeholder="Enter Message" />
              <input type="text" className="w-full p-3 rounded-lg bg-slate-800" placeholder="Enter Amount" />
              <button type="button" className="text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 rounded-xl cursor-pointer">Pay</button>
            </div>
            {/* or choose from this amounts */}
            <div className="flex gap-3 m-4">
              <button className="bg-slate-800 p-3 rounded-lg cursor-pointer hover:bg-slate-700">5$</button>
              <button className="bg-slate-800 p-3 rounded-lg cursor-pointer hover:bg-slate-700">10$</button>
              <button className="bg-slate-800 p-3 rounded-lg cursor-pointer hover:bg-slate-700">20$</button>
              <button className="bg-slate-800 p-3 rounded-lg cursor-pointer hover:bg-slate-700">30$</button>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}