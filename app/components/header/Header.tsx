"use client"
import Link from "next/link";
import { Inter, Roboto } from "next/font/google";
import { delay, motion } from "framer-motion"
import { useState } from "react";
import AnimatedCircle from "../effect/Circular";

const roboto = Roboto({
    subsets: ["latin"],
    weight: "500",
    variable: '--font-roboto'
  })

const navItems = [
    {
        title:"How We Work",
        url:"how-we-work"
    },
    {
        title:"What We Do",
        url:"services"
    },
    {
        title:"Our Expertise",
        url:"industries"
    },
    {
        title:"Client Success",
        url:"case-studies"
    },
    // {
    //     title:"Book a Call",
    //     url:"contact-us"
    // },

]





const Header = (props:any) => {
    const variants = {
        initial: { width: 0, height: 0,left: '120%', top:'-20px', opacity: 0 },
        animate: {
          width: '100vw',
          height: '100vh',
          top:0,
          left:0,
          borderRadius: 0,
          opacity: 1,
          transition: { duration: 0.5 }, // Adjust duration as needed
        },
      };

    const [check,setCheck]= useState<boolean>(false);

    return <header className={`${roboto.variable} font-roboto header relative`}>
        <div className="container relative w-full mx-auto flex justify-between items-center pt-[24px]">
            <div className="brand">
                <span className="uppercase text-white text-2xl">koodi cloud</span>
            </div>
            <nav className="flex ">
                <div className="hidden xl:flex items-center nav-items text-brand-deep-green">
                    <ul className="flex items-center">
                        {
                            navItems.map((item, i)=>{
                                return (
                                    <li key={i} className=" p-4">
                                        <Link className="p-6 text-lg text-white hover:text-[#F27C5A] transition-all duration-300" href={`/${item.url}`}>{item.title}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>

                    <button className="relative flex h-[50px] w-40 items-center rounded-full justify-center overflow-hidden bg-white text-white transition-all before:absolute before:right-0  before:h-56 before:w-full before:rounded-full before:bg-[#F27C5A] before:duration-500 before:ease-out hover:shadow-bg-[#F27C5A] hover:before:h-0 hover:before:w-0  group/contact relative ">

                        <span className="relative z-10 px-8 pl-4 group-hover/contact:text-black">Book a Call</span>

                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className=" absolute text-xl right-5 h-[16px] z-20 scale-100 pointer-events-none transition group-hover/contact:opacity-0 group-hover/contact:scale-0 duration-500 group-hover/contact:text-black"><path d="M11 21.5C16.799 21.5 21.5 16.799 21.5 11C21.5 5.20101 16.799 0.5 11 0.5C5.20101 0.5 0.5 5.20101 0.5 11C0.5 16.799 5.20101 21.5 11 21.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className=" absolute text-xl right-5 h-[16px] opacity-0 z-20 scale-50 pointer-events-none transition group-hover/contact:opacity-100 group-hover/contact:scale-100 duration-500 group-active/contact:-rotate-45 group-hover/contact:delay-150 group-hover/contact:text-black"><ellipse cx="14.0001" cy="14" rx="0.005" ry="0.00499428" fill="#F27C5A"></ellipse><path d="M4.375 14H23.625" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M15.75 6.125L23.625 14L15.75 21.875" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path></svg>

                    </button>

                   


                </div>
                <button className=" self-center grid p-3 group/b-icons" onClick={()=> setCheck(!check)}>
                    <div className="grid grid-cols-2 gap-1">
                        <span className="block w-2 h-2 bg-white rounded-full"></span>
                        <span className="block w-2 h-2 bg-white rounded-full"></span>
                        <span className="block w-2 h-2 bg-white rounded-full"></span>
                        <span className="block w-2 h-2 bg-white rounded-full"></span>
                    </div>
                </button>
            </nav>
        </div>

        <motion.div 
            variants={variants}
            initial="initial"
            animate={check ? "animate" : "initial"}
            // animate={target} 
            className={`absolute top-0 left-0 h-screen w-full bg-[#002922] overflow-hidden z-[99]`}>
                {/* h-screen absolute w-full top-0 before:w-full before:h-screen hover: bg-[#F27C5A] overflow-hidden z-[99] right-0 */}
                <motion.div className="container mx-auto  pt-[24px]">
                    <motion.div className="flex item-center justify-between">
                        <motion.div>
                            <span className="uppercase text-white text-2xl">koodi cloud</span>
                        </motion.div>
                        <motion.div className="flex item-center">
                            <button className="relative flex h-[50px] w-40 items-center rounded-full justify-center overflow-hidden bg-white text-white transition-all before:absolute before:right-0  before:h-56 before:w-full before:rounded-full before:bg-[#F27C5A] before:duration-500 before:ease-out hover:shadow-bg-[#F27C5A] hover:before:h-0 hover:before:w-0  group/contact relative ">

                            <span className="relative z-10 px-8 pl-4 group-hover/contact:text-black">Book a Call</span>

                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className=" absolute text-xl right-5 h-[16px] z-20 scale-100 pointer-events-none transition group-hover/contact:opacity-0 group-hover/contact:scale-0 duration-500 group-hover/contact:text-black"><path d="M11 21.5C16.799 21.5 21.5 16.799 21.5 11C21.5 5.20101 16.799 0.5 11 0.5C5.20101 0.5 0.5 5.20101 0.5 11C0.5 16.799 5.20101 21.5 11 21.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className=" absolute text-xl right-5 h-[16px] opacity-0 z-20 scale-50 pointer-events-none transition group-hover/contact:opacity-100 group-hover/contact:scale-100 duration-500 group-active/contact:-rotate-45 group-hover/contact:delay-150 group-hover/contact:text-black"><ellipse cx="14.0001" cy="14" rx="0.005" ry="0.00499428" fill="#F27C5A"></ellipse><path d="M4.375 14H23.625" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M15.75 6.125L23.625 14L15.75 21.875" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path></svg>

                            </button>
                            <button onClick={()=>setCheck(!check)} ><svg xmlns="http://www.w3.org/2000/svg" width="60" height="48" viewBox="0 0 60 48" fill="none" className="w-14 text-[#f7ecd3]"><rect x="17.9792" y="34.6066" width="28" height="2" rx="1" transform="rotate(-45 17.9792 34.6066)" fill="currentColor"></rect><rect x="20.8076" y="31.7782" width="28" height="2" rx="1" transform="rotate(-45 20.8076 31.7782)" fill="currentColor"></rect><rect x="19.3934" y="11.9792" width="28" height="2" rx="1" transform="rotate(45 19.3934 11.9792)" fill="currentColor"></rect><rect x="22.2218" y="14.8076" width="28" height="2" rx="1" transform="rotate(45 22.2218 14.8076)" fill="currentColor"></rect></svg></button>
                        </motion.div>
                    </motion.div>
                    <motion.div className="flex flex-row pt-[60px]">
                        <motion.div className="w-1/2">
                            <motion.ul className="flex flex-col px-5">
                                {
                                    navItems.map((item, i)=>{
                                        return (
                                            <>
                                                <motion.li key={i} className=" p-4">
                                                    <Link className=" p-6 text-lg text-white hover:text-[#F27C5A] transition-all duration-300" href={`/${item.url}`}>{item.title}</Link>
                                                </motion.li>
                                                <hr/>
                                            </>
                                        )
                                    })
                                }
                            </motion.ul>
                        </motion.div>
                        <motion.div className="w-1/2">
                            <h1> this is right</h1>
                        </motion.div>
                    </motion.div>
                </motion.div>
        </motion.div>


    </header>
}


export default Header;
