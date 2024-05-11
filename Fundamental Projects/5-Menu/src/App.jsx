import { useState } from "react";
import Category from "./Components/Category";
import Menu from "./Components/Menu";
import Title from "./Components/Title";
import data from './data'
const allCategory = ["all", ...new Set(data.map((item) => item.category))]   //modified approach

const App = () => {

  const [menuItem, setMenuItem] = useState(data);
  const [category, setCategory] = useState(allCategory);

  //my approach - modified approach above
  // const tempCategories = menuItem.map((info) => info.category)
  // const tempSet = new Set(tempCategories)  //return the collection of unique values
  // const tempItems = ["all", ...tempSet];
  // const [category, setCategory] = useState(tempItems)

  function filterMenu(menu) {
    if(menu === 'all'){
      setMenuItem(data)
      return;
    }
    const filteredItems = data.filter((items) => items.category === menu)
    setMenuItem(filteredItems)
  }

  return (
    <main className="border-2 border-black p-10">
      <Title text={"Our Menu"} />
      <Category category={category} filterMenu={filterMenu} />
      <Menu menuItem={menuItem} />
    </main>
  )
};

export default App;
