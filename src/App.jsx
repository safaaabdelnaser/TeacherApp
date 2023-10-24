import SideBar from "./Components/SideBar/sideBar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Teachers from "./Pages/Teachers/Teachers";
import Students from "./Pages/Students/Students";
import Report from "./Pages/Report/Report";
import Header from "./Components/Header/Header";

function App() {
  return (
    <>
      <SideBar />
      <div className="mr-[278px] p-6  ">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/students" element={<Students />} />
          <Route path="/report" element={<Report />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
