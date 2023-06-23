import { Route, Routes } from "react-router-dom";
import './App.css';
import Sectors from "./Pages/Sectors";
import Mainlayout from "./Layout/MainLayout";
import UsersData from "./Pages/UsersDetails";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Mainlayout />}>
        <Route index element={<Sectors />} />
        <Route path={"/users"} element={<UsersData />} />
        <Route path="/sectors" element={<Sectors />} />
      </Route>
    </Routes>
  );
};

export default App;

