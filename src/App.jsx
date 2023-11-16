import { 
  Header,
  Footer,
  BigCard,
  Carousel
} from "./components";
import { DataProvider } from "global/contexts/DataContext";
export const App = () => {
  return (
    <DataProvider>
      <Header />
      <BigCard />
      <Carousel />
      <Footer />
    </DataProvider>
  );
}
