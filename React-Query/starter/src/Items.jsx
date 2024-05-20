import { useQuery } from '@tanstack/react-query';
import SingleItem from './SingleItem';
import customeFetch from './utils'

//fetching data from server using react-query
const Items = ({ items }) => {
  const {isLoading, data} = useQuery({
    queryKey: ['tasks'],
    queryFn: () => customeFetch.get('/')   //custom-api
  })

  // console.log(data.data.taskList);

  if(isLoading){
    return <p>Loading...</p>
  }

  return (
    <div className='items'>
      {data.data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
