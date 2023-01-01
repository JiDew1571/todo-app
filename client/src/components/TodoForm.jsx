import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTodo } from '../features/todos/todoSlice';

const TodoForm = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(createTodo({ text }));
    setText('');
  };

  // const onChange = (e) => {
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [e.target.name]: e.target.value,
  //   }));
  // };
  //  onChange={onChange}
  return (
    <section className='form'>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='text'>Todo</label>
          <input
            type='text'
            name='text'
            id='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <button className='btn btn-block' type='submit'>
            Add Todo
          </button>
        </div>
      </form>
    </section>
  );
};

export default TodoForm;
