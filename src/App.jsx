import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { lazy } from "react";
const HomePage = lazy(() => import("./page/HomePage/HomePage"));
const ContactsPage = lazy(() => import("./page/ContactsPage/ContactsPage"));
const RegisterPage = lazy(() => import("./page/RegisterPage/RegisterPage"));

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
}

export default App;
