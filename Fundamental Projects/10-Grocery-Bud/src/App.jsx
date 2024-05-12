import { useState } from "react";
import Form from "./Components/Form";
import {nanoid} from 'nanoid';

const App = () => {

  const [items, setItems] = useState([])
  console.log("items : ", items)

  function addItem(val){
    const newItem = {
      name: val,
      completed: false,
      id: nanoid()
    }

    setItems([...items, newItem]);
  }

  return (
    <main>
      <Form addItem={addItem}/>
    </main>
  )
};

export default App;
