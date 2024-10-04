import Header from "./Components/Header";
import { Route, Routes } from "react-router";

import NotFound from "./Pages/NotFound";


const App = () => {
  return(
    <div>
      <Header/>
      <div className="Page">
        <Routes>
          <Route path="/*" element={<NotFound />}/>
        </Routes>
      </div>
    </div>
  );
}
export default App;