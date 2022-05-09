import { Outlet } from "react-router-dom";
import { Announcement } from "../components/Announcement";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Newsletter } from "../components/Newsletter";
import { Wrapper } from "../components/Wrapper";

export const MainLayout = () => {
  return (
    <>
      <Announcement />
      <Wrapper>
        <Navbar />
      </Wrapper>
      <Wrapper style={{ marginBottom: "40px" }}>
        <Outlet />
      </Wrapper>
      <Newsletter />
      <Footer />
    </>
  );
};
