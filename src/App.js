import { Home } from './Pages/Home';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import { Register } from './Pages/Register';
import { NoPage } from './Pages/NoPage';
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
    </BrowserRouter>

  );

  
}

export default App;
