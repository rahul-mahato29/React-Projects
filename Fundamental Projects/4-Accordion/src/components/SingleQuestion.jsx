import { useState } from "react"

const SingleQuestion = ({ title, info }) => {
    const [displayInfo, setDisplayInfo] = useState(false)
  
    function handleDisplay() {
      setDisplayInfo(!displayInfo)
    }
  
    return (
      <article className='border-2 border-black m-1 p-4 '>
        <div className='flex justify-between'>
          <h2 className='font-bold text-lg text-gray-600'>{title}</h2>
          <div className='cursor-pointer border-2' onClick={() => {handleDisplay()}}>{displayInfo ?  "➖" : "➕"}</div>
        </div>
        <p>{displayInfo && info}</p>
      </article>
    )
  }


export default SingleQuestion;
  