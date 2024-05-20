import { useState } from "react";
import Form from "./Components/Form";
import {nanoid} from 'nanoid';
import Items from "./Components/Items";

const App = () => {

  const [items, setItems] = useState([]);
  console.log(items)

  function addItem(val){
    const newItem = {
      name: val,
      completed: false,
      id: nanoid()
    }

    setItems([...items, newItem]);
  }

  function removeItem(id) {
    const filtedItems = items.filter((info) => info.id !== id);
    setItems(filtedItems);
  }

  function editItem(id) {
    const filtedItems = items.map((info) => {
      if(info.id === id){
        const newItem = {...info, completed: !info.completed};
        return newItem;
      }

      return info;  //if not matching with id then simply return the remaining one.
    });
    // console.log("Checking : ", filtedItems)
    setItems(filtedItems);    
  }

  return (
    <main>
      <Form addItem={addItem}/>
      <Items items={items} removeItem={removeItem} editItem={editItem}/>
    </main>
  )
};

export default App;
