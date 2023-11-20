import { 
  Header,
  Footer,
  BigCard,
  Carousel,
  BackGround
} from "./components";
import { DataProvider } from "global/contexts/DataContext";
export const App = () => {
  return (
    <DataProvider>
      <BackGround />
      <Header />
      <BigCard />
      <Carousel />
      <Footer />
    </DataProvider>
  );
}
