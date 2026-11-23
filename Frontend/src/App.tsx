import MainPage from "./pages/MainPage";
import Profile from "./pages/Profile";
import Petitions from "./pages/Petitions";
import SavedWorks from "./pages/SavedWorks";
import MainLayout from "./layout/MainLayout";
import AuthLayout from "./layout/AuthLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Identify from "./pages/recover/Identify";
import VerifyCode from "./pages/recover/VerifyCode";
import NewPassword from "./pages/recover/NewPassword";
import NotFound from "./pages/NotFound";
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<MainLayout />}>
        <Route index element={<MainPage />} />
          <Route path="profile" element={<Profile />} />
          <Route path="petitions" element={<Petitions />} />
          <Route path="saved-works" element={<SavedWorks />} />
        </Route>
          <Route path="/" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="recover/identify" element={<Identify />} />
          <Route path="recover/verify-code" element={<VerifyCode />} />
          <Route path="recover/new-password" element={<NewPassword />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>

    )
  )
  return (
    <RouterProvider router={router} />
  );
}
