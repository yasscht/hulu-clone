import { useContext } from "react";
import Header from "./components/Header";
import Movies from "./components/Movies";
import Nav from "./components/Nav";
import MoviesContext from "./context/MoviesContext";

function App() {
  return (
    <div className="app">
      <Header />

      <Nav />
      <Movies />
    </div>
  );
}

export default App;
