import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import FeedPage from "./pages/FeedPage";
import ProtectedRoute from "./ProtectedRoute";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthPage />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<FeedPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
