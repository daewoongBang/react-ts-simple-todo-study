interface TodoItemProps {
  text: string;
  isCompleted: boolean;
}

const TodoItem = ({ text, isCompleted }: TodoItemProps) => {
  return <li>{text}</li>;
};

export default TodoItem;
