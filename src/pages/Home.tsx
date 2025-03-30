import { useMemo, useState } from 'react';

import { Todo, Filter, FILTERS } from 'types/todos';
import TodoHeader from 'components/todos/TodoHeader';
import TodoList from 'components/todos/TodoList';
import AddTodo from 'components/todos/AddTodo';

const initialTodos = [
  { id: 1, text: 'Study React', isCompleted: false },
  { id: 2, text: 'Study TypeScript', isCompleted: true },
  { id: 3, text: 'Study Next.js', isCompleted: false },
];

const Home = () => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [filter, setFilter] = useState<Filter>(FILTERS[0]);

  const filteredTodos = useMemo(() => {
    switch (filter) {
      case 'all':
        return todos;
      case 'active':
        return todos.filter((todo) => !todo.isCompleted);
      case 'completed':
        return todos.filter((todo) => todo.isCompleted);
      default:
        return todos;
    }
  }, [filter, todos]);

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
    <>
      <TodoHeader filter={filter} onFilterChange={setFilter} />
      <TodoList
        todos={filteredTodos}
        onDelete={handleDelete}
        onUpdate={handleUpdate}
      />
      <AddTodo onAdd={handleAdd} />
    </>
  );
};

export default Home;
