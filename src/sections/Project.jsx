import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { ProjectList } from "../contents/Project";
import { Element } from "react-scroll";

const ProjectsMe = () => {
    return(
       <>
       <Element name="ProjectsMe">
       <div className="word1 inline-block flex justify-center">
            <div className="webdev bg-[#F0FCFE] font-bold text-[#0C3756] 
                 text-lg md:text-4xl mt-10 py-2.5 pr-1 pl-2.5 rounded-tl-lg rounded-bl-lg">
               Projects
            </div>
            <div className="webdev bg-[#B7D9E2] font-bold text-[#0C3756] 
                 text-lg md:text-4xl mt-10 py-2.5 px-1.5">
               Web Developer
            </div>
            <div className="webdev bg-[#FFF9BA] font-bold text-[#0C3756] 
                 text-lg md:text-4xl mt-10 py-2.5 pr-2.5 rounded-tr-lg rounded-br-lg">
               Data Analyst
            </div>             
       </div>

       <div className="proj grid grid-cols-1 md:grid-cols-2 gap-5 my-5">

       {ProjectList.map((item, index) => (
            <div key={index} className={`proj text-[#0C3756] 
                 bg-[#${item.color === "blue" ? "B7D9E2" : "FFF9BA"}] 
                 w-[350px] h-[370px] rounded-lg hover:scale-105
                 ${window.innerWidth < 640 ? 'justify-self-center' : (index % 2 === 0 ? 'justify-self-end' : '')}`}>
                <img src={item.img} className="rounded-tl-lg rounded-tr-lg w-[350px] h-[165px]" />
                <h1 className="nameproj mt-3 text-center font-bold">{item.name}</h1>
                <p className="desproj1 mx-3 mt-1 text-sm"
                style={{ borderTop: `2px solid ${item.color === 'blue' ? '#5C93AA' : '#FFDD00'}`, 
                         paddingTop: '10px', marginTop: '10px' }}>{item.des1}</p>
                <p className="desproj2 mx-3 mt-1 mb-5 text-sm"
                style={{ borderBottom: `2px solid ${item.color === 'blue' ? '#5C93AA' : '#FFDD00'}`, 
                         paddingBottom: '10px', marginBottom: '10px' }}>{item.des2}</p>
                <a href={item.link1} target="_blank">
                  <span className="req1 font-medium ml-[90px]">{item.req1}</span>
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} 
                  size="lg" style={{marginLeft: "5px"}}/>
                </a>
                <a href={item.link2} target="_blank">
                  <span className="req2 font-medium text-center ml-[15px]">{item.req2}</span>
                  <FontAwesomeIcon icon={faCode} 
                  size="lg" style={{marginLeft: "5px"}} />
                </a>
            </div>))}
        
        </div>
        </Element>
        </> 
    )
};

export default ProjectsMe;
