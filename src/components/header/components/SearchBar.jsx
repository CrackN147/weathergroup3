import {
  useState,
  useEffect,
  useCallback,
  useContext
} from 'react';
import { DataContext } from 'global/contexts/DataContext';
import { localData } from 'global/localData';

export const SearchBar = () => {
  const { changeCity } = useContext(DataContext);
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const changeSearchValue = useCallback((event) => {
    setSearchValue(event.target.value);
  }, []);

  const filterLocalData = useCallback(() => {
    const result = localData.filter((item) => {
      return item.toLowerCase().includes(searchValue.toLowerCase());
    }).map((item) => item.replace(/[0-9/./-/_]/g, '-').replace(/-+/g, '-').replace('-	-', '-'));
    setSearchResult(result);
  }, [searchValue]);

  const processCity = useCallback((city) => {
    changeCity(city);
    setSearchResult([]);
    setSearchValue('');
  }, [changeCity]);

  useEffect(() => {
    if (searchValue.length >= 3) {
      const timer = setTimeout(() => {
        filterLocalData();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [searchValue, filterLocalData]);

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={searchValue}
        onChange={changeSearchValue}
      />
      {searchValue.length >= 3 ?
        <div className="search-bar-result">
          {searchResult.length > 0 ?
            searchResult.map((item, index) => (
              <div key={`search-result-list-item-${index}`}
                onClick={() => processCity(item)}
              >
                {item}
              </div>
            ))
            :
            <div className="search-bar-no-result">
              No result
            </div>
          }
        </div>
        : null
      }
    </div>
  );
}