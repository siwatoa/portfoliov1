import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProjectDev } from "../contents/Project";
import { ProjectData } from "../contents/Project";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const ProjectsMe = () => {
    return(
       <>
       <div className="word1 inline-block flex justify-left ml-5 justify-center">
            <div className="webdev bg-[#B7D9E2] font-black text-[#0C3756] 
                 text-xl md:text-4xl mt-5 py-2.5 px-[70px] rounded-lg">
               Projects
            </div>         
       </div>

       <div className="proj grid grid-cols-1 md:grid-cols-3 mt-5 place-items-center">

       {ProjectDev.map((item, index) => (
            <div key={index} className="proj text-[#0C3756] bg-[#B7D9E2] w-[350px] h-[350px] rounded-lg mb-5">
                <img src={item.img} className="rounded-tl-lg rounded-tr-lg w-[350px] h-[165px]" />
                <h1 className="nameproj my-2 text-center font-bold">{item.name}</h1>
                <p className="desproj1 mx-3 text-xs md:text-sm text-justify">{item.des1}</p>
                <p className="desproj2 mx-3 mb-5 text-xs md:text-sm text-justify">{item.des2}</p>
                <a href={item.link1} target="_blank">
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} 
                  size="xl" style={{marginLeft: "140px"}} />
                </a>
                <a href={item.link2} target="_blank">
                  <FontAwesomeIcon icon={faCode} 
                  size="xl" style={{marginLeft: "20px"}} />
                </a>
            </div>))}

        {ProjectData.map((item, index) => (
            <div key={index} className="proj text-[#0C3756] bg-[#FFF9BA] w-[350px] h-[350px] rounded-lg mb-5">
                <img src={item.img} className="rounded-tl-lg rounded-tr-lg w-[350px] h-[165px]" />
                <h1 className="nameproj my-2 text-center font-bold">{item.name}</h1>
                <p className="desproj1 mx-3 text-xs md:text-sm text-justify">{item.des1}</p>
                <p className="desproj2 mx-3 mb-5 text-xs md:text-sm text-justify">{item.des2}</p>
                <a href={item.link1} target="_blank">
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} 
                  size="xl" style={{marginLeft: "140px"}} />
                </a>
                <a href={item.link2} target="_blank">
                  <FontAwesomeIcon icon={faCode} 
                  size="xl" style={{marginLeft: "20px"}} />
                </a>
            </div>))}
        </div>
        

        </> 
    )
}

export default ProjectsMe;