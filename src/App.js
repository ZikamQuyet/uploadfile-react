import ImportData from "./components/ImportData";
import { Routes, Route } from "react-router-dom";
import Search from "./components/Search";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <header>
        <h2>TRA CỨU THÔNG TIN</h2>
        <NavBar></NavBar>
      </header>
      <Routes>
        <Route exact path="/" element={<ImportData></ImportData>}></Route>
        <Route exact path="/search" element={<Search></Search>}></Route>
      </Routes>
    </>
  );
}

export default App;
