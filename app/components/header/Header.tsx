import Link from "next/link";
import { Inter, Roboto } from "next/font/google";

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
    return <header className={`${roboto.variable} font-roboto header`}>
        <div className="container relative w-full mx-auto flex justify-between items-center">
            <div className="brand">
                <span className="uppercase text-white">koodi cloud</span>
            </div>
            <nav className="flex ">
                <div className="hidden xl:flex items-center nav-items text-brand-deep-green">
                    <ul className="flex items-center">
                        {
                            navItems.map((item, i)=>{
                                // if(item.url==="contact-us") return (
                                //     <li className="">
                                //         <Link className="group/contact p-4 bg-[#F27C5A] rounded-full text-sm relative" href={`/${item.url}`}>
                                //             <span className="whitespace-pre-line">{item.title}</span>
                                //             <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute right-4 h-[16px] z-20 scale-100 pointer-events-none transition group-hover/contact:opacity-0 group-hover/contact:scale-0 duration-500"><path d="M11 21.5C16.799 21.5 21.5 16.799 21.5 11C21.5 5.20101 16.799 0.5 11 0.5C5.20101 0.5 0.5 5.20101 0.5 11C0.5 16.799 5.20101 21.5 11 21.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                //         </Link>
                                //     </li>
                                // )

                                return (
                                    <li className=" p-4">
                                        <Link href={`/${item.url}`}>{item.title}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <Link className="group/contact p-4 bg-[#F27C5A] rounded-3xl text-sm inline-flex" href={`/contact-us`}>
                        <span className="whitespace-pre-line">Book a Call</span>
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className=" absolute h-[16px] z-20 scale-100 pointer-events-none transition group-hover/contact:opacity-0 group-hover/contact:scale-0 duration-500"><path d="M11 21.5C16.799 21.5 21.5 16.799 21.5 11C21.5 5.20101 16.799 0.5 11 0.5C5.20101 0.5 0.5 5.20101 0.5 11C0.5 16.799 5.20101 21.5 11 21.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className=" absolute h-[16px] opacity-0 z-20 scale-50 pointer-events-none transition group-hover/contact:opacity-100 group-hover/contact:scale-100 duration-500 group-active/contact:-rotate-45 group-hover/contact:delay-150"><ellipse cx="14.0001" cy="14" rx="0.005" ry="0.00499428" fill="#F27C5A"></ellipse><path d="M4.375 14H23.625" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.75 6.125L23.625 14L15.75 21.875" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    </Link>
                </div>
                <button className=" self-center grid p-3 group/b-icons">
                    <div className="grid grid-cols-2 gap-1">
                        <span className="block w-2 h-2 bg-white rounded-full"></span>
                        <span className="block w-2 h-2 bg-white rounded-full"></span>
                        <span className="block w-2 h-2 bg-white rounded-full"></span>
                        <span className="block w-2 h-2 bg-white rounded-full"></span>
                    </div>
                </button>
            </nav>
        </div>
    </header>
}


export default Header;