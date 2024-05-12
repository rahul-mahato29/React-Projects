import { useState } from "react";
import { data } from '../../../data'   //{} -> to get a specific data from the data.js(api)

const UserChallenge = () => {

  
  const [name, setName] = useState("");
  const [user, setUser] = useState(data);
  
  function handleSubmit(e){
    e.preventDefault();
    
    if(!name) return;

    //data fromate {id: idVal, name: nameVal}
    const fakeId = Date.now();           //just for generating unique number
    const newUser = {id:fakeId , name}

    setUser([...user, newUser])
    setName("");
  }

  function handleRemove(id){
    const filteredUser = user.filter((info) => info.id != id);
    setUser(filteredUser)
  }


  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input type='text' className='form-input' id='name' value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
      {/* render users below */}
      <section>
        <h2>User-List</h2>
        <div>
          {user.map((user) => {
            return (
              <div key={user.id}>
                <h4>{user.name}</h4>
                <button onClick={()=>{handleRemove(user.id)}}>remove</button>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  );
};
export default UserChallenge;
