import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
// import Result from "./page/Result";

function App() {
  return (
    <main>
      <div className="main">
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} /> 
          {/* <Route path="/predict" element={<Result />} />     */}
          </Routes>
      </BrowserRouter>
      </div>
    </main>
  );
}

export default App;
