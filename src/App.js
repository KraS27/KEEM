import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./Components/Navigation/Navigation";
import Landing from "./Components/Content/Landing/Landing";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MapContainer from "./Components/Content/Map/MapContainer";
import Login from "./Components/Content/Auth/Login/Login";
import {useEffect, useState} from "react";
import axios from "axios";

function App() {

const [isLoggedIn, setIsLoggedIn] = useState(false);

useEffect(() => {
    axios.get(`https://localhost:7199/auth`, {withCredentials : true})
        .then(response => {
                setIsLoggedIn(response.data.data);
        });
}, [])

return (
<div>
    <BrowserRouter>
        <Navigation isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="/map/:idEnvironment?" element={<MapContainer isLoggedIn={isLoggedIn}/>}/>
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
        </Routes>
    </BrowserRouter>
</div>
);
}

export default App;
