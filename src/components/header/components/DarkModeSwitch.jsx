import { useContext } from 'react';
import { DataContext } from 'global/contexts/DataContext';
export const DarkModeSwitch = () => {
  const { mode, changeMode } = useContext(DataContext);
  return (
    <div className="dark-mode-switch">
      <button
        onClick={changeMode}
      >
        {mode ? 'Dark Mode' : 'Light Mode'}
      </button>
    </div>
  );
}