import Navigation from "./components/navigation";
import Footer from "./components/footer";
import { Home } from "./pages/Home";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <main class="flex-1">
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
