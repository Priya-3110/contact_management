import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import CreateContact from "./pages/CreateContact";
import SavedContacts from "./pages/SavedContacts";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="layout">
        <Sidebar />
        <Routes>
          <Route path="/" element={<CreateContact />} />
          <Route path="/saved" element={<SavedContacts />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
