import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoForm from '../components/TodoForm';
import TodoItem from '../components/TodoItem';
import Spinner from '../components/Spinner';
import { getTodos, reset } from '../features/todos/todoSlice';

function Dashboard() {
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false);

  const { todos, isLoading, isError, message } = useSelector(
    (state) => state.todos
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    dispatch(getTodos());

    return () => {
      dispatch(reset());
    };
  }, [isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className='heading'>
        <h1>Welcome Mahendra</h1>
        <p>Todos Dashboard</p>
      </section>
      <button onClick={() => setShowForm(!showForm)} className='btn-add'>
        {/* <BsFillTrashFill /> */} Add
      </button>
      {showForm ? <TodoForm /> : ''}

      <section className='content'>
        {todos.length > 0 ? (
          <div className='todos'>
            {todos.map((todo) => (
              <TodoItem key={todo._id} todo={todo} />
            ))}
          </div>
        ) : (
          <h3>You have not set any todos</h3>
        )}
      </section>
    </>
  );
}

export default Dashboard;
