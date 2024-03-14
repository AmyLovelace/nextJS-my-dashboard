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

// "use client";

// import { useState } from "react";

// type Props = {
//   x: number;
//   y?: number;
// };

// export default function CounterCard({ x, y }: Props) {
//   const [number, setNumber] = useState<number>(0);

//   const click = () => {
//     setNumber(number + 1);
//   };

//   return (
//     <button className="counter-card w-full" onClick={() => click()}>
//       {`${number}`}
//     </button>
//   );
// }
// import { useState } from "react"

// export default function CounterApp() {
  
//     const [state,setCounter]= useState({
//         counter1:10,
//         counter2:20,
//         counter3:30,
//     });
  
//     const{counter1,counter2,counter3}= state;
  
//     return (
//     <>
//     <h1>Counter1 {counter1}</h1>
//     <h1>Counter2 {counter2}</h1>
//     <h1>Counter3 {counter3}</h1>

//     <hr/>
//     <button  className="btn-info" onClick={
//         () =>setCounter({
//             ...state,
//         counter1:counter1 + 1 })}> +1</button>
//     </>
//   )
// }

