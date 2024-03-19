'use client'
import { useState } from "react";

interface Props{
    value?:number
}

export function CartCounter({ value =10}:Props) {
    const [counter, setCounter] = useState(value);

  const pressBtnPlus = () => {
    setCounter(counter + 1);
    setCounter((count) => count + 1)
  }
  const pressBtnMinus = () => {
    setCounter((less) => less - 1)

  }
  const pressBtnReset =() => setCounter(value);
    return (
        <>
            <span className="text-9xl">{counter}</span>

            <div className="flex">
                <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
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
        </>
    )
}
