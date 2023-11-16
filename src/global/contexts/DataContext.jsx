import {
  useState,
  createContext,
  useCallback,
  useEffect
} from "react";
import { defCity } from "global/config";
import { getData, setData } from "global/storage";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [city, setCity] = useState(defCity);
  const [mode, setMode] = useState(getData('mode') !== null ? getData('mode') : true);

  const changeCity = useCallback((city) => {
    let newCity = city.split('	-	');
    if (newCity.length > 1) {
      return setCity(newCity[0]);
    }
    setCity(defCity);
  }, []);

  const changeMode = useCallback(() => {
    setMode(!mode);
    setData('mode', !mode);
  }, [mode]);

  useEffect(() => {
    if (mode) {
      document.body.classList.remove('dark-mode');
    } else {
      document.body.classList.add('dark-mode');
    }
  }, [mode]);

  return (
    <DataContext.Provider value={{
      city,
      changeCity,
      mode,
      changeMode
    }}>
      {children}
    </DataContext.Provider>
  );
}