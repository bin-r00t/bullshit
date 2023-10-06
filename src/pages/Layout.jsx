import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header>header</Header>
      <main className="h-1 flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
