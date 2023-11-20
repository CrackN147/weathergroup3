import { iconUrl } from "global/config";
import { Text } from "components/elements";
export const SmallCard = ({data, onClick}) => {
  return (
    <div className="small-card"
      onClick={onClick}
    >
      <img src={`${iconUrl}${data.weather[0].icon}.png`} alt="icon"/>
      <Text>{data.weather[0].description}</Text>
    </div>
  );
};