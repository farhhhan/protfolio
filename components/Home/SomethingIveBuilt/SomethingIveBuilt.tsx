import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import Img from "../../smallComp/image/Img";
import GithubIcon from "../../Icons/GithubIconForSomethingIveBuild";
import ExternalLink from "../../Icons/ExternalLink";

export default function SomethingIveBuilt() {
  const router = useRouter();
  return (
    <div
      id="SomethingIveBuiltSection"
      className=" flex flex-col xl:space-y-28 space-y-12 bg-AAprimary w-full  
     2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-32 px-4"
    >
      {/* Title */}
      <div data-aos="fade-up" className=" flex flex-row  items-center md:px-0">
        <ArrowIcon className={"flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-AAsecondary"} />
        <div className="flex-none flex-row space-x-2 items-center pr-2">
          <span className="text-AAsecondary font-sans text-sm  sm:text-xl"> 03.</span>
          <span className=" font-bold tracking-wider text-gray-200 text-lg md:text-2xl w-44 md:w-56 opacity-85">
            {" "}
            Some Things I&apos;ve Built
          </span>
        </div>
        <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
      </div>

      <div className="flex flex-col   xl:space-y-36 space-y-8 md:space-y-28">
        {/* Project 1 - Growblic */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96  ">
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <a href={"https://play.google.com/store/apps/details?id=com.EarningFish.EarningFish"} target="_blank" rel="noreferrer">
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <Img src={"https://play-lh.googleusercontent.com/PBhEWSuYUUCWPL8PvdlzHogOZcLmUeEZ1Kt9wJh1jm6GhO7Zd63_SsyrUkDj4Eanz6g=w240-h480-rw"} alt={"Growblic App"} className={`w-full rounded h-full `} />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img src={"https://play-lh.googleusercontent.com/PBhEWSuYUUCWPL8PvdlzHogOZcLmUeEZ1Kt9wJh1jm6GhO7Zd63_SsyrUkDj4Eanz6g=w240-h480-rw"} alt={"Growblic App"} className={`w-full h-full`} />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-AAsecondary text-base">Featured Project</span>
                <a href="https://play.google.com/store/apps/details?id=com.EarningFish.EarningFish" target="_blank" rel="noopener noreferrer">
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Growblic – Financial Application
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-left ">
                  A cross-platform <span className="text-AAsecondary">financial gaming app</span> featuring mini-games, real-time chat, and coin-sharing.
                  Solely coordinated and developed the complete project using <span className="text-AAsecondary">Flutter</span> with <span className="text-AAsecondary">Bloc architecture</span>.
                  Deployed on <span className="text-AAsecondary">Android, iOS, Android TV, and Wear OS</span>.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">Flutter</span>
                <span className="pr-4 z-10">Bloc</span>
                <span className="pr-4 z-10">Firebase</span>
                <span className="pr-4 z-10">REST API</span>
                <span className="pr-4 z-10">Cloud Messaging</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <a href="https://play.google.com/store/apps/details?id=com.EarningFish.EarningFish" target={"_blank"} rel="noreferrer">
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project 2 - PairUp Meet */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96 ">
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              <a href={"https://play.google.com/store/apps/details?id=com.earning.lovematch"} target={"_blank"} rel="noreferrer">
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-30 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <Img src={"https://play-lh.googleusercontent.com/npoeTDcuBqjF4spljH5nJRJtMtwzYNfW8U0ENNfyKhAtLv8ETxqSXPoFZCubs4dYHdoCGKH1e4SRCohxd1I=w416-h235-rw"} alt={"PairUp Meet App"} className={`w-full rounded h-full `} />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img src={"https://play-lh.googleusercontent.com/npoeTDcuBqjF4spljH5nJRJtMtwzYNfW8U0ENNfyKhAtLv8ETxqSXPoFZCubs4dYHdoCGKH1e4SRCohxd1I=w416-h235-rw"} alt={"PairUp Meet App"} className={`w-full h-full `} />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">Recent Project</span>
                <a href="https://play.google.com/store/apps/details?id=com.earning.lovematch" target="_blank" rel="noopener noreferrer">
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    PairUp Meet – Dating Application
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right">
                  A <span className="text-AAsecondary">Flutter-based dating app</span> offering matchmaking, real-time chat, and user profile customization.
                  Implemented <span className="text-AAsecondary">matchmaking algorithm</span> based on interests and location with
                  <span className="text-AAsecondary"> Firebase Authentication</span> and <span className="text-AAsecondary">Cloud Firestore</span>.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">Flutter</span>
                <span className="pr-4 z-10">Firebase Auth</span>
                <span className="pr-4 z-10">Firestore</span>
                <span className="pr-4 z-10">Real-time Chat</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <a href="https://play.google.com/store/apps/details?id=com.earning.lovematch" target={"_blank"} rel="noreferrer">
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project 3 - Bismi App */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96  ">
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <div
                className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-50 hover:opacity-0 duration-300"
              ></div>
              <Img src={"bishmi.png"} alt={"Bismi App"} className={`w-full rounded h-full `} />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img src={"bishmi.png"} alt={"Bismi App"} className={`w-full h-full`} />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-AAsecondary text-base">Internal Project</span>
                <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl">
                  Bismi App – Tailors Management
                </span>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left">
                  Developed under <span className="text-AAsecondary">Bismi Uniforms LLC</span>, this Flutter-based tailoring management system
                  handles client orders, measurement tracking, and <span className="text-AAsecondary">PDF documentation</span>.
                  Used by employees for efficient <span className="text-AAsecondary">workflow management</span> with offline access via <span className="text-AAsecondary">Hive Storage</span>.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">Flutter</span>
                <span className="pr-4 z-10">Firebase</span>
                <span className="pr-4 z-10">Hive Storage</span>
                <span className="pr-4 z-10">PDF Generation</span>
              </ul>
            </div>
          </div>
        </div>

        {/* Project 4 - SocioConnect */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96 ">
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              <a href="https://play.google.com/store/apps/details?id=com.socioconnect.socioconnect" target={"_blank"} rel="noreferrer">
                <div
                  className="absolute w-full h-full rounded bg-AAsecondary 
           transition-opacity opacity-10 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <Img src={"https://play-lh.googleusercontent.com/V9F1_vkQJrnCV4piFIMtz-6NHrjNaOGfVCXdH7mRrUJK3YxAwzvIUJ7Uk2NDHsW3wZicrnQ4IHSz_ydvZkSx=w416-h235-rw"} alt={"SocioConnect App"} className={`w-full rounded h-full `} />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img src={"https://play-lh.googleusercontent.com/V9F1_vkQJrnCV4piFIMtz-6NHrjNaOGfVCXdH7mRrUJK3YxAwzvIUJ7Uk2NDHsW3wZicrnQ4IHSz_ydvZkSx=w416-h235-rw"} alt={"SocioConnect App"} className={`w-full h-full `} />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">Recent Project</span>
                <a href="https://play.google.com/store/apps/details?id=com.socioconnect.socioconnect" target="_blank" rel="noopener noreferrer">
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    SocioConnect Application
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right">
                  A smart <span className="text-AAsecondary">community management app</span> connecting apartment residents, caretakers, and owners.
                  Features <span className="text-AAsecondary">real-time communication</span>, service request tracking, and
                  <span className="text-AAsecondary"> Bloc state management</span> for organized data flow.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">Flutter</span>
                <span className="pr-4 z-10">Bloc</span>
                <span className="pr-4 z-10">Firestore</span>
                <span className="pr-4 z-10">Real-time Chat</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <a href="https://play.google.com/store/apps/details?id=com.socioconnect.socioconnect" target={"_blank"} rel="noreferrer">
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project 5 - PayRoll + HR Management */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96  ">
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <a href={"https://play.google.com/store/apps/details?id=com.payroll.hr_app"} target="_blank" rel="noreferrer">
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <Img src={"https://play-lh.googleusercontent.com/OezQwfesPs0eFITyJsowOiUnYcEZ-_29EVMaEQfrgYKRw7INaNbxRFxFG_Z0yl2D08SL_z__hqE9OG97kC6n=w240-h480-rw"} alt={"PayRoll App"} className={`w-full rounded h-full `} />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img src={"https://play-lh.googleusercontent.com/OezQwfesPs0eFITyJsowOiUnYcEZ-_29EVMaEQfrgYKRw7INaNbxRFxFG_Z0yl2D08SL_z__hqE9OG97kC6n=w240-h480-rw"} alt={"PayRoll App"} className={`w-full h-full`} />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-AAsecondary text-base">Recent Project</span>
                <a href="https://play.google.com/store/apps/details?id=com.payroll.hr_app" target="_blank" rel="noopener noreferrer">
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    PayRoll + HR Management App
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-left ">
                  A business-oriented <span className="text-AAsecondary">payroll management solution</span> for automating salary, attendance, and HR operations.
                  Features <span className="text-AAsecondary">role-based authentication</span>, salary management with
                  <span className="text-AAsecondary"> Cloud Firestore</span>, and dashboard analytics using <span className="text-AAsecondary">Flutter Charts</span>.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">Flutter</span>
                <span className="pr-4 z-10">Firebase Auth</span>
                <span className="pr-4 z-10">Firestore</span>
                <span className="pr-4 z-10">Flutter Charts</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <a href="https://play.google.com/store/apps/details?id=com.payroll.hr_app" target={"_blank"} rel="noreferrer">
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project 6 - Jeev Setu */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96">
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              <a href={"https://play.google.com/store/apps/details?id=com.jeevsetu.jeevsetu"} target={"_blank"} rel="noreferrer">
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <Img src={"https://play-lh.googleusercontent.com/qlpvHCuHP92PwmH0i9qYO7aBIl2zbr8hj3tlCxQmY5oLA37vya7F1kaW0r_U7SQwxWTCPKahjHEOHPBr93WKjA=w240-h480-rw"} alt={"Jeev Setu App"} className={`w-full rounded h-full `} />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img src={"https://play-lh.googleusercontent.com/qlpvHCuHP92PwmH0i9qYO7aBIl2zbr8hj3tlCxQmY5oLA37vya7F1kaW0r_U7SQwxWTCPKahjHEOHPBr93WKjA=w240-h480-rw"} alt={"Jeev Setu App"} className={`w-full h-full `} />
              </div>
            </div>
            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end sm:space-y-3 space-y-1"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">Recent Project</span>
                <a href={"https://play.google.com/store/apps/details?id=com.jeevsetu.jeevsetu"} target={"_blank"} rel="noreferrer">
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Jeev Setu – Farmer Support App
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right">
                  A digital platform connecting <span className="text-AAsecondary">farmers, buyers, and agricultural experts</span> for efficient crop management.
                  Features marketplace functionality using <span className="text-AAsecondary">Firebase Firestore</span> and
                  location-based crop discovery with <span className="text-AAsecondary">Google Maps API</span>.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">Flutter</span>
                <span className="pr-4 z-10">Firestore</span>
                <span className="pr-4 z-10">Google Maps API</span>
                <span className="pr-4 z-10">Marketplace</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 sm:pt-0 pt-2">
                <a href="https://play.google.com/store/apps/details?id=com.jeevsetu.jeevsetu" target={"_blank"} rel="noreferrer">
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project 7 - Trip Twist */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96  ">
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <a href={"https://www.amazon.com/Farhan-Trip-Twist/dp/B0D13FY94T"} target="_blank" rel="noreferrer">
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-60 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <Img src={"twist.png"} alt={"Trip Twist App"} className={`w-full rounded h-full `} />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAprimary opacity-50 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img src={"twist.png"} alt={"Trip Twist App"} className={`w-full h-full`} />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  sm:space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-AAsecondary text-base">Recent Project</span>
                <a href={"https://www.amazon.com/Farhan-Trip-Twist/dp/B0D13FY94T"} target={"_blank"} rel="noreferrer">
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Trip Twist – Travel Booking App
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left ">
                  A comprehensive <span className="text-AAsecondary">travel booking platform</span> for users, admins, and travel agencies.
                  Built with <span className="text-AAsecondary">Flutter framework</span> and <span className="text-AAsecondary">Bloc state management</span>.
                  Integrated <span className="text-AAsecondary">Google Maps API</span> with autocomplete and utilized
                  <span className="text-AAsecondary"> Cloud Firestore</span> for scalable data handling.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">Flutter</span>
                <span className="pr-4 z-10">Bloc</span>
                <span className="pr-4 z-10">Google Maps API</span>
                <span className="pr-4 z-10">Firestore</span>
                <span className="pr-4 z-10">Firebase Storage</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 sm:pt-0 pt-2">
                <GithubIcon link="https://github.com/farhhhan/Travel_app" />
                <a href="https://www.amazon.com/Farhan-Trip-Twist/dp/B0D13FY94T" target={"_blank"} rel="noreferrer">
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
