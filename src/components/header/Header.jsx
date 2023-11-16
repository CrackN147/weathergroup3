import {
  SearchBar,
  DarkModeSwitch
} from './components';
export const Header = (props) => {
  return (
    <header>
      <SearchBar />
      <DarkModeSwitch />
    </header>
  );
};