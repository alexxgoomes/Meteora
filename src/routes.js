import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultPage from "./pages/DefaultPage";
import Home from "./pages/Home";
import News from "./pages/News";
import OurStores from "./pages/OurStores";
import Sales from "./pages/Sales";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route index element={<Home />} />
          <Route path="/nossaslojas" element={<OurStores />} />
          <Route path="/novidades" element={<News />} />
          <Route path="/promocoes" element={<Sales />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
