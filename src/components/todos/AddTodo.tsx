import { useState } from 'react';

interface AddTodoProps {
  onAdd: (text: string) => void;
}

const AddTodo = ({ onAdd }: AddTodoProps) => {
  const [text, setText] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!!text.trim()) {
      onAdd(text);

      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Add a new todo'
        value={text}
        onChange={handleChange}
      />

      <button type='submit'>Add</button>
    </form>
  );
};

export default AddTodo;
