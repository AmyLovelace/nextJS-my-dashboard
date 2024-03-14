'use client'
import { useState } from "react";

type Props = {
  x:number
}

export default function CounterPage({x}:Props) {

  const [counter, setCounter] = useState<number>(0);

  const pressBtnPlus = () => {
    setCounter(counter + 1);
    setCounter((count) => count + 1)
  }
  const pressBtnMinus = () => {
    setCounter((less) => less - 1)

  }
  const pressBtnReset =() => setCounter(0);

  return (
    <>
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carro</span>
      <span className="text-9xl">{counter}</span>

      <div className="flex">
        <button 
        className="flex items-center  justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        onClick={pressBtnPlus}>
          +1
        </button>
        <button className="flex items-center  justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        onClick={pressBtnMinus} >
          -1
        </button>
         <button className="flex items-center  justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        onClick={pressBtnReset}>
          Reset
        </button> 

      </div>
    </div>
    </>

  );
}
