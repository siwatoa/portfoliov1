import { TechSet } from "../contents/SkillsMe";
import { SoftSet } from "../contents/SkillsMe";

const SkillsMe = () => {
    return (
        <>
        <div className="wordcov1 inline-block flex justify-center">
            <div className="word1 bg-[#B7D9E2] font-black text-[#0C3756] 
                 text-xl md:text-4xl mt-10 md:mt-40 py-2.5 px-2.5 rounded-tl-lg rounded-bl-lg">
               Technical Skills
            </div>
            <div className="word1 bg-[#FFF9BA] font-black text-[#0C3756] 
                 text-xl md:text-4xl mt-10 md:mt-40 py-2.5 px-2.5 rounded-tr-lg rounded-br-lg">
               Soft Skills
            </div>
        </div>

        <div className ="grid grid-cols-2 gap-5 mx-5 my-5 ">
        
        <div className ="idptechset">
        <div className="techset cols-span-1 grid grid-cols-3 text-[#0C3756]">
          {TechSet.map((item, index) => (
            <div key={index} className={`cols-span-1 ${index % 2 === 0 ? "bg-[#86B6C6]" : "bg-[#B7D9E2]"} rounded-lg mx-1 my-1`}>
               <div className="flex flex-row justify-center mt-2">
                  <img src={item.img} alt={item.wd + " img"} className="w-8 h-8 md:w-12 md:h-12" />
               </div>
                  <div className='txtprof1 text-[8px] font-bold text-center md:text-xl my-2 break-words'>{item.wd}</div>
            </div>))}
        </div>
        </div>
        
        <div className="idpsoftset">
        <div className="softset cols-span-1 grid grid-cols-3 text-[#0C3756]">
          {SoftSet.map((item, index) => (
            <div key={index} className={`cols-span-1 ${index % 2 === 0 ? "bg-[#FFF9BA]" : "bg-[#FFFED9]"} rounded-lg mx-1 my-1`}>
               <div className="flex flex-row justify-center mt-2">
                  <img src={item.img} alt={item.wd + " img"} className="w-8 h-8 md:w-12 md:h-12" />
               </div>
                  <div className='txtprof1 text-[8px] font-bold text-center md:text-xl my-2 break-words'>{item.wd}</div>
            </div>))}
        </div>
        </div>
        
        </div>
     </>
    )
}

export default SkillsMe;