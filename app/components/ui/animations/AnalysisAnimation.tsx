"use client";

import { useEffect, useState } from "react";

import { AnimatePresence } from "framer-motion";

import Step1 from "./scenes/Step1";
import Step2 from "./scenes/Step2";
import Step3 from "./scenes/Step3";

export default function AnalysisAnimation() {

const [step,setStep]=useState(1);

useEffect(()=>{

const timer1=setTimeout(()=>setStep(2),4000);

const timer2=setTimeout(()=>setStep(3),8000);

const timer3=setTimeout(()=>setStep(1),12000);

return ()=>{

clearTimeout(timer1);
clearTimeout(timer2);
clearTimeout(timer3);

};

},[step]);

return(

<div
className="
relative
h-[380px]
overflow-hidden
rounded-[30px]
bg-[#111]
"
>

<AnimatePresence mode="wait">

{step===1 && <Step1 key="1"/>}

{step===2 && <Step2 key="2"/>}

{step===3 && <Step3 key="3"/>}

</AnimatePresence>

</div>

);

}