import { Routes, Route } from "react-router-dom";
import Menu from "../pages/Menu";
import QRCode from "../pages/QRCode";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<QRCode />} />
      <Route path="/menu" element={<Menu />} />
    </Routes>
  );
};

export default AppRoutes;
