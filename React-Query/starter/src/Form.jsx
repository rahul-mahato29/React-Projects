import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import customFetch from './utils';
import {toast} from 'react-toastify';
import { useCreateTask } from './ReactQueryCustomHooks';

const Form = () => {
  const [newItemName, setNewItemName] = useState('');
  const queryClient = useQueryClient();

  //create Task - custom-hook
  const {createTask, isLoading} = useCreateTask({setNewItemName});

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(newItemName);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>task bud</h4>
      <div className='form-control'>
        <input
          type='text '
          className='form-input'
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
        />
        <button type='submit' className='btn' disabled={isLoading}>
          add task
        </button>
      </div>
    </form>
  );
};
export default Form;
