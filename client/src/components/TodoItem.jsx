import { useDispatch } from 'react-redux';
import { deleteTodo } from '../features/todos/todoSlice';
// import { BsFillTrashFill } from 'react-icons/bs';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <div className='todo'>
      <div>{new Date(todo.createdAt).toLocaleString('en-US')}</div>
      <h2>{todo.text}</h2>
      <div className='actions'>
        <button
          // onClick={() => dispatch(deleteTodo(todo._id))}
          className='btn-edit'>
          {/* <BsFillTrashFill /> */}
          Edit
        </button>
        <button
          onClick={() => dispatch(deleteTodo(todo._id))}
          className='btn-delete'>
          {/* <BsFillTrashFill /> */}
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
