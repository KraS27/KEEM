import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./Components/Navigation/Navigation";
import Landing from "./Components/Content/Landing/Landing";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import TestMap from "./Components/Content/Map/TestMap";
const API_KEY = process.env.REACT_APP_API_KEY;
console.log(API_KEY);

function App() {
  return (
    <div>
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route path="/" element={<Landing/>}/>
                <Route path="/map" element={<TestMap/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
