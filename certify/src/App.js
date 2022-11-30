import "./App.css";
import Login from "./components/login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/register/Signup";
import Dashboard from "./pages/Dashboard";
import Layout1 from "./components/layout/Layout1";
import Editor from "./pages/Editor";
import Event from "./pages/Event";
import CanvasContext from "./context/canvasContext";
import { useState } from "react";
import Certificate from "./pages/Certificate";
import { AuthProvider } from "./context/authContext";
import Layout2 from "./components/layout/Layout2";
import RequireAuth from "./components/RequireAuth";
import PersistLogin from "./components/PersistLogin";
import Profile from "./pages/Profile";
import JoinEvent from "./pages/JoinEvent";
import NotFound from "./pages/NotFound";

export default function App() {
  const [canvasVal, setCanvasVal] = useState();

  const setCanvas = (canv) => {
    setCanvasVal(canv);
  };
  return (
    <AuthProvider>
      <CanvasContext.Provider
        value={{
          canvas: canvasVal,
          setCanvas,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route path="/event/join/:id" element={<JoinEvent />} />
            </Route>
            <Route path="/" element={<Layout1 />}>
              <Route element={<PersistLogin />}>
                <Route element={<RequireAuth />}>
                  <Route index element={<Dashboard />} />
                  <Route path="/event/:id" element={<Event />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/create" element={<Editor />} />
                </Route>
              </Route>
            </Route>
            <Route path="/" element={<Layout2 />}>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/certificate/:id/:pid" element={<Certificate />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CanvasContext.Provider>
    </AuthProvider>
  );
}
