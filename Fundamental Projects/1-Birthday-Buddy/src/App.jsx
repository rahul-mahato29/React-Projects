import { useState } from 'react';
import data from './data'
import List from './Components/List';

const App = () => {

  const [detail, setDetail] = useState(data);
  return (
    <main>
      <section className='container'>
        <h3>{detail.length} Birthdays Today</h3>
        <List detail={detail} />
        <button className='btn btn-block' onClick={() => { setDetail([]) }}>Clear All</button>
      </section>
    </main>
  )
};
export default App;
