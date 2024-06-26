import { useState } from "react";

const MultipleInputs = () => {

  //handling controlled input in case of multiple input fields
  const [user, setUser] = useState({
    name:"",
    email:"",
    password:""
  })

  const handleChange = (e) => {
    setUser({...user, [e.target.name] : e.target.value})
  }

  function handleSubmit(e){
    e.preventDefault();
    console.log(user);
    console.log("Name : ",user.name);
    console.log("Email : ", user.password);
  }

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Multiple Inputs</h4>
        {/* name */}
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input type='text' className='form-input' id='name' value={user.name} name="name" onChange={handleChange} />
        </div>
        {/* email */}
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input type='email' className='form-input' id='email' value={user.email} name="email" onChange={handleChange} />
        </div>
        {/* email */}
        <div className='form-row'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input type='password' className='form-input' id='password' value={user.password} name="password" onChange={handleChange} />
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </div>
  );
};
export default MultipleInputs;
