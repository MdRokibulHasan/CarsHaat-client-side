import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Navbar from "./Shared/Navbar/Navbar";
import Footer from "./Shared/Footer/Footer";
import Login from "./Pages/Login/Login/Login";
import Registration from "./Pages/Login/Login/Resgistration/Registration";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact/Contact";
import Products from "./Pages/Products/Products/Products";
import PrivateRoute from "./Pages/Login/Login/PrivateRoute";
import Dashboard from "./Pages/Dashboard/Dashboard";
import BuyProducts from "./Pages/Products/BuyProducts/BuyProducts";
import UserReview from "./Pages/Dashboard/UserReview/UserReview";
import NotFound from "./NotFound/NotFound";
import UserShowReview from "./Pages/Dashboard/UserShowReview/UserShowReview";
import LatestNews from "./Pages/Home/LatestNews/LatestNews";
import DisplayUserProduct from "./Pages/Products/DisplayUserProduct/DisplayUserProduct";



function App() {
  return (
    <AuthProvider>
      <Router>
        <Route>

        </Route>
        <Switch>
          <Route path="/login">
            <Navbar></Navbar>
            <Login />
            <Footer></Footer>
          </Route>
          <Route path="/registration">
            <Navbar></Navbar>
            <Registration />
            <Footer></Footer>
          </Route>
          <Route exact path="/">
            <Navbar></Navbar>
            <Home />
            <Footer></Footer>
          </Route>
          <Route path="/home">
            <Navbar></Navbar>
            <Home />
            <Footer></Footer>
          </Route>
          <Route path="/about">
            <Navbar></Navbar>
            <About></About>
            <Footer></Footer>
          </Route>
          <PrivateRoute path="/products">
            <Navbar></Navbar>
            <Products></Products>
            <Footer></Footer>
          </PrivateRoute>
          <PrivateRoute path="/buyproducts/:id">
            <Navbar></Navbar>
            <BuyProducts></BuyProducts>
            <Footer></Footer>
          </PrivateRoute>

          <Route path="/contact">
            <Navbar></Navbar>
            <Contact></Contact>
            <Footer></Footer>
          </Route>
          <Route path="/dashboard">
            <Dashboard></Dashboard>

          </Route>
          <Route path="/showuserreview">
            <UserShowReview></UserShowReview>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
          <Route path="/latestnews">
            <LatestNews></LatestNews>
          </Route>
          <Route path="displayproduct">
            <DisplayUserProduct></DisplayUserProduct>
          </Route>
        </Switch>


      </Router>
    </AuthProvider>
  );
}

export default App;
