import { Filter, FILTERS } from 'types/todos';

import { capitalize } from 'utils/string';

interface TodoHeaderProps {
  filter: Filter;
  onFilterChange: (filter: Filter) => void;
}

const TodoHeader = ({ filter, onFilterChange }: TodoHeaderProps) => {
  return (
    <header>
      <ul>
        {FILTERS.map((filter) => (
          <li key={`filter-${filter}`}>
            <button type='button' onClick={() => onFilterChange(filter)}>
              {capitalize(filter)}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default TodoHeader;
