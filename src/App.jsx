import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

function AppRoutes() {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/login"
        element={<LoginPage onSwitchToSignup={() => navigate("/signup")} />}
      />
      <Route
        path="/signup"
        element={<SignupPage onSwitchToLogin={() => navigate("/login")} />}
      />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}