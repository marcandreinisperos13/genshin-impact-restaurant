import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import OrderingLayout from "./layout/OrderingLayout";
import Menu from "./pages/Menu";
import Home from "./pages/Home";

export default function App() {
  return (
    <Router basename="/teyvat-ordering-system">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<OrderingLayout />}>
            <Route index element={<Menu  />} />
          </Route>
        </Routes>
      </main>

      <Footer />
    </Router>
  )
}