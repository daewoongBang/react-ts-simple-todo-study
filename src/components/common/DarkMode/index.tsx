import { HiMoon, HiSun } from 'react-icons/hi';

import { useDarkMode } from 'context/DarkModeContext';
import styles from './styles.module.css';

const DarkMode = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button className={styles.button} type='button' onClick={toggleDarkMode}>
      {isDarkMode ? <HiSun /> : <HiMoon />}
    </button>
  );
};

export default DarkMode;
