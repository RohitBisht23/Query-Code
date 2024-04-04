import Header from "./Components/Header/Header";
import Index from "./Components/OverFlow/Index";
import Questions from "./Components/AskQuestions/Questions";
import ViewQuestion from "./Components/ViewQuestion/Index";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
        <Route path="/add-question" element={<Questions/>} />
        <Route path="/question" element={<ViewQuestion/>} />
          <Route path="/" element={<Index />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
