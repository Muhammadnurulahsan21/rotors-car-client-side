import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from "./ContextApi/AuthProvider";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import NotFound from "./Components/NotFound/NotFound";
import ContactUs from "./Components/ContactUs/ContactUs";
import Dashboard from "./Components/Dashboard/Dashboard";
import Register from "./Components/Register/Register";
import OurCars from "./Components/OurCars/OurCars";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import MyOrders from "./Components/MyOrders/MyOrders";
import Payments from "./Components/Payments/Payments";
import ManageAllOrders from "./Components/ManageAllOrders/ManageAllOrders";
import AddReview from "./Components/AddReview/AddReview";
import AddProduct from "./Components/AddProduct/AddProduct";
import OrderDetails from "./Components/OrderDetails/OrderDetails";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
        <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute exact path="/OurCars">
              <OurCars></OurCars>
            </PrivateRoute>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/dashboard">
              <Dashboard></Dashboard>
            </Route>
            <Route exact path="/contactus">
              <ContactUs></ContactUs>
            </Route>
            <Route exact path="/myorders">
              <MyOrders></MyOrders>
            </Route>
            <Route exact path="/payments">
              <Payments></Payments>
            </Route>
            <Route exact path="/manageallorders">
              <ManageAllOrders></ManageAllOrders>
            </Route>
            <PrivateRoute exact path="/addproduct">
              <AddProduct></AddProduct>
            </PrivateRoute>
            <PrivateRoute exact path="/orderdetails/:packageKey">
              <OrderDetails></OrderDetails>
            </PrivateRoute>
            <Route exact path="/addreview">
              <AddReview></AddReview>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
