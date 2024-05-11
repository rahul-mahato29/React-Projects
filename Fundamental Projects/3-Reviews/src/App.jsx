import { useState } from 'react';
import people from './data'


const App = () => {

  const [index, setIndex] = useState(0)
  const {name, job, image, text} = people[index]   //important

  function moveLeft(){
    setIndex((currentIndex) => {
      let newIndex = currentIndex - 1;
      if(newIndex < 0){
        return people.length - 1;
      }
      return newIndex;
    });
  }

  function moveRight(){
    setIndex((currentIndex) => {
      let newIndex = currentIndex + 1;
      if(newIndex > 3){
          return 0;
      }
      return newIndex;
    });
  }

  function generateRandom(){
    let random = Math.floor(Math.random() * 3);
    setIndex((currentIndex) => {
      if(random === currentIndex){
        return random+1;
      }

      return random;
    })
  }

  return (
    <main className='border-2 border-black flex justify-around bg-blue-200'>
      <article className='border-2 border-black m-10 w-72 rounded-lg p-2 text-center bg-white'>
        <img className='border-2 border-black h-48 w-full' src={image} alt={name} />
        <h3 className='m-1 text-base font-semibold'>{name}</h3>
        <h4 className='text-sm font-extrabold text-blue-400 m-1'>{job}</h4>
        <p className='p-1'>{text}</p>
        <div className='mt-2 flex justify-between'>
          <button className='bg-blue-200 hover:bg-blue-400 p-1 rounded pl-2 pr-2' onClick={moveLeft}>left</button>
          <button className="bg-blue-200 hover:bg-blue-400 p-1 rounded pl-2 pr-2" onClick={generateRandom}>Random Person</button>
          <button className='bg-blue-200 hover:bg-blue-400 p-1 rounded pl-2 pr-2' onClick={moveRight}>right</button>
        </div>
      </article>
    </main>
  )
};
export default App;
