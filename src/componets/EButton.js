import  React, {useState, useEffect} from "react"   
import happy from "../images/emotions/happy.png"    
import sad from "../images/emotions/sad-2.png"   
import sleepy from "../images/emotions/sleepy.png"    
import suspicious from "../images/emotions/suspicious.png"    




 

const EButton = () => {  
        const [feel, setFeel] = useState('')     
        console.log(feel)
        

    return <div  className="button-box">   

            <button  onClick={()=>setFeel("happy")} className="e-btn happy" value="happy">
                <img  src={happy}  />    
            </button> 
            <button   onClick={()=>setFeel("sad")}  className="e-btn" value="sad">
            <img  src={sad}  /> 
                </button>   
            <button onClick={()=>setFeel("sleepy")}className="e-btn" value="sleepy"> 
                <img  src={sleepy}  /> 
            </button>   
            <button  onClick={()=>setFeel("sus")} className="e-btn" value="suspicious">
                <img  src={suspicious}  /> 
            </button>   


        </div>



}  


export default EButton;