import { useEffect, useState } from "react";
import Tours from "./components/Tours";
import Loading from "./components/Loading";

const url = 'https://www.course-api.com/react-tours-project';

const App = () => {

  const [loading, setLoading] = useState(true);
  const [tour, setTour] = useState([]);

  function removeTour(id) {
    const filterResult = tour.filter((info) => {
      if(info.id !== id){
        return info
      }
    })

    setTour(filterResult);
  }

  const fetchData = async () => {
    //one way
    // const tour = await fetch(url);
    // const response = await tour.json();
    // console.log(response)

    //another way
    setLoading(true)
    try{
      const tour = await fetch(url).then((response) => response.json())
      setLoading(false);
      setTour(tour)
    }
    catch(e) {
      setLoading(false);
      console.log(e);
    }
  }

  //run once at the beginning and calling fetchData() function
  useEffect(() => {
    fetchData();
  }, []);

  //before fetching the data from api
  if(loading){
    return(
      <Loading/>
    )
  }

  //when all the tour is removed
  if(tour.length === 0){
    return (
      <main className="text-center">
        <h2 className="text-xl font-bold">No Tours Left</h2>
        <button className="bg-green-200 hover:bg-green-400 p-1" onClick={() => {fetchData()}}>Refresh</button>
      </main>
    )
  }

  return (
    <main>
      <Tours tour={tour} removeTour={removeTour}/>
    </main>
  );
};
export default App;
