import { HiMoon, HiSun } from 'react-icons/hi';

import { useDarkMode } from 'context/DarkModeContext';

const DarkMode = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div>
      <button type='button' onClick={toggleDarkMode}>
        {isDarkMode ? <HiSun /> : <HiMoon />}
      </button>
    </div>
  );
};

export default DarkMode;
