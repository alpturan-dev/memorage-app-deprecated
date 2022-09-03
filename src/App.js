import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Collections from './pages/Collections';
import Collection from './pages/Collection';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/collection" element={<Collection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
