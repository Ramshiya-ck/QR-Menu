import { Routes, Route } from "react-router-dom";
import Menu from "../pages/Menu";
import QRCode from "../pages/QRCode";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Menu />} />
      <Route path="/qr" element={<QRCode />} />
    </Routes>
  );
};

export default AppRoutes;
