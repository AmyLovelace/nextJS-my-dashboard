import {CartCounter} from '@/shopping-cart'

export default function CounterPage() {

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carro</span> 
      <CartCounter/>
    </div>

  );
}
