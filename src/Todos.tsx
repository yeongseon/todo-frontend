import React, { useEffect, useState } from 'react';
import { useAuth } from './AuthContext';
import Table from 'react-bootstrap/Table';

type Todo = {
  id: string;
  category: string;
  task: string;
  status: string;
};

const Todos = () => {
  const { user } = useAuth();
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    console.log("Sending request to server with jwtToken:", user.jwtToken);

    fetch(`${process.env.REACT_APP_BACKEND_DOMAIN}/api/todos`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${user.jwtToken}`
      }
    })
    .then(res => res.json())
    .then(data => {
      setTodos(data);
    })
    .catch(err => {
      console.error(err);
    });
  }, [user]);

  return (
    <div>
      <h1>Todo List</h1>
      {todos.length === 0 && <div>No todos yet.</div>}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Task</th>
            <th>Category</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.task}</td>
              <td>{todo.category}</td>
              <td>{todo.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Todos;
