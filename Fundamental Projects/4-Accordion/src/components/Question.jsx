import { useState } from "react"

const Question = ({ title, info }) => {
    const [displayInfo, setDisplayInfo] = useState(false)
  
    function handleDisplay() {
      setDisplayInfo(!displayInfo)
    }
  
    return (
      <article className='border-2 border-black m-1 p-4 '>
        <div className='flex justify-between'>
          <h2 className='font-semibold'>{title}</h2>
          <div className='cursor-pointer' onClick={() => {handleDisplay()}}>{displayInfo ?  "➖" : "➕"}</div>
        </div>
        <p>{displayInfo && info}</p>
      </article>
    )
  }


export default Question;
  