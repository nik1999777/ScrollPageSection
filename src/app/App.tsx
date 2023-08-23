import PageScroll from "../components/PageScroll";
import iconsStackData from "../json/icons-stack.json";

const { pages } = iconsStackData;

const App = () => {
  return <PageScroll pages={pages as any} />;
};

export default App;
