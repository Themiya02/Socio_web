import { useState } from "react";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

export default function App() {
 // දැනට අද හදන Login page එක මුලින් පෙන්නන්න 'login' දාමු
  const [currentPage, setCurrentPage] = useState("login");

  if (currentPage === "signup") {
    return <SignupPage onSwitchToLogin={() => setCurrentPage("login")} />;
  }

  return <LoginPage onSwitchToSignup={() => setCurrentPage("signup")} />;
}