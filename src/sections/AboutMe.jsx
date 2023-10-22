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

const AboutMe = () => {
    return (
        <>
            <div className="wordcov1 inline-block flex justify-left ml-5 md:ml-0 md:justify-center">
            <div className="word1 bg-[#B7D9E2] font-black text-[#0C3756] 
                 text-xl md:text-4xl mt-10 md:mt-40 py-2.5 px-2.5 rounded-tl-lg rounded-bl-lg">
               Work Experiences
            </div>
            <div className="word1 bg-[#FFF9BA] font-black text-[#0C3756] 
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
         
        </>
    )
}        

export default AboutMe;
            
       