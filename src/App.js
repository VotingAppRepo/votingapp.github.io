import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/main-layout";
import { AdminLayout } from "./layouts/admin-layout";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { SignIn } from "./layouts/sign-in-layout";
import { SignUp } from "./layouts/sign-up-layout";
import { Error404 } from "./components/404";
import 'bootstrap/dist/css/bootstrap.min.css';
import { DraftLayout } from "./layouts/draft-layout";
import { useDispatch, useSelector } from "react-redux";
import { loginUserSuccess } from "./store/actions/auth/auth.actions";
import { Paths } from "./services/paths";
import { useNavigate, useLocation } from "react-router-dom";
import { Profile } from "./components/profile";

const protectedRoutes = ['/votingapp.github.io/', '/votingapp.github.io/login', '/votingapp.github.io/register']

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const userRole = useSelector(state => state.auth.userRole);

  useEffect(() => {
      const token = localStorage.getItem('token');
      const role = localStorage.getItem('role');
      if(!protectedRoutes.includes(pathname)){
        token && role ?  dispatch(loginUserSuccess(role)) : navigate(Paths.LOGIN);
      }
  }, [dispatch, navigate, userRole]);

  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route path="/votingapp.github.io" element={<DraftLayout/>}/>
                <Route path="/account">
                  <Route path="/profile" element={<Profile/>}/>
                  <Route path="/voting" element={<MainLayout/>}/>
                </Route>
                <Route path="/admin" element={<AdminLayout/>}/>
                <Route path="/login" element={<SignIn/>} />
                <Route path="/register" element={<SignUp/>} />
                {/* <Route path="/*" element={<Error404/>} /> */}
            <Route/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
