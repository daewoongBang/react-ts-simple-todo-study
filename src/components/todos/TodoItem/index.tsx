import { FaTrashAlt } from 'react-icons/fa';

import { Todo } from 'types/todos';
import styles from './styles.module.css';

interface TodoItemProps {
  todo: Todo;
  onDelete: (id: number) => void;
  onUpdate: (updatedTodo: Todo) => void;
}

const TodoItem = ({ todo, onDelete, onUpdate }: TodoItemProps) => {
  const { id, text, isCompleted } = todo;

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    onUpdate({ ...todo, isCompleted: e.target.checked });
  };

  const handleDelete = () => onDelete(id);

  return (
    <li className={styles.item}>
      <input
        id={`todo-${id}`}
        className={styles.checkbox}
        type='checkbox'
        checked={isCompleted}
        onChange={handleToggle}
      />

      <label className={styles.text} htmlFor={`todo-${id}`}>
        {text}
      </label>

      <div className={styles.icon}>
        <button className={styles.button} type='button' onClick={handleDelete}>
          <FaTrashAlt />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
