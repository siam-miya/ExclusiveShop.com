import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/login";
import SignUp from "./pages/signUp";
import MainLayout from "./layouts/MainLayout";
import ErrorPage from "./pages/ErrorPage";
const App = () => {
  return (
     <BrowserRouter>
    <Routes>
     <Route path="/" element={<MainLayout/>}>
      <Route index={true} element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
     </Route>
     <Route path="*" element={<ErrorPage/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App
