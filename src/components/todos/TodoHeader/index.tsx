import DarkMode from 'components/common/DarkMode';

import { Filter, FILTERS } from 'types/todos';
import styles from './styles.module.css';

interface TodoHeaderProps {
  currentFilter: Filter;
  onFilterChange: (filter: Filter) => void;
}

const TodoHeader = ({ currentFilter, onFilterChange }: TodoHeaderProps) => {
  return (
    <header className={styles.header}>
      <DarkMode />

      <ul className={styles.filters}>
        {FILTERS.map((filter, index) => (
          <li key={`filter-${filter}-${index}`}>
            <button
              type='button'
              className={`${styles.filter} ${
                currentFilter === filter ? styles.selected : ''
              }`}
              onClick={() => onFilterChange(filter)}
            >
              {filter}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default TodoHeader;
