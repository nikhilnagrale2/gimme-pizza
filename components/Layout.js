import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    // <> is a fragment tag that allows you to return multiple elements
    <>
      {/* It is layout by which Navbar and Footer will be displayed on every page and we do not have to write it again and again on every page. */}
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;