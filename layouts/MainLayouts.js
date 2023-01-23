import Footer from "components/Footer";
import Header from "components/Header";

const MainLayouts = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayouts;
