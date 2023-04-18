import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./Components/Navigation/Navigation";
import Landing from "./Components/Content/Landing/Landing";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Map from "./Components/Content/Map/Map";

function App() {
  return (
    <div>
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route path="/" element={<Landing/>}/>
                <Route path="/map/*" element={<Map/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
