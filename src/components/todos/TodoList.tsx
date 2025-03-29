import { useState } from 'react';

import { Todo } from 'types/todos';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';

const initialTodos = [
  { id: 1, text: 'Study React', isCompleted: false },
  { id: 2, text: 'Study TypeScript', isCompleted: true },
  { id: 3, text: 'Study Next.js', isCompleted: false },
];

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const handleAdd = (text: string) => {
    setTodos((prev) => [...prev, { id: Date.now(), text, isCompleted: false }]);
  };

  const handleDelete = (id: number) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  const handleUpdate = (updatedTodo: Todo) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === updatedTodo.id ? updatedTodo : item))
    );
  };

  return (
    <section>
      <ul>
        {todos.map((item) => (
          <TodoItem
            key={`todo-${item.id}`}
            todo={item}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          />
        ))}
      </ul>

      <AddTodo onAdd={handleAdd} />
    </section>
  );
};

export default TodoList;
