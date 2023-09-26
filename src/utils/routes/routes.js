import UserCart from "../../pages/cart/UserCart";
import ContactForm from "../../pages/contact/ContactForm";
import Home from "../../pages/home/Home";
import Products from "../../pages/product/Products";

export const protectedRoutes = [
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/cart",
    element: <UserCart />,
  },
  {
    path: "/contact",
    element: <ContactForm />,
  },
];
