import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-white h-[44vh] gap-4 px-5 md:px-0 text-sm md:text-base">
        <div className="md:text-4xl text-2xl font-bold flex gap-1 items-center">Buy Me  A Chai <span><img src="/tea.gif" width={69} height={69} alt="" /></span></div>
        <p className="text-center md:text-left">
          Crowd funding platform for developers to get support from their fans and followers. Start your own campaign and get support from your fans and followers.
        </p>
        <div className="flex gap-3">
          <Link href={"/login"}>
          <button type="button" className="text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 rounded-xl cursor-pointer">Start Now</button>
          </Link>
          <Link href={"/about"}>
          <button type="button" className="text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 rounded-xl cursor-pointer">Read More</button>
          </Link>

        </div>
      </div>

      <div>
        <div className="bg-white h-1 opacity-10"></div>
      </div>

      <div className="text-white container mx-auto py-22 px-10">
        <h2 className="text-2xl font-bold text-center mb-14">Your Fans can buy you a Chai</h2>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" width={98} src="/man.png" alt="" />
            <p className="font-bold text-center">Fund Yourself</p>
            <p className="text-center">Your fans are available to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" width={98} src="/coin.gif" alt="" />
            <p className="font-bold text-center">Fund Yourself</p>
            <p className="text-center">Your fans are available to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" width={98} src="/group.gif" alt="" />
            <p className="font-bold text-center">Fans want to help</p>
            <p className="text-center">Your fans are available to help you</p>
          </div>
        </div>
      </div>

      <div>
        <div className="bg-white h-1 opacity-10"></div>
      </div>

      <div className="text-white container mx-auto py-22 flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold text-center mb-14">Learn More About Us</h2>
        <iframe className="md:w-xl md:h-80" src="https://www.youtube.com/embed/QtaorVNAwbI?si=pOwppu0y77x6JEVN" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>

    </>
  );
}
