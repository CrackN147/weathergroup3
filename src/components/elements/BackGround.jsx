import { useContext } from "react";
import { DataContext } from "global/contexts/DataContext";
export const BackGround = (props) => {
  const { day, mode } = useContext(DataContext);
  return (
    <div className="background" style={{
      backgroundImage: `url(/images/${day?.weather?.description?.replaceAll(" ", "-")}-${mode ? "l" : "d"}.jpg)`
    }}></div>
  );
}