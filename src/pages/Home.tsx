import { useEffect, useMemo, useState } from 'react';

import TodoHeader from 'components/todos/TodoHeader';
import TodoList from 'components/todos/TodoList';
import AddTodo from 'components/todos/AddTodo';

import { Todo, Filter, FILTERS } from 'types/todos';
import { DarkModeProvider } from 'context/DarkModeContext';
import {
  loadJsonFromLocalStorage,
  saveJsonToLocalStorage,
} from 'utils/localStorage';

const Home = () => {
  const [todos, setTodos] = useState<Todo[]>(
    () => loadJsonFromLocalStorage<Todo[]>('todos') || []
  );
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

  useEffect(() => {
    saveJsonToLocalStorage('todos', todos);
  }, [todos]);

  return (
    <DarkModeProvider>
      <TodoHeader currentFilter={filter} onFilterChange={setFilter} />
      <TodoList
        todos={filteredTodos}
        onDelete={handleDelete}
        onUpdate={handleUpdate}
      />
      <AddTodo onAdd={handleAdd} />
    </DarkModeProvider>
  );
};

export default Home;
