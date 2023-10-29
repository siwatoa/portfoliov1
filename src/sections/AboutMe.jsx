import { AboutA } from "../contents/AboutMe";
import { AboutB } from "../contents/AboutMe";
import { AboutC } from "../contents/AboutMe";
import { AboutD } from "../contents/AboutMe";
import { AboutE } from "../contents/AboutMe";

import genlogo from "../assets/genlogo.png";
import tglogo from "../assets/tglogo.png";
import cafelogo from "../assets/internetlogo.png";
import mulogo from "../assets/mahidologo.png";
import rmutlogo from "../assets/rmutlogo.png"

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';

import { TechSet } from "../contents/AboutMe";
import { SoftSet } from "../contents/AboutMe";

import { Element } from "react-scroll";

const AboutMe = () => {
    return (
        <>
            <Element name="AboutMe">
            <div className="wordcov1 inline-block flex justify-left ml-5 mt-10 md:ml-0 md:mt-0 md:justify-center" id="About-section">
            <div className="word1 bg-[#B7D9E2] font-bold text-[#0C3756] 
                 text-xl md:text-4xl mt-10 md:mt-40 py-2.5 px-2.5 rounded-tl-lg rounded-bl-lg">
               Work Experiences
            </div>
            <div className="word1 bg-[#FFF9BA] font-bold text-[#0C3756] 
                 text-xl md:text-4xl mt-10 md:mt-40 py-2.5 px-2.5 rounded-tr-lg rounded-br-lg">
               Education
            </div>
            </div>
          

            <VerticalTimeline>
              
              <VerticalTimelineElement 
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(183, 217, 226)', color: '#0C3756' }}
                contentArrowStyle={{ borderRight: '14px solid  rgb(183, 217, 226)' }}
                iconStyle={{background:'#FFFFFF', color:"#FFFFFF"}}
                icon={<img src={genlogo} alt="genlogo"/>}>
              <h3 className="vertical-timeline-element-title font-black">{AboutA.pos}</h3>
              <h3 className="vertical-timeline-element-title font-semibold">{AboutA.yrplace}</h3>
              <h4 className="vertical-timeline-element-subtitle mt-5">{AboutA.des1}</h4>
              <h4 className="vertical-timeline-element-subtitle">{AboutA.des2}</h4>
              </VerticalTimelineElement>

              <VerticalTimelineElement 
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(183, 217, 226)', color: '#0C3756' }}
                contentArrowStyle={{ borderRight: '14px solid  rgb(183, 217, 226)' }}
                iconStyle={{background:'#FFFFFF', color:"#FFFFFF"}}
                icon={<img src={tglogo} alt="tglogo" />}>
              <h3 className="vertical-timeline-element-title font-black">{AboutB.pos}</h3>
              <h3 className="vertical-timeline-element-title font-semibold">{AboutB.yrplace}</h3>
              <h4 className="vertical-timeline-element-subtitle mt-5">{AboutB.des1}</h4>
              <h4 className="vertical-timeline-element-subtitle">{AboutB.des2}</h4>
              <h4 className="vertical-timeline-element-subtitle">{AboutB.des3}</h4>
              <h4 className="vertical-timeline-element-subtitle">{AboutB.des4}</h4>
              </VerticalTimelineElement>

              <VerticalTimelineElement 
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(183, 217, 226)', color: '#0C3756' }}
                contentArrowStyle={{ borderRight: '14px solid  rgb(183, 217, 226)' }}
                iconStyle={{background:'#FFFFFF', color:"#FFFFFF"}}
                icon={<img src={cafelogo} alt="iclogo" />}>
              <h3 className="vertical-timeline-element-title font-black">{AboutC.pos}</h3>
              <h3 className="vertical-timeline-element-title font-semibold">{AboutC.yrplace}</h3>
              <h4 className="vertical-timeline-element-subtitle mt-5">{AboutC.des1}</h4>
              </VerticalTimelineElement>

              <VerticalTimelineElement 
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(255, 249, 186)', color: '#0C3756' }}
                contentArrowStyle={{ borderRight: '14px solid  rgb(255, 249, 186)' }}
                icon={<img src={mulogo} alt="mulogo"/>}>
              <h3 className="vertical-timeline-element-title font-black">{AboutD.pos}</h3>
              <h3 className="vertical-timeline-element-title font-semibold">{AboutD.yrplace}</h3>
              <h4 className="vertical-timeline-element-subtitle mt-5">{AboutD.des1}</h4>
              </VerticalTimelineElement>

              <VerticalTimelineElement 
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(255, 249, 186)', color: '#0C3756' }}
                contentArrowStyle={{ borderRight: '14px solid  rgb(255, 249, 186)' }}
                icon={<img src={rmutlogo} alt="rmutlogo"/>}>
              <h3 className="vertical-timeline-element-title font-black">{AboutE.pos}</h3>
              <h3 className="vertical-timeline-element-title font-semibold">{AboutE.yrplace}</h3>
              <h4 className="vertical-timeline-element-subtitle mt-5">{AboutE.des1}</h4>
              </VerticalTimelineElement>

            </VerticalTimeline>
             
            <div className="word1 inline-block flex justify-left ml-5 justify-center">
            <div className="techskill bg-[#B7D9E2] font-bold text-[#0C3756] 
                 text-xl md:text-4xl mt-5 py-2.5 px-2.5 rounded-lg">
               Technical Skills
            </div>
            </div>

            <div className="alltech flex justify-center">
            <div className="text text-[#0C3756] grid grid-cols-6 md:grid-cols-9 w-[400px] md:w-[1000px] mx-5 my-5">
               {TechSet.map((item, index) => (
                 <div key={index} className={`cols-span-1 ${index % 2 === 0 ? "bg-[#B7D9E2]" : "bg-[#F0FCFE]"} rounded-lg mx-1 my-1`}>
                   <div className="flex flex-row justify-center mt-2">
                     <img src={item.img} alt={item.wd + " img"} className="w-8 h-8 md:w-12 md:h-12"/>
                   </div>
                 <div className='txtprof1 text-[6px] font-semibold text-center md:text-base my-2 break-words'>{item.wd}</div>
               </div>))}
             </div>
             </div>

            <div className="word1 inline-block flex justify-left ml-5 justify-center">
            <div className="word1 bg-[#FFF9BA] font-bold text-[#0C3756] 
                 text-xl md:text-4xl py-2.5 px-9 md:px-14 rounded-lg">
               Soft Skills
            </div>
            </div>

            <div className="alltech flex justify-center">
            <div className="text text-[#0C3756] grid grid-cols-6 w-[400px] md:w-[800px] mx-5 my-5">
               {SoftSet.map((item, index) => (
                 <div key={index} className={`cols-span-1 ${index % 2 === 0 ? "bg-[#FFF9BA]" : "bg-[#FFFBE9]"} rounded-lg mx-1 my-1`}>
                   <div className="flex flex-row justify-center mt-2">
                     <img src={item.img} alt={item.wd + " img"} className="w-8 h-8 md:w-12 md:h-12"/>
                   </div>
                 <div className='txtprof1 text-[6px] font-semibold text-center md:text-base my-2 break-words'>{item.wd}</div>
               </div>))}
             </div>
             </div>
             </Element>
        </>
    )
}        

export default AboutMe;
            
       