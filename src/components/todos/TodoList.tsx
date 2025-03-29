import { useState } from 'react';

import TodoItem from './TodoItem';
import AddTodo from './AddTodo';

interface Todo {
  id: number;
  text: string;
  isCompleted: boolean;
}

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

  return (
    <section>
      <ul>
        {todos.map((item) => (
          <TodoItem
            key={`todo-${item.id}`}
            text={item.text}
            isCompleted={item.isCompleted}
          />
        ))}
      </ul>

      <AddTodo onAdd={handleAdd} />
    </section>
  );
};

export default TodoList;
