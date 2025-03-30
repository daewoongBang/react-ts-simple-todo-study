import TodoItem from 'components/todos/TodoItem';

import { Todo } from 'types/todos';
import styles from './styles.module.css';

interface TodoListProps {
  todos: Todo[];
  onDelete: (id: number) => void;
  onUpdate: (updatedTodo: Todo) => void;
}

const TodoList = ({ todos, onDelete, onUpdate }: TodoListProps) => {
  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {todos.map((item) => (
          <TodoItem
            key={`todo-${item.id}`}
            todo={item}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
