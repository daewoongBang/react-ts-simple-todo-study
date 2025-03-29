import { useState } from 'react';
import TodoItem from './TodoItem';

interface Todo {
  id: number;
  text: string;
  isCompleted: boolean;
}

const initialTodos = [
  { id: 1, text: '할 일 1', isCompleted: false },
  { id: 2, text: '할 일 2', isCompleted: true },
  { id: 3, text: '할 일 3', isCompleted: false },
];

const TodoList = () => {
  const [todos] = useState<Todo[]>(initialTodos);

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
    </section>
  );
};

export default TodoList;
