import SearchBar from "../../components/SearchBar/SearchBar";
import HomeCSS from "./Home.module.css";

function Home() {
  return (
    <div id={HomeCSS["items-container"]}>
      <h1>Search</h1>
      <SearchBar />
    </div>
  );
}

export default Home;
