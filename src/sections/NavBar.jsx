import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faSquareH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const NavBar = () => {
    const Links =[
        {name:"About",link:"AboutMe"},
        {name:"Projects",link:"ProjectsMe"},
        {name:"Contact",link:"ContactForm"},
    ];
    const [open,setOpen] = useState(false);
    return (
        <>
          <div className="weblogo bg-[#B7D9E2] md:flex place-items-center justify-between py-2.5">
            
            <ScrollLink to="HomeFirst" spy={true} smooth={true} offset={-200} duration={1000} className="hover:scale-105">
                 <div className="font-onest text-xl font-bold text-[#0C3756]">
                   <span className="text-2xl ml-7 mr-1">
                   <FontAwesomeIcon icon={faSquareH} />
                   </span>
                   ome
                 </div>
            </ScrollLink>

            <div onClick={()=>setOpen(!open)} 
            className="text-3xl text-[#0C3756] absolute right-8 top-1 cursor-pointer md:hidden">
            <FontAwesomeIcon icon={open ? faXmark : faBars} />
            </div>
            <ul className={`webmenu font-bold text-xl text-[#0C3756] mr-[30px] md:flex place-items-center
                 absolute md:static md:z-100 -z-1 left-0 w-full md:w-auto
                 md:pl-0 pl-9 transition-all duration-500 ease-in
                 ${open ? 'top-10 opacity-100 bg-[#B7D9E2]' : 'top-[-490px] opacity-0'}
                 md:opacity-100 opacity-0`}>
            {
              Links.map((link) => (
                <li key={link.name} className="md:ml-[32px] md:my-0 my-[20px]">
                   <ScrollLink to={link.link} spy={true} smooth={true} 
                   offset={-50} duration={1000} className="relative overflow-hidden group">
                    {link.name}
                    <span className="absolute w-full h-[3px] bg-[#0C3756] left-0 bottom-0 transform scale-x-0 group-hover:scale-x-100 transition-transform transform-origin-left duration-1000"></span>
                   </ScrollLink>
                </li>
              ))          
            }
            </ul>
            </div>
        </>
    )
}

export default NavBar;

{/* <a href={link.link} className="relative overflow-hidden group"></a> */}
{/* <a href="/" className="hover:scale-105">
            <div className="font-onest text-xl font-bold text-[#0C3756]">
            <span className="text-2xl ml-7 mr-1">
            <FontAwesomeIcon icon={faHouseChimneyUser} />
            </span>
            SP
            </div>
            </a> */}