import { FaTrashAlt } from 'react-icons/fa';

import { Todo } from 'types/todos';

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
    <li>
      <input type='checkbox' checked={isCompleted} onChange={handleToggle} />
      {text}

      <button type='button' onClick={handleDelete}>
        <FaTrashAlt />
      </button>
    </li>
  );
};

export default TodoItem;
