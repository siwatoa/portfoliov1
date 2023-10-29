import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faSeedling } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faSquareCaretRight } from "@fortawesome/free-regular-svg-icons";
import { textStatic } from "../contents/HomeFirst";
import mypicimg  from "../assets/mypic.png";
import fileResume from "../assets/resume-siwat-photinam.pdf"
import { Element } from "react-scroll";

const HomeFirst = () => {
    const [text] = useTypewriter({
        words: ["An Ex-System Analyst","Passionate on Data","Becoming a Web Developer"],
        loop: {},
        typeSpeed: 150,
        delaySpeed: 80,
    });
    return(
        <>
        <Element name="HomeFirst">
        <section className="home grid grid-cols-1 md:grid-cols-2 mt-20 md:mt-32 mx-6 mt-20 md:mb-32">

        <div className="intro col-span-1 order-2 md:order-1 justify-self-center">
          <div className="arrangeintro ml-15 md:ml-10">
           <h1 className="text-xl md:text-3xl mt-5 text-[#B7D9E2]">{textStatic.txt1}{' '} 
             <span className="font-bold text-[#F0FCFE]">{textStatic.txt2}</span></h1>
           <h2 className="text-xl md:text-3xl text-[#B7D9E2]">{textStatic.txt3}{' '}
             <span className="font-bold text-[#F0FCFE]">{text}</span>
             <Cursor />
           </h2>
          </div>

           <p className="text-base text-[#B7D9E2] mt-5 mb-1 md:ml-10">
             <FontAwesomeIcon icon={faSquareCaretRight} style={{marginRight: "10px"}}/>
             {textStatic.txt4} {' '}<span className="text-[#F0FCFE]">{textStatic.txt5} {' '}</span> 
           {textStatic.txt6} {' '}<span className="text-[#F0FCFE]">{textStatic.txt7}</span>
           </p>
        
           <p className="text-base text-[#B7D9E2] mb-1 md:ml-10">
             <FontAwesomeIcon icon={faSquareCaretRight} style={{marginRight: "10px"}}/>
            {textStatic.txt8} {' '}<span className="text-[#F0FCFE]">{textStatic.txt9} {' '}</span>
            {textStatic.txt10} {' '}<span className="text-[#F0FCFE]">{textStatic.txt11} {' '}</span>
            {textStatic.txt12} {' '}<span className="text-[#F0FCFE]">{textStatic.txt13}</span>   
           </p>
        
           <p className="text-base text-[#B7D9E2] md:ml-10">
             <FontAwesomeIcon icon={faSquareCaretRight} style={{marginRight: "10px"}}/>
           <span className="text-[#F0FCFE]">{textStatic.txt14} {' '}</span> 
           {textStatic.txt15} {' '}<span className='text-[#F0FCFE]'>{textStatic.txt16} {' '}</span>{textStatic.txt17} {' '}
           <span className="text-[#F0FCFE]">{textStatic.txt18}</span>
           </p>   

        <div className="linkbutton flex justify-center items-center mt-5">
           <a href={fileResume} target="_blank">
           <button className="font-bold text-sm py-1.5 px-2.5
                   bg-[#B7D9E2] [text-[#0C3756] rounded-lg hover:scale-105">
                   <FontAwesomeIcon icon={faDownload} />{' '} {textStatic.txt19}
           </button>
           </a>

           <a href="mailto:siwatoa@gmail.com" target="_blank">
           <button className="font-bold text-sm py-1.5 px-2.5 ml-2.5
                   bg-[#B7D9E2] [text-[#0C3756] rounded-lg hover:scale-105">
                   <FontAwesomeIcon icon={faEnvelope} />{' '} {textStatic.txt20}
           </button>
           </a>
           
           <a href="https://www.linkedin.com/in/siwat-photinam/" target="_blank" className="hover:scale-105">
           <FontAwesomeIcon icon={faLinkedin} size="2xl" 
              style={{color: "#B7D9E2", marginLeft: "10px"}}/>
           </a>
        
           <a href="https://github.com/siwatoa" target="_blank" className="hover:scale-105">
           <FontAwesomeIcon icon={faGithub} size="2xl" 
              style={{color: "#B7D9E2", marginLeft: "10px"}}/>
           </a>
           </div>
        </div>

        <div className="picHome col-span-1 order-1 md:order-2 justify-self-center">
          <img src={mypicimg} alt="mypic image" 
           className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full border-2" />
        </div>

      </section>
      </Element>  
    </>
    )
}

export default HomeFirst; 

// ml-[50px] md:ml-[100px]
