import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Solo from "../pages/Solo";
import PageNotFound from "../pages/PageNotFound";
import Sidebar from "../layout/Sidebar";
import Watch from "../pages/Watch";
import Cup from "../pages/Cup";
import Friendly from "../pages/Friendly";
import Store from "../pages/Store";

const PublicRoutes = () => {
  return (
    <>
      <Sidebar>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/*" element={<PageNotFound />} />
          <Route path="/solo" element={<Solo />} />
          <Route path="/friendly" element={<Friendly />} />
          <Route path="/cup" element={<Cup />} />
          <Route path="/watch" element={<Watch />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </Sidebar>
    </>
  );
};

export default PublicRoutes;
