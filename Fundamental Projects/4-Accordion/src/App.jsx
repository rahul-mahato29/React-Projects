import { useState } from 'react';
import data from './data'
import Question from './components/Question';

const App = () => {

  const [question, setQuestion] = useState(data);

  return (
    <main>
      <section className='border-2 border-black mx-auto my-12 bg-white rounded-lg p-5 max-w-screen-md shadow-md'>
      <div className='text-center text-xl font-bold'>Question</div>
        {question.map((info) => {
          return <Question key={info.id} {...info} />
        })}
      </section>
    </main>
  )
}

export default App;
