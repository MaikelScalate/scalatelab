"use client";

import { useEffect, useState } from "react";

import { AnimatePresence } from "framer-motion";

import Step1 from "./scenes/Step1";
import Step2 from "./scenes/Step2";
import Step3 from "./scenes/Step3";

type Props = {
  play: boolean;
};

export default function AnalysisAnimation({
  play,
}: Props) {

const [step,setStep]=useState(1);

useEffect(() => {
  if (!play) return;

  setStep(1);

  const interval = setInterval(() => {
    setStep((current) => {
      if (current === 1) return 2;
      if (current === 2) return 3;
      return 1;
    });
  }, 5000);

  return () => {
    clearInterval(interval);
  };
}, [play]);

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