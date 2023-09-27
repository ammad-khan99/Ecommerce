import Login from "./pages/auth_pages/login/Login";
import UserCart from "./pages/cart/UserCart";
import ContactForm from "./pages/contact/ContactForm";
import NotFound from "./pages/error-page/NotFound";
import Home from "./pages/home/Home";
import Products from "./pages/product/Products";
import { routeConstants } from "./utils/constants";

export const routes = [
  {
    path: routeConstants.DEFAULT_ROUTE,
    element: <Login />,
    isProtected:false,
    exact: true
  },
  {
    path: routeConstants.ANY,
    element: <NotFound />,
    isProtected:false,
    exact: false
  },
  {
    path: routeConstants.HOME_ROUTE,
    element: <Home />,
    isProtected:true,
    exact: true
  },
  {
    path: routeConstants.PRODUCTS_ROUTE,
    element: <Products />,
    isProtected:true,
    exact: true
  },
  {
    path: routeConstants.CART_ROUTE,
    element: <UserCart />,
    isProtected:true,
    exact: true
  },
  {
    path: routeConstants.CONTACT_ROUTE,
    element: <ContactForm />,
    isProtected:true,
    exact: true
  },
];
