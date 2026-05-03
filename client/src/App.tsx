import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css"

// components
import NotFound from "./pages/NotFound";
import Loading from "./components/Loading";

// hooks
import useLoading from "./hooks/useLoading";

// pages and layouts
import OrderingLayout from "./layout/OrderingLayout";
import Menu from "./pages/Menu";
import Home from "./pages/Home";

export default function App() {
  const isLoading = useLoading(3000);

  return isLoading ? (
    <Loading />
  ) : (
    <div className="text-[var(--text-color)]">
      <Router basename="/teyvat-ordering-system">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<OrderingLayout />}>
            <Route index element={<Menu  />} />
          </Route>
          
            <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  )
}