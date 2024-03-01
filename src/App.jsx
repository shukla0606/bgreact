import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Btn from './Btn'

function App() {
  const [color, setColor] = useState("olive");

  


  console.log(color);
  return (
    <>
      <div className="w-screen h-screen duration-200"
        style={{ backgroundColor: color }}
      >

        <div className="fixed flex flex-wrap justify-center  px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 rounded-3xl">
            <button
              className='outline-none px-4  py-1 rounded-md shadow-lg'
              style={{ backgroundColor: "red" }}
              onClick={()=>{setColor("red")}}
            >Red</button>
            <button
            onClick={()=>{setColor("green")}}
              className='outline-none px-4  py-1 rounded-md shadow-lg'
              style={{ backgroundColor: "green" }}
            >green</button>
            <button
              className='outline-none px-4  py-1 rounded-md shadow-lg'
              style={{ backgroundColor: "yellow" }}
              onClick={()=>{setColor("yellow")}}
            >yellow</button>
            <button
              className='outline-none px-4  py-1 rounded-md shadow-lg'
              style={{ backgroundColor: "pink" }}
              onClick={()=>{setColor("pink")}}
            >pink</button>
            <button
              className='outline-none px-4  py-1 rounded-md shadow-lg'
              style={{ backgroundColor: "gray" }}
              onClick={()=>{setColor("gray")}}
            >gray</button>
            <button
              className='outline-none px-4  py-1 rounded-md shadow-lg text-black'
              style={{ backgroundColor: "white" }}
              onClick={()=>{setColor("white")}}
            >white</button>

          </div>

        </div>


      </div>

    </>
  )
}

export default App
