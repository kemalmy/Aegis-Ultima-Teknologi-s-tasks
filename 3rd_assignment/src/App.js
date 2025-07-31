import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "./App.css";

import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import SignInSide from "./pages/SignInSide";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<SignInSide />} />
      <Route path="/*" element={<Layout />} />
    </Routes>
  );
}

export default App;
