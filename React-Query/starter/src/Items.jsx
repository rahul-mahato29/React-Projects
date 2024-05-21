import { useFetchTasks } from './ReactQueryCustomHooks';
import SingleItem from './SingleItem';

const Items = () => {

  const {isLoading, data} = useFetchTasks();  //custom-hook

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
