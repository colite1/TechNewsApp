import Pagination from "./components/Pagination";
import Search from "./components/Search";
import Stories from "./components/Stories";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Search />
      <Pagination />
      <Stories />
    </div>
  );
}
