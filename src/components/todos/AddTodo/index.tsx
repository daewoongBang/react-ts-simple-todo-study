import { useState } from 'react';

import styles from './styles.module.css';

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
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type='text'
        placeholder='Add a new todo'
        value={text}
        onChange={handleChange}
      />

      <button className={styles.button} type='submit'>
        Add
      </button>
    </form>
  );
};

export default AddTodo;
