import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Collections from './pages/Collections';
import Collection from './pages/Collection';
import { CollectionsProvider } from "./context/CollectionsContext";

function App() {
  return (
      <div className='font-ubuntu'>
        <CollectionsProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" exact element={<Dashboard />} />
              <Route path="/collections" element={<Collections />} />
              <Route path="/collection" element={<Collection />} />
            </Routes>
          </BrowserRouter>
        </CollectionsProvider>
      </div>

  );
}

export default App;
