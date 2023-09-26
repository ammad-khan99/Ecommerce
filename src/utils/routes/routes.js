import Login from "../../pages/auth_pages/login/Login";
import UserCart from "../../pages/cart/UserCart";
import ContactForm from "../../pages/contact/ContactForm";
import NotFound from "../../pages/error-page/NotFound";
import Home from "../../pages/home/Home";
import Products from "../../pages/product/Products";

export const routes = [
  {
    path: "/",
    element: <Login />,
    isProtected:false,
    exact: true
  },
  {
    path: "*",
    element: <NotFound />,
    isProtected:false,
    exact: false
  },
  {
    path: "/home",
    element: <Home />,
    isProtected:true,
    exact: true
  },
  {
    path: "/products",
    element: <Products />,
    isProtected:true,
    exact: true
  },
  {
    path: "/cart",
    element: <UserCart />,
    isProtected:true,
    exact: true
  },
  {
    path: "/contact",
    element: <ContactForm />,
    isProtected:true,
    exact: true
  },
];
