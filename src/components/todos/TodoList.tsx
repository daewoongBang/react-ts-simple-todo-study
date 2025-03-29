import { Todo } from 'types/todos';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: Todo[];
  onDelete: (id: number) => void;
  onUpdate: (updatedTodo: Todo) => void;
}

const TodoList = ({ todos, onDelete, onUpdate }: TodoListProps) => {
  return (
    <section>
      <ul>
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
