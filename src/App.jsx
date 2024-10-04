import Header from "./Components/Header";
import { Route, Routes } from "react-router";

import NotFound from "./Pages/NotFound";
import Profile from "./Pages/Profile";
import Home from "./Pages/Home";
import Notifications from "./Pages/Notifications";


const App = () => {
  return(
    <div>
      <Header/>
      <div className="Page">
        <Routes>
          <Route path="/*" element={<NotFound />}/>
          <Route path="/Profile" element={<Profile />}/>
          <Route path="/" element={<Home />}/>
          <Route path="/Home" element={<Home />}/>
          <Route path="/Notifications" element={<Notifications />}/>
        </Routes>
      </div>
    </div>
  );
}
export default App;