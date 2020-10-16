import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "../..//HomePage";
// import ProductsPage from "../../containers/ProductsPage";
// import CategoryPage from "../../containers/CategoryPage";
import Nav from "../Nav";
// import ProductItemPage from "../../containers/ProductItemPage";
import About from "../About";
// import CartContainer from "../../containers/CartContainer";

// import CheckoutPage from "../../containers/CheckoutPage";
// import OrderConfirmation from "../../containers/OrderConfirmation";
import Error from "../Error";
import Footer from "../Footer";

const Layout = () => {
  return (
    <Router>
      <Nav />
    </Router>
  );
};

export default Layout;
