import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { ProjectList } from "../contents/Project";

const ProjectsMe = () => {
    return(
       <>
       <div className="word1 inline-block flex justify-center">
            <div className="webdev bg-[#FFFFFF] font-black text-[#0C3756] 
                 text-xl md:text-4xl mt-5 py-2.5 px-2.5 rounded-tl-lg rounded-bl-lg">
               Projects
            </div>
            <div className="webdev bg-[#B7D9E2] font-black text-[#0C3756] 
                 text-xl md:text-4xl mt-5 py-2.5 px-2.5">
               Developer
            </div>
            <div className="webdev bg-[#FFF9BA] font-black text-[#0C3756] 
                 text-xl md:text-4xl mt-5 py-2.5 px-2.5 rounded-tr-lg rounded-br-lg">
               Data
            </div>             
       </div>

       <div className="proj grid grid-cols-1 md:grid-cols-2 gap-5 my-5">

       {ProjectList.map((item, index) => (
            <div key={index} className={`proj text-[#0C3756] 
                 bg-[#${item.color === "blue" ? "B7D9E2" : "FFF9BA"}] 
                 w-[350px] h-[350px] rounded-lg hover:scale-105
                 ${window.innerWidth < 640 ? 'justify-self-center' : (index % 2 === 0 ? 'justify-self-end' : '')}`}>
                <img src={item.img} className="rounded-tl-lg rounded-tr-lg w-[350px] h-[165px]" />
                <h1 className="nameproj mt-3 text-center font-bold">{item.name}</h1>
                <p className="desproj1 mx-3 mt-1 text-xs md:text-sm">{item.des1}</p>
                <p className="desproj2 mx-3 mt-1 mb-5 text-xs md:text-sm">{item.des2}</p>
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

// ${window.innerWidth <= 640 ? 'justify-self-center' : 
// (index % 2 === 0 ? 'justify-self-end' : '')}`}>

{/* <div key={index} className={`proj text-[#0C3756] 
                 bg-[#${item.color === "blue" ? "B7D9E2" : "FFF9BA"}] 
                 w-[350px] h-[350px] rounded-lg md:hover:scale-105`}></div> */}